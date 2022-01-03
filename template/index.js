/*
读取文件，读取内容，创建文件
文件更改： list.js , router/config/ , components/content , 
*/
const fs = require('fs')
const path = require('path')
const addListConfig = require('./addList')
const addRouteConfig = require('./addRoutes')
const tpl = require('./template.js')

/* filter files which are newer*/
const workDir = '../src/textconfig'

function isDirectory(path) {
    return fs.lstatSync(path).isDirectory()
}

function readFiles(fileArray, mainDir) {
    if (isDirectory(mainDir)) {
        const files = fs.readdirSync(mainDir)
        if (!files) return fileArray.push(mainDir)
        for (let i=0; i<files.length;i++) {
            const file = files[i]
            readFiles(fileArray, path.join(mainDir, file))
        }
    } else {
        fileArray.push(mainDir)
    }
    
}

const allFiles = []
readFiles(allFiles, workDir)

const store = fs.readFileSync('./store.txt',{encoding: 'utf8'}).split(';')
const filteredFiles = allFiles.filter(item => !store.includes(`[${item}]`) && !item.includes('list'))

/* get route path, banner and content config*/
function trimComment(str) {
    return str.replace(/^(\*)|(\n)+|(\s)+|(\*)$/g, function() {
        return ''
    })
}

function getConfig(trimed) {
    const config = {}
    trimComment(trimed).split(';').forEach(item => {
        if(!item) return
        const [rawkey, content] = item.split(':')
        const key = rawkey.replace('@','')
        config[key] = content
    })
    return config
}

const pChain = new Promise(r => { r() }) 

if(filteredFiles.length) {
    let _pChain
    filteredFiles.forEach(iPath => {
        const filename = path.basename(iPath,'.js')
        const upperFilename = filename.replace(/^\D/i, function(matched){ return matched.toUpperCase()})
        const fileArr = iPath.split(path.sep)
        const filetype = fileArr.filter((item,index, arr) => index >= (arr.length - 2)).join('/')

        const rData = fs.readFileSync(iPath, 'utf8')
        const rawConfig = rData .match(/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+/)[0]
        const config = getConfig(rawConfig)

        _pChain = pChain.then(() => {
            fs.writeFileSync(`../src/components/content/${upperFilename}.vue`, tpl.replace(/\$\[\]\$/g, filename).replace('$[path]$', filetype))
        }).then(() => {
            addRouteConfig(filetype, config.path, upperFilename, config.banner)
        }).then(() => {
            addListConfig(filetype, config.path, config.content)
        })
        

    })
    store.push(...filteredFiles.map(item => `[${item}]`))
    _pChain.then(() => {
        fs.writeFileSync('./store.txt', store.join(';'))
    })
} else {
    console.log('no text file created')
}




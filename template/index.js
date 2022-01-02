/*
读取文件，读取内容，创建文件
*/
const fs = require('fs')
const path = require('path')
const tpl = require('./template.js')
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
const workDir = '../src/textconfig'
const arr = []
readFiles(arr, workDir)

const data = fs.readFileSync('./store.txt',{encoding: 'utf8'}).split(';')
const newfile = arr.filter(item => !data.includes(`[${item}]`) && !item.includes('list'))

if(newfile.length) {
    newfile.forEach(item => {
        const filename = path.basename(item,'.js')
        const upperFilename = filename.slice(0,1).toUpperCase() + filename.slice(1)
        const fileArr = item.split(path.sep)
        console.log(fileArr)
        const filterPath = fileArr.filter((item,index, arr) => index >= (arr.length - 2)).join('/')
        fs.writeFileSync(`../src/components/content/${upperFilename}.vue`, tpl.replace(/\$\[\]\$/g, filename).replace('$[path]$', filterPath))
    })
    data.push(...newfile.map(item => `[${item}]`))
    fs.writeFileSync('./store.txt', data.join(';'))
}
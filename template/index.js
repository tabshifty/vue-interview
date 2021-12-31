/*
读取文件，读取内容，创建文件



*/
const fs = require('fs')
const path = require('path')
// const tpl = require('template.js')
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
// const data = arr.map(item => `[${item}]`).join(';')
// fs.writeFileSync('./store.txt', data)
// console.log(data)

const data = fs.readFileSync('./store.txt',{encoding: 'utf8'}).split(';')
console.log(data)
const newfile = arr.filter(item => !data.includes(`[${item}]`) && !item.includes('list')).

// if(newfile.length) {
//     newfile.forEach(item => {
//         fs.writeFileSync('')
//     })
// }
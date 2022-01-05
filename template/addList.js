const tpl = 
`{ path: '$p', content:'$c'},
`
const placeholder = `/*placeholder*/`
const fs = require('fs')

function addListConfig (filetype, _path, content) {
    const _p = `../src/textConfig/${filetype}/list.js`
    const lData = fs.readFileSync(_p, 'utf8')
    const writtenContent = lData.replace(placeholder, function() {
        return placeholder + '\n    ' + tpl.replace('$p', _path). replace('$c', content)
    })
    fs.writeFileSync(_p, writtenContent)
}

module.exports = addListConfig
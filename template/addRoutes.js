// const path = require('path')
const fs = require('fs')
const template = 
`{
    path: '$p',
    component: () => import('@/components/content/$c.vue'),
    meta: {
        banner: '$b'
    }
},
`

const placeholder = `/*placeholder*/`

module.exports = function addRouteConfig(filetype, path, content, banner) {
    const _p = `../src/router/config/${filetype}Route.js`
    const rData = fs.readFileSync(_p, 'utf8')
    const writtenContent = rData.replace(placeholder, function() {
        return template.replace('$p', path)
            . replace('$c', content)
            .replace('$b', banner) + '\n\s\s\s\s' + placeholder
    })
    fs.writeFileSync(_p, writtenContent)
}

                                                                                                                                                                        
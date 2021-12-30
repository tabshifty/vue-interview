const shadowcode =
`// 浅拷贝简单的实现代码
const shadowCopy = function(clone) {
    const cloned = {}
    for (let key in clone) {
        cloned[key] = clone[key]
    }
    return cloned
}
`
const shadowMd = 
` 1. 使用Object.assign()的方法实现, 但当对象只有一层基础类型的数据时属于深拷贝
 2. 展开运算符是一个 es6 / es2015特性，它提供了一种非常方便的方式来执行浅拷贝，与 Object.assign ()的功能相同
 3. Array.prototype.concat() 和 Array.prototype.slice()
`
//深拷贝简单的实现代码
const deepCode = 
`const deepCopy = function(clone) {
    const cloned = Array.isArray(clone) ? [] : {}
    for (let key in clone) {   
        if (typeof clone[key] === 'object') {
            cloned[key] = deepCopy(clone[key])
        } else {
            cloned[key] = clone[key]
        }
    }
    return cloned
}
`

const deepMd = 
` 1. 用JSON.stringify把对象转成字符串，再用JSON.parse把字符串转成新的对象(可以转成JSON格式的对象才可以这样用)
 2. 使用Object.create()方法
`

export default {
    code: {
        shadow: shadowcode,
        deep: deepCode
    },
    markdown: {
        shadow: shadowMd,
        deep: deepMd
    }
}
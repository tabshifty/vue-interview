/*
    @banner:  数组相关的问题;
    @content: 数组常用函数和遇到的一些问题;
    @path: array;
*/
export default [
`h3$$判断数组的方式都有哪些`,
`li$$通过toString做判断`,
`code$$Object.prototype.toString.call(obj).slice(8,-1) === 'Array'`,
`li$$通过原型链做判断`,
`code$$obj.__proto__ === Array.prototype;`,
`li$$通过instanceof`,
`code$$obj instanceof Array`,
`li$$通过ES6的Array.isArray()做判断`,
`code$$Array.isArray(obj)`,
`h3$$数组常用的一些函数`,
`h4$$Array.prototype.splice()`,
`$$可以用来删除元素，替换元素，添加元素。  
以数组形式返回被修改的内容。此方法会改变原数组。`,
`code$$const myFish = ['angel', 'clown', 'drum', 'sturgeon'];

// 删除元素
const removed = myFish.splice(2, 1);

// 替换元素
const removed = myFish.splice(2, 1, "trumpet");

//添加元素
myFish.splice(2, 0, "trumpet");
`,
`h4$$Array.prototype.reduce()`,
`$$对数组中的每个元素执行一个由您提供的reducer函数，将其结果汇总为单个返回`,
`code$$//典型的用法
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
});
`,
`h3$$数组常遇到的问题`,
`$$1. 给数组去重`,
`code$$// 使用ES6的Set
[...new Set([1,2,3,4,5,1,6,2,3])]

// 标记的方法
const arr = [1,2,3,4,5,1,6,2,3]
const obj = {}
arr.forEach((item) => {
    if (!obj[item]) {
        obj[item] = item
    }
})
const newArr = Object.values(obj)
`
]
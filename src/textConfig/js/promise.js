/*
    @Banner: ;
    @content:;
    @path: ;
*/
export default [
`h3$$Promise需要注意的几个点`,
`markdown$$ * Promise共有三种状态，也只能是三种状态的一种
 * Promise返回值后可以使用then和catch调用，调用后会返回新的Promise（也可以和原来的Promise一样Promise/A+）
 * catch是then(null, onRejected)的另一种写法，reject的值若未处理会一直传递给下一个Promise
 * 通常使用的Promise链式调用的返回对象和原Promise不同(假定返回的为Promise2)，但Promise2会返回onFulfilled(value)的值
 * Promise属于微任务，但new一个Promise会立即执行

![promise](https://mdn.mozillademos.org/files/8633/promises.png)  

详细的介绍可以查看[Promise/A+](https://promisesaplus.com/)
`,
`$$使用方法和注意项可以看以下这几个例子`,
`code$$    /*常见的问题: 执行顺序*/
    console.log(1)
    setTimeout(() => console.log(2), 0)
    new Promise((resolve, reject) => {
        console.log(3)
        setTimeout(() => resolve(4), 0)
        setTimeout(() => console.log(5))
    }).then(data => {
        console.log(data)
    })

    /* result: 1, 3, 2, 4, 5*/

    /* 下面函数的执行顺序，如果resolve和reject调换顺序，结果又是什么*/
    new Promise((resolve, reject) => {
        resolve(1) // reject(2)  
        reject(2)  // resolve(1)
    }).catch(data =>{
         console.log("err",data)
    }).then(data => {
        console.log("success",data)
    })
    
    /* result: success 1*/
    /*调换顺序后: err 2, success undefined */
`,
`h3$$如何自己写一个promise`,
`$$先查看Promise的规范，了解它是如何运作的，写一个简易的Promise就很简单了`,
`code$$ /*未添加try{} catch(){}, 还有一些细节处理*/
function promise(executor) {
         
    const resolve = value => {
        if (this.state === 'REJECTED') return
        this.state = 'FULLFILLED'
        this.result = value
        this.fullfill.forEach((onResolve, index) => {
            const x = onResolve.call(undefined, value)
            if (typeof x == 'object' && x.constructor == promise) {
                x.then(this.xValue[index])
            } else {
                this.xValue[index](x)
            }
        })
    }
    const reject = reason => {
        if (this.state === 'FULLFILLED') return
        this.state = 'REJECTED'
        this.result = reason
        this.reject.forEach(onReject => {
            onReject.call(undefined, reason)
        })
    }
    this.state = "PENDING"
    this.fullfill = []           // 模拟异步resolve
    this.reject = []             //模拟一步reject
    this.xValue = []             // 模拟返回异步fullfilled的结果
    executor(resolve, reject)
}

promise.prototype.then = function(onResolve, onReject) {
    const {state, result} = this
    let meetFullfillDemand = typeof onResolve === 'function',
        meetRejectDemand = typeof onReject === 'function'

    return new promise((resolve, reject) => {
        if(!meetRejectDemand && state === "REJECTED") {
            reject(result)
        } else if(!meetFullfillDemand && state === "FULLFILLED") {
            resolve(result)
        }
        if(state == "FULLFILLED" && meetFullfillDemand) {
            const x = onResolve.call(undefined, result)
            if (typeof x == 'object'&& x.constructor == promise) {
                x.then(resolve, reject)
            }else{
               resolve(x)
            }
        } else if(meetFullfillDemand) {
            this.fullfill.push(onResolve)
            this.xValue.push(resolve)
        }
        if(state == "REJECTED"&& meetRejectDemand) {
            onReject.call(undefined, result)
        } else if(meetRejectDemand) {
            this.reject.push(onReject)
        }
    })
}

promise.prototype.catch = function(onReject) {
    return this.then(null, onReject)
}
`,
]
<template>
    <div class="parseBox">
        <p v-for="(item, index) in other"  :key="index" class="flexItem" :style="`order: ${item.order}`" v-html="item.html">
        </p>
        <p v-for="(item, index) in sample"  :key="index" class="flexItem" :style="`order: ${item.order}`">
            <Sample :sampleSrc="item.content" />
        </p>
        <p v-for="(item, index) in markdown"  :key="index" class="flexItem" :style="`order: ${item.order}`">
            <Text :mdSource="item.content"/>
        </p>
        <p v-for="(item, index) in code"  :key="index" class="flexItem" :style="`order: ${item.order}`">
            <CodeSnippet :rawCode="item.content" />
        </p>
    </div>
</template>

<script>
import Text from './Text.vue'
import CodeSnippet from './CodeSnippet.vue'
import Sample from './Sample.vue'
// import markdown from "markdown-it"
// import hljs from "highlight.js"
// import contents from '@/textConfig/http/cache.js'
// const md = new markdown()
// const htmlParse = {
//     code: hljs,
//     markdown: md
// }
export default {
    name: 'Parse',
    props: {
        contents: Array
    },
    computed: {
        htmlString() {
            return this.contents.map((item, index) => {
                const [tag, content] = item.split("$$")
                return {
                    order: index + 1,
                    tag,
                    content  
                }
            })
        },
        sample() {
            return this.htmlString.filter(item => item.tag.includes('sample'))
        },
        markdown() {
            this.htmlString.filter(item => console.log(item.tag))
            return this.htmlString.filter(item => item.tag.includes('markdown'))
        },
        code() {
            return this.htmlString.filter(item => item.tag.includes('code'))
        },
        other() {
            return this.htmlString.filter(item=> !item.tag.match(/sample|markdown|code/ig)).map(item => {
                return {
                    order: item.order,
                    html:!item.tag ? item.content :`<${item.tag} class="wrap">${item.content}</${item.tag}>`
                }
            })
        }

    },
    created() {
        // this.htmlString = contents.map(item => {
        //     let html = '';
        //     const [tag, content] = item.split("$$")
        //     switch(tag) {
        //         case 'code':
        //             console.log(hljs.highlight(content,{language: 'javascript'}))
        //             html = `<pre languge="javascript"><code class="hljs javascript">${hljs.highlight(content,{language: 'javascript'}).value}</code></pre>`
        //             break
        //         case 'markdown':
        //             html = `<div>${md.render(content)}</div>`
        //             break
        //         default: 
        //             html = `<${tag}>${content}</${tag}>`
        //     }
        //     return html
        // }).join('  ')
    },
    mounted() {
        
        // console.log(hljs)
        // console.log(md)
        // console.log(content)
    },
    components : {
        Text,
        Sample,
        CodeSnippet
    }
}
</script>

<style scoped>
    .parseBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    p.flexItem {
        width: 100%;
    }
    
    p, ul, li, h3, h4 {
        margin: 0;
        padding: 0;
    }


    p:deep() img {
        max-width: 100%;
    }

</style>
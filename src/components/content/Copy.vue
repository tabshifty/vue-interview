<template>
    <div class="copBox">
        <h3>浅拷贝</h3>
        <p>
            浅拷贝只在第一层对属性进行赋值操作，如果属性是基本数据则直接赋值(存放在栈内存中)，如果是引用类型则对指针地址进行赋值，实际的值存放在堆内存中
        </p>
        <p>
            代码参考
        </p>
        <CodeSnippet codeLanguge="javascript" :rawCode="copyjs.code.shadow" />
        <p>
            其他方式:
        </p>
        <Text :mdSource="copyjs.markdown.shadow"/>
        <h3>深拷贝</h3>
        <p>
            深拷贝在赋值是类似于每层的对象属性都会进行新建一个对象进行拷贝, 复制整个对象，返回新的引用指针
        </p>
        <p>
            代码参考
        </p>
        <CodeSnippet codeLanguge="javascript" :rawCode="copyjs.code.deep" />
        <p>
            其他方式:
        </p>
        <Text :mdSource="copyjs.markdown.deep"/>
    </div>
</template>
<script>
import CodeSnippet from '@/components/common/CodeSnippet.vue'
import copyjs from '@/textConfig/js/copy.js'
import Text from '@/components/common/Text.vue'

export default {
    data() {
        return {
            copyjs
        }
    },
    components: {
        CodeSnippet,
        Text
    }
}
</script>

<style scoped>

</style>
<template>
    <div class="flex-part">
        <p class="description">1. 父容器的属性</p>
        <Text :mdSource="css.flex.parent_md" />
        <div class="description">使用flex水平垂直居中</div> 
        <CodeSnippet codeLanguge="css" :rawCode="css.flex.center" />
        <Sample sampleSrc="https://tabshifty.github.io/learning/flexcenter.html" />
        <!-- https://tabshifty.github.io/learning/flexcenter.html -->
        <p class="description">2. 子容器的属性</p>
        <Text :mdSource= "css.flex.item_md" />
    </div>
</template>

<script>
import CodeSnippet from '@/components/common/CodeSnippet.vue'
import Sample from '@/components/common/Sample.vue'
import Text from '@/components/common/Text.vue'
import { css } from '@/textConfig/css/cssSnippet.js'

export default {
    name: "Flex",
    data() {
        return {
            css,
        }
    },
    components: {
        CodeSnippet,
        Sample,
        Text
    },
}
</script>

<style scoped>
    .flex-part {
        position: relative;
        text-align: left;
    }
    .description {
        font-weight: bold;
        /* margin-top: 2.7rem; */
    }
</style>
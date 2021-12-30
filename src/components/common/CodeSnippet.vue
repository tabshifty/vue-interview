<template>
    <div class="codeblock">
        <highlightjs :languge="codeLanguge" :code="rawCode" />
    </div>
</template>

<script>
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
export default {
    name: 'CodeSnippet',
    props: {
        rawCode: {
            type: String,
            required: true,
        },
        codeLanguge: {
            type: String
        }
    },
    components: {
        highlightjs: hljsVuePlugin.component
    },
}
</script>

<style scoped>
    .codeblock >>> pre {
        border-left: 6px solid #2b6c92;
    }
    .codeblock >>>code {
        font-family: Consolas, Monaco, monospace;
    }
</style>
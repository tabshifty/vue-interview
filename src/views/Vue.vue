<template>
    <div class="vue-content">
        <Wrapper :list="vueList" />
    </div>
</template>

<script>
import list from '@/textConfig/vue/list.js'
import Wrapper from './Wrapper.vue'

export default {
    name: "Vue",
    data() {
        return {
            vueList: list
        }
    },
    components: {
        Wrapper
    },
}
</script>

<style scoped>
</style>
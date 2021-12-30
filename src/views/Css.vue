<template>
    <div class="css-content">
        <Wrapper :list="cssList" />
    </div>
</template>

<script>
import list from '@/textConfig/css/list.js'
import Wrapper from './Wrapper.vue'

export default {
    name: "Css",
    data() {
        return {
            cssList: list
        }
    },
    components: {
        Wrapper
    },
}
</script>

<style scoped>
</style>
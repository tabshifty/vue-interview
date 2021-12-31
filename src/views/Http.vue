<template>
    <div class="http-content">
        <Wrapper :list="httpList" />
    </div>
</template>

<script>
import list from '@/textConfig/http/list.js'
import Wrapper from './Wrapper.vue'

export default {
    name: "Http",
    data() {
        return {
            httpList: list
        }
    },
    components: {
        Wrapper
    },
}
</script>
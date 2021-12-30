<template>
    <div class="js-content">
        <Wrapper :list="jsList" />
    </div>
</template>

<script>
import list from '@/textConfig/js/list.js'
import Wrapper from './Wrapper.vue'

export default {
    name: "Css",
    data() {
        return {
            jsList: list
        }
    },
    components: {
        Wrapper
    },
}
</script>
<template>
    <div class="arrayBox">
        <Parse :contents="arrayContent" />
    </div>
</template>
<script>
import Parse from '@/components/common/Parse.vue'
import arrayContent from '@/textConfig/js/array.js'

export default {
    data() {
        return {
            arrayContent
        }
    },
    components: {
        Parse,
    }
}
</script>

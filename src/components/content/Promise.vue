<template>
    <div class="promiseBox">
        <Parse :contents="promiseContent" />
    </div>
</template>
<script>
import Parse from '@/components/common/Parse.vue'
import promiseContent from '@/textConfig/js/promise.js'

export default {
    data() {
        return {
            promiseContent
        }
    },
    components: {
        Parse,
    }
}
</script>

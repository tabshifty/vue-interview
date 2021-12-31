<template>
    <div class="cacheBox">
        <Parse :contents="cacheStr" />
    </div>
</template>
<script>
import Parse from '@/components/common/Parse.vue'
import cacheStr from '@/textConfig/http/cache.js'

export default {
    data() {
        return {
            cacheStr
        }
    },
    components: {
        Parse,
    }
}
</script>
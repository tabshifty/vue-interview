module.exports =
`<template>
    <div class="cacheBox">
        <Parse :contents="cacheStr" />
    </div>
</template>
<script>
import Parse from '@/components/common/Parse.vue'
import cacheStr from '@/textConfig/http/$[]$.js'

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
`
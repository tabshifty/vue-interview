module.exports =
`<template>
    <div class="$[]$Box">
        <Parse :contents="$[]$Content" />
    </div>
</template>
<script>
import Parse from '@/components/common/Parse.vue'
import $[]$Content from '@/textConfig/http/$[]$.js'

export default {
    data() {
        return {
            $[]$Content
        }
    },
    components: {
        Parse,
    }
}
</script>
`
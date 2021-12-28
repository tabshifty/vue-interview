<template>
    <div class="css-content">
        <router-link v-for="issue in issues" :to="`/css/${issue.paramPath}`" :key="issue.paramPath"></router-link>
        <Flex />
    </div>
</template>

<script>
import Flex from '@/components/content/Flex.vue'

export default {
    name: "Css",
    data() {
        return {
            issues:[
                {
                    paramPath: `flex`,
                    banner: `Flex描述和常见问题`
                }
            ]
        }
    },
    components: {
        Flex,
    }
}
</script>

<style scoped>
    .css-content {
        margin-top: 3.2rem;
    }
</style>
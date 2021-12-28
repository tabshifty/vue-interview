<template>
    <div class="js-content">
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
                    paramPath: `copy`,
                    banner: `浅拷贝与深拷贝的问题`
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
    .js-content {
        margin-top: 3.2rem;
    }
</style>
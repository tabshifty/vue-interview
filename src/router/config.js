const jsContentRoutes = [
    {
        path: 'copy',
        component: () => import('@/components/content/Copy.vue'),
        meta: {
            banner: '深拷贝与浅拷贝'
        }
    },
]

const cssContentRoutes = [
    {
        path: 'flex',
        component: () => import('@/components/content/Flex.vue'),
        meta: {
            banner: 'Flex描述和常见的问题'
        }
    },
]

export {
    jsContentRoutes,
    cssContentRoutes
}
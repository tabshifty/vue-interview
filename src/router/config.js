const jsContentRoutes = [
    {
        path: 'copy',
        component: () => import('@/components/content/Copy.vue'),
        meta: {
            banner: '深拷贝与浅拷贝'
        }
    },
    {
        path: 'promise',
        component: () => import('@/components/content/Promise.vue'),
        meta: {
            banner: 'Promise'
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

const httpContentRoutes = [
    {
        path: 'cache',
        component: () => import('@/components/content/Cache.vue'),
        meta: {
            banner: '浏览器的缓存'
        }
    },
]

export {
    jsContentRoutes,
    cssContentRoutes,
    httpContentRoutes
}
export default  [
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
    { path: 'array', component: () => import('@/components/content/Array.vue'), meta: { banner: '数组相关的问题' } },

    /*placeholder*/
]
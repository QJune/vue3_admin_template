import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/pages/dashboard/index.vue'),
                meta: {
                    title: '控制面板',
                    affix: true,
                    icon: 'test'
                }
            }
        ]
    },
    {
        path: '/menu',
        component: Layout,
        redirect: '/menu/menu1',
        name: 'Menu',
        meta: {
            title: '菜单',
            icon: 'test'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/pages/menu/menu1/index.vue'), // Parent router-view
                name: 'Menu1',
                meta: { title: '菜单1' },
                redirect: '/menu/menu1/menu1-1',
                children: [
                    {
                        path: 'menu1-1',
                        component: () =>
                            import('@/pages/menu/menu1/menu1-1/index.vue'),
                        name: 'Menu1-1',
                        meta: { title: '菜单1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () =>
                            import('@/pages/menu/menu1/menu1-2/index.vue'),
                        name: 'Menu1-2',
                        meta: { title: '菜单1-2' },
                        redirect: '/menu/menu1/menu1-2/menu1-2-1',
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () =>
                                    import(
                                        '@/pages/menu/menu1/menu1-2/menu1-2-1/index.vue'
                                    ),
                                name: 'Menu1-2-1',
                                meta: { title: '菜单1-2-1' }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () =>
                                    import(
                                        '@/pages/menu/menu1/menu1-2/menu1-2-2/index.vue'
                                    ),
                                name: 'Menu1-2-2',
                                meta: { title: '菜单1-2-2' }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () =>
                            import('@/pages/menu/menu1/menu1-3/index.vue'),
                        name: 'Menu1-3',
                        meta: { title: '菜单1-3' }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/pages/menu/menu2/index.vue'),
                name: 'Menu2',
                meta: { title: '菜单-nocache', noCache: true }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router

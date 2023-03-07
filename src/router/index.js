import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: {
                
            }
        },
        {
            path: '/pins',
            name: 'boliingPoint',
            component: () => import('@/views/BoilingPoint.vue')
        },
        {
            path: '/course',
            name: 'course',
            component: () => import('@/views/Course.vue')
        },
        {
            path: '/live',
            name: 'live',
            component: () => import('@/views/Live.vue')
        },
        {
            path: '/events',
            name: 'events',
            component: () => import('@/views/Events.vue')
        },
        {
            path: '/challenge',
            name: 'challenge',
            component: () => import('@/views/Challenge.vue')
        },
        {
            path: '/goods',
            name: 'goods',
            component: () => import('@/views/Goods.vue')
        }
    ]
});

export default router;
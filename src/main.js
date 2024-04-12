import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'

import  MediaView  from "./components/MediaView.vue";
import  BaseView  from "./components/BaseView.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        name: 'Media',
        path: '/media',
        component: MediaView
    },
    {
        name: 'base',
        path: '/',
        component: BaseView
    },
]
})


createApp(App).use(router).mount('#app')

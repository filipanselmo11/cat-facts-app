import Vue from 'vue';
import Router from 'vue-router';
import CatPage from './views/CatPage.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'hello-world',
            component: HelloWorld,
        },
        {
            path: '/cat-page',
            name: 'cat-page',
            component: CatPage
        }
    ]
})
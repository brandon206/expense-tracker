require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './vuetify';
import router from './Router';
import App from './App.vue';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    components: {
        App,
    },
});

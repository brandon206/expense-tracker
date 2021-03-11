require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './vuetify';
import router from './Router';
import App from './App.vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

Vue.use(VueRouter);
Vue.use(VueApollo);


const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:80/graphql',
    // handles the CORS error
    // fetchOptions: {
    //     mode: 'no-cors',
    // },
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

const app = new Vue({
    el: '#app',
    router,
    apolloProvider,
    vuetify,
    components: {
        App,
    },
});

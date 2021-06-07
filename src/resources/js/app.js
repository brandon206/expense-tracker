require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import vuetify from './vuetify';
import router from './Router';
import App from './App.vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuex);

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

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
});

const app = new Vue({
    el: '#app',
    store,
    router,
    apolloProvider,
    vuetify,
    components: {
        App,
    },
});

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import {routerMode} from './config/env'
import store from './store/'
import './config/rem'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import wcView from 'wc-view';
import 'wc-view/style.css';
Vue.use(wcView);

Vue.use(ElementUI);

Vue.use(require('vue-wechat-title'))


Vue.use(VueRouter)

const router = new VueRouter({
    mode: routerMode,
    base:__dirname,
    routes,
})


new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Channels from './components/Channels.vue'
import VueResource from 'vue-resource'

Vue.component('channels', Channels);
Vue.use(VueResource);

export const bus = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

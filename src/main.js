// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Channels from './components/Channels.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

//Creating Vue Component

Vue.component('channels', Channels);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

//Creating Custom directive- Globally registered

// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString().slice(2, 8);
//   }
// });

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'light') {
      el.style.backgroundColor = 'white';
    }
    else if (binding.value == 'dark') {
      el.style.backgroundColor = 'gray';
      el.style.padding = '20px';
      el.style.color = 'white';
    }

    if (binding.arg == 'column') {
      el.style.width = '50%';
      el.style.marginBottom = '10px';
      el.style.margin = 'auto';
    }
  }
})



export const bus = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */

// Globally Registered Filters

// Vue.filter('to - uppercase', function (value) {
//   return value.toUpperCase();
// })

// Vue.filter('snippet', function (value) {
//   return value.slice(0, 100) + '...';
// })


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})

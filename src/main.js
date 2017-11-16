import Vue from 'vue'
import App from './App.vue'
import ServerStatus from './ServerStatus.vue'
import ServerManager from './ServerManager.vue'

Vue.component('server-status', ServerStatus);
Vue.component('server-manager', ServerManager);

new Vue({
  el: '#app',
  render: h => h(App)
})

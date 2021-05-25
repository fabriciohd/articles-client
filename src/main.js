import Vue from 'vue'
import App from './App.vue'

import store from './config/store'
import router from './config/router'
import vuetify from './plugins/vuetify'
import toasted from 'vue-toasted';
import vue2Editor from "vue2-editor";

Vue.config.productionTip = false;

Vue.use(toasted);
Vue.use(vue2Editor);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

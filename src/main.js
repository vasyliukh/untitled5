import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import register_form from "@/components/register_form";
import VueRouter from "vue-router";
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  register_form,

}).$mount('#app',register_form)

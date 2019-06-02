import Vue from "vue";
import i18n from "./locales"; //这里顺序有必要
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
// import VueI18n from "vue-i18n";

// Vue.use(VueI18n);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// const i18n = new VueI18n({
//   locale: "zh", // 设置语言环境
//   messages: {
//     zh: require("./locales/zh.json"),
//     en: require("./locales/en.json")
//   }
// });

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

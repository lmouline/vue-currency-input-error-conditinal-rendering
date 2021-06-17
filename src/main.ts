import Vue from "vue";
import { createApp, h } from "vue-demi";
import App from "@/App.vue";

Vue.config.productionTip = false;

createApp({
  render: () => h(App),
}).mount("#app");

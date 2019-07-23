import "vuetify/dist/vuetify.min.css";

import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// Helpers
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: "#2337e9", // #E53935
    secondary: "#363638", // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

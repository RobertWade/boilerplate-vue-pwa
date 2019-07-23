import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false,
    showSnackbar: false,
    snackText: "Snackbar Text",
  },
  mutations: {
    toggleSnackbar(state, snackState: boolean) {
      if (snackState) {
        state.showSnackbar = snackState;
      } else {
        state.showSnackbar = !state.showSnackbar;
      }
    },
    toggleDarkmode(state, snackState: boolean) {
      state.darkMode = ! state.darkMode;
    },
  },
  actions: {
    toggleSnackbar(context, snackState: boolean) {
      context.commit("closeSnackbar", snackState);
    },
    toggleDarkmode(context) {
      context.commit("toggleDarkmode");
    },
  },
});

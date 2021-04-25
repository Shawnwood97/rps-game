import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorTitle: undefined,
  },

  mutations: {
    updateModalError(state, data) {
      state.errorTitle = data;
      // state.message = msg;
    },
  },
  actions: {},
  getters: {
    getModalError(state) {
      return state.errorTitle;
    },
  },
});

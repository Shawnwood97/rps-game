import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginSuccess: cookies.get("loginStatus"),
    succMsg: undefined,
    failedLoginMessage: undefined,
    successMessage: undefined,
    username: cookies.get("userName"),

    options: [
      {
        item: "rock",
        wins: "scissors",
        loses: "paper",
      },
      {
        item: "paper",
        wins: "rock",
        loses: "scissors",
      },
      {
        item: "scissors",
        wins: "paper",
        loses: "rock",
      },
    ],
  },

  mutations: {
    updateStatus(state, data) {
      state.loginSuccess = data;
    },

    updateError(state, data) {
      state.failedLoginMessage = data;
    },

    updateSuccMsg(state, data) {
      state.succMsg = data;
    },
  },
  actions: {},
  getters: {
    getLoginStatus(state) {
      return state.loginSuccess;
    },
  },
});

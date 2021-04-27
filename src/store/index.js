import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Login State
    loginSuccess: cookies.get("loginStatus"),
    succMsg: undefined,
    failedLoginMessage: undefined,
    successMessage: undefined,
    username: cookies.get("userName"),

    // Game State

    userSelection: undefined,
    cpuSelection: undefined,
    winnerWinner: undefined,
    cpuWins: 0,
    userWins: 0,
    gameTie: 0,

    options: [
      {
        id: 1,
        item: "Rock",
        wins: "scissors",
        loses: "paper",
        faIcon: "hand-rock",
      },
      {
        id: 2,
        item: "Paper",
        wins: "rock",
        loses: "scissors",
        faIcon: "hand-paper",
      },
      {
        id: 3,
        item: "Scissors",
        wins: "paper",
        loses: "rock",
        faIcon: "hand-scissors",
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

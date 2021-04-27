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
    gameTies: 0,

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

    updateUserSelection(state, data) {
      state.userSelection = data;
    },

    updateCpuSelection(state) {
      state.cpuSelection =
        state.options[Math.floor(Math.random() * state.options.length)];
    },

    updateWinner(state) {
      if (state.userSelection.wins === state.cpuSelection.item.toLowerCase()) {
        state.winnerWinner = `${state.username} Wins`;
        state.userWins++;
      } else if (
        state.userSelection.loses === state.cpuSelection.item.toLowerCase()
      ) {
        (state.winnerWinner = "CPU Wins"), state.cpuWins++;
      } else {
        state.winnerWinner = "Tie";
        state.gameTies++;
      }
    },
  },
  actions: {},
  getters: {
    getLoginStatus(state) {
      return state.loginSuccess;
    },

    getCpuSelection(state) {
      return state.cpuSelection;
    },

    getUserSelection(state) {
      return state.userSelection;
    },

    getWinner(state) {
      return state.winnerWinner;
    },

    getUserScore(state) {
      return state.userWins;
    },
    getCpuScore(state) {
      return state.cpuWins;
    },
    getGameTies(state) {
      return state.gameTies;
    },

    getResult(state) {
      return state.winnerWinner;
    },
  },
});

<template>
  <main>
    <div class="grid" v-if="loginToken">
      <score-board />
      <div id="boardGrid">
        <user-selection />
        <cpu-selection />
      </div>
      <div id="gameResult">{{ getResult }}</div>
      <user-select />
    </div>
    <div v-else>
      <h2>
        You are not logged in, so you can not play my very great game, sucks for
        you!
      </h2>
      <p>
        Actually, <span @click="backToLogin">Click here</span> to goto the login
        page and use the fake data to login and play!
      </p>
    </div>
  </main>
</template>

<script>
import CpuSelection from "./CpuSelection.vue";
import UserSelect from "./UserSelect.vue";
import UserSelection from "./UserSelection.vue";
import ScoreBoard from "./ScoreBoard";
import cookies from "vue-cookies";

export default {
  components: { UserSelect, CpuSelection, UserSelection, ScoreBoard },
  name: "game-body",

  data() {
    return {
      loginToken: cookies.get("loginToken"),
    };
  },

  computed: {
    getResult() {
      return this.$store.state.winnerWinner;
    },
  },

  methods: {
    backToLogin() {
      this.$store.state.loginSuccess = null;
      cookies.remove("userName");
      cookies.remove("emailAddress");
      cookies.remove("loginStatus");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  min-height: 90vh;
}

.grid {
  display: grid;
  place-items: center;
  min-width: 95vh;
  min-height: 90vh;
}

#boardGrid {
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  min-height: 150px;
}

span {
  cursor: pointer;
  color: #fff;
}

p {
  margin-top: 10px;
}

#gameResult {
  font-weight: bolder;
  font-size: 32px;
}
</style>

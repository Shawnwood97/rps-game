<template>
  <section>
    <div class="scoreContainer">
      <div class="userSide">
        <h3 class="user">{{ username }}</h3>
        <h2 class="userScore">{{ userScore }}</h2>
      </div>
      <div class="cpuSide">
        <h3 class="cpu">CPU</h3>
        <h2 class="cpuScore">{{ cpuScore }}</h2>
      </div>

      <div class="tieSide">
        <h3 class="cpu">Ties</h3>
        <h2 class="tieScore">{{ gameTies }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "score-board",

  data() {
    return {
      username: this.$store.state.username,
      // cpuScore: this.getUpdatedScores.cpuWins,
      // userScore: this.$store.state.userWins,
      // gameTies: this.$store.state.gameTies,
    };
  },

  computed: {
    userScore() {
      return this.$store.getters.getUserScore;
    },
    cpuScore() {
      return this.$store.getters.getCpuScore;
    },
    gameTies() {
      return this.$store.getters.getGameTies;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 80%;
}
.scoreContainer {
  width: 100%;
  background: #cecece;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.5);
  color: #210636;
  display: grid;
  place-items: center;
  grid-auto-flow: column;
}
</style>

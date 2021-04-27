<template>
  <section>
    <h2>Welcome {{ username }}</h2>
    <h3>Make A selection</h3>
    <div id="selectionBoard">
      <div
        v-for="option in this.$store.state.options"
        :key="option.id"
        class="choiceContainer"
        @click="userSelection(option)"
      >
        <fa-icon class="choices" :icon="['fas', `${option.faIcon}`]" />
        <h4>{{ option.item }}</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "user-select",

  data() {
    return {
      username: this.$store.state.username,
    };
  },

  methods: {
    userSelection(data) {
      this.$store.commit("updateUserSelection", data);
      this.$store.commit("updateCpuSelection");
      this.$store.commit("updateWinner");
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 60%;
  background: #cecece;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.5);
  color: #210636;
  display: grid;
  place-items: center;

  h2,
  h3 {
    padding-top: 10px;
  }

  #selectionBoard {
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    width: 100%;

    .choiceContainer {
      display: grid;
      justify-items: center;
      background: rgb(150, 150, 150);
      margin: 20px 0;
      padding: 0 15px;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 3px 1px #383838;
      }

      .choices {
        font-size: 100px;
        margin: 30px 10px;
      }

      h4 {
        padding: 5px;
      }
    }
  }
}
</style>

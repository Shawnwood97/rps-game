<template>
  <div id="errorGrid">
    <h1>Login Failed!</h1>
    <fa-icon class="errorIcon" :icon="['fas', 'exclamation-circle']" />
    <h2 class="modalErrorTitle">
      {{ getErrorFromStore }}
    </h2>
    <button @click="backToLogin">Try Again!</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  name: "error-slide",

  methods: {
    backToLogin() {
      cookies.remove("loginStatus");
      this.$store.state.loginSuccess = null;
    },
  },

  computed: {
    getErrorFromStore() {
      return this.$store.state.failedLoginMessage;
    },
  },
};
</script>
<style lang="scss" scoped>
#errorGrid {
  display: grid;
  place-items: center;
  height: 100%;

  .modalErrorTitle {
    color: rgb(148, 6, 6);
    font-weight: bold;
  }
  button {
    padding: 15px 50px;
    place-self: center;
    border: 1px solid #360606;
    border-radius: 5px;
    color: rgb(235, 235, 235);
    font-weight: bold;
    background-position: left;
    background-size: 200%;
    transition: background-position 0.2s ease-in-out;
    background-image: linear-gradient(
      to left,
      #360606,
      #722323,
      #722323,
      #360606
    );

    &:hover {
      cursor: pointer;
      background-position: right;
      box-shadow: 0 1px 5px 1px #575757;
    }
  }
}

.errorIcon {
  color: rgb(148, 6, 6);
  font-size: 200px;
}
</style>

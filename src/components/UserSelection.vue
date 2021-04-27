<template>
  <div v-if="userSelection">
    <h1>{{ username }} Chose:</h1>
    <fa-icon class="choices" :icon="['fas', `${userSelection.faIcon}`]" />
    <h4>{{ userSelection.item }}</h4>
  </div>
</template>

<script>
export default {
  name: "user-selection",

  data() {
    return {
      username: this.$store.state.username,
    };
  },

  computed: {
    userSelection() {
      return this.$store.getters.getUserSelection;
    },
  },
};
</script>

<style lang="scss" scoped></style>

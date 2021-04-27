<template>
  <div v-if="userSelection">
    <h2>{{ username }} Chose</h2>
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

<style lang="scss" scoped>
.choices {
  font-size: 70px;
  margin: 10px 0;
}
</style>

<template>
  <main>
    <user-select />
  </main>
</template>

<script>
import UserSelect from "./UserSelect.vue";
export default {
  components: { UserSelect },
  name: "game-body",
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  min-height: 90vh;
}
</style>

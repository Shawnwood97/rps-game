<template>
  <main>
    <login-panel />
  </main>
</template>

<script>
import LoginPanel from "./LoginPanel.vue";

export default {
  components: { LoginPanel },
  name: "home-body",
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  min-height: 90vh;
}
</style>

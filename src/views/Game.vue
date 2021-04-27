<template>
  <div>
    <page-header />
    <game-body />
    <page-footer />
  </div>
</template>

<script>
import GameBody from "../components/GameBody.vue";
import PageFooter from "../components/PageFooter.vue";
import PageHeader from "../components/PageHeader.vue";

export default {
  name: "game",
  components: {
    PageHeader,
    PageFooter,
    GameBody,
  },
};
</script>
<style lang="scss" scoped>
// footer {
//   place-self: end center;
// }
</style>

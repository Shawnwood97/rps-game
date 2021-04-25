<template>
  <div>
    <page-header />
    <home-body />
    <page-footer />
  </div>
</template>

<script>
import HomeBody from "../components/HomeBody.vue";
import PageFooter from "../components/PageFooter.vue";
import PageHeader from "../components/PageHeader.vue";

export default {
  name: "Home",
  components: {
    PageHeader,
    PageFooter,
    HomeBody,
  },
};
</script>
<style lang="scss" scoped>
// footer {
//   place-self: end center;
// }
</style>

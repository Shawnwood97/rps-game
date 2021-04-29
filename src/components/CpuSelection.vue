<template>
  <div v-if="cpuSelection">
    <h1>Computer Chose</h1>
    <fa-icon class="choices" :icon="['fas', `${cpuSelection.faIcon}`]" />
    <h4>{{ cpuSelection.item }}</h4>
  </div>
</template>

<script>
export default {
  name: "cpu-selection",

  computed: {
    cpuSelection() {
      return this.$store.state.cpuSelection;
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

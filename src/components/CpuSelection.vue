<template>
  <div v-if="cpuSelection">
    <h1>Computer Chose:</h1>
    <fa-icon class="choices" :icon="['fas', `${cpuSelection.faIcon}`]" />
    <h4>{{ cpuSelection.item }}</h4>
  </div>
</template>

<script>
export default {
  name: "cpu-selection",

  computed: {
    cpuSelection() {
      return this.$store.getters.getCpuSelection;
    },
  },
};
</script>

<style lang="scss" scoped></style>

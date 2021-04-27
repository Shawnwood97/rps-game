<template>
  <main>
    <div id="boardGrid">
      <user-selection />
      <cpu-selection />
    </div>

    <user-select />
  </main>
</template>

<script>
import CpuSelection from "./CpuSelection.vue";
import UserSelect from "./UserSelect.vue";
import UserSelection from "./UserSelection.vue";
export default {
  components: { UserSelect, CpuSelection, UserSelection },
  name: "game-body",
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  min-height: 90vh;
}

#boardGrid {
  display: grid;
  grid-auto-flow: column;
  width: 80%;
}
</style>

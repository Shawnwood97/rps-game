<template>
  <div id="errorGrid">
    <fa-icon class="errorIcon" :icon="['fas', 'exclamation-circle']" />
    <h2 class="modalErrorTitle">
      {{ getErrorFromStore }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "modal-popup",

  computed: {
    getErrorFromStore() {
      return this.$store.state.errorTitle;
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
}

.errorIcon {
  color: rgb(148, 6, 6);
  font-size: 200px;
}
</style>

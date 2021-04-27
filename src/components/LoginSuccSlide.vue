<template>
  <div id="succGrid">
    <h2 class="succTitle">Welcome, {{ this.$store.state.username }}</h2>
    <fa-icon class="spinnySpin" :icon="['fas', 'check-circle']" />
    <h3>Your Login Was A Success!</h3>
    <p>Redirecting you to the game page.</p>
    <p><a @click="goNow">Click Here</a> if not redirected.</p>
  </div>
</template>

<script>
// import cookies from "vue-cookies";
export default {
  name: "login-succ-slide",

  // tried this in mounted first but had issues with clearing it, I believe this is still an ok way to do it.... I hope.
  data() {
    return {
      redirect: setTimeout(() => {
        this.$router.push("game");
      }, 4000),
    };
  },

  methods: {
    goNow() {
      // clear the timout if you click to skip waiting the 4s
      clearTimeout(this.redirect);
      this.$router.push("game");
    },
  },
};
</script>
<style lang="scss" scoped>
#succGrid {
  display: grid;
  place-items: center;
  height: 100%;
}

.spinnySpin {
  color: rgb(6, 148, 70);
  font-size: 200px;
}
</style>

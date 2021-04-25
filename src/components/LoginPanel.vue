<template>
  <section>
    <h1>Login To Play!</h1>
    <form action="javascript:void(0)">
      <!-- <label class="floatingLabel" for="emailInput">Email Address</label> -->
      <fa-icon :icon="['fas', 'user']" />
      <input type="text" id="emailInput" placeholder="Email Address..." />
      <!-- <label class="floatingLabel" for="userInput">Username</label> -->
      <input type="text" id="userInput" placeholder="Username..." />

      <!-- <label class="floatingLabel" for="passInput">Password</label> -->
      <input type="password" id="passInput" placeholder="Password..." />

      <input type="submit" value="Login" />
    </form>
  </section>
</template>

<script>
export default {
  name: "login-panel",
};
</script>

<style lang="scss" scoped>
section {
  width: 400px;
  height: 400px;
  background: #cecece;
  padding-top: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.5);
  color: #210636;
}

form {
  display: grid;
  height: 100%;
  padding: 30px 0;
  margin: 5px;

  input[type="submit"] {
    width: 120px;
    height: 40px;
    place-self: center;
    border: none;
    background-image: linear-gradient(
      to left,
      #210636,
      #3e2372,
      #3e2372,
      #210636
    );
    border-radius: 5px;
    color: rgb(235, 235, 235);
    font-weight: bold;

    background-position: left;
    background-size: 200%;

    &:hover {
      cursor: pointer;
      background-position: right;
      transition: background-position 0.2s ease-in-out;
      box-shadow: 0 1px 5px 1px #575757;
    }
  }

  input[type="text"],
  input[type="password"] {
    background: transparent;
    font-size: 24px;
    border: none;
    border-bottom: 3px solid #999999;
    text-indent: 5px;
    width: 100%;
    text-shadow: 0px 0px 0px #000;
    place-self: center;
    padding: 3px 0;

    &:focus {
      outline: none;
      // box-shadow: 0 0 6px 0px #747474;
      border-bottom: 3px solid #210636;
    }
  }

  label {
    font-weight: bold;
    justify-self: start;
    padding: 5px 0;
  }
}
</style>

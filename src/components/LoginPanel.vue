<template>
  <section>
    <h1>Login To Play!</h1>
    <form action="javascript:void(0)">
      <!-- <label class="floatingLabel" for="emailInput">Email Address</label> -->
      <div class="inputContainer">
        <input type="text" placeholder="Email Address..." required />
        <fa-icon class="inputIcon emailIcon" :icon="['fas', 'at']" />
        <span class="focusBorder"></span>
      </div>
      <!-- <label class="floatingLabel" for="userInput">Username</label> -->
      <div class="inputContainer">
        <input type="text" id="userInput" placeholder="Username..." required />
        <fa-icon class="inputIcon" :icon="['fas', 'user']" />
        <span class="focusBorder"></span>
      </div>

      <!-- <label class="floatingLabel" for="passInput">Password</label> -->
      <div class="inputContainer">
        <input
          type="password"
          id="passInput"
          placeholder="Password..."
          required
        />
        <fa-icon class="inputIcon" :icon="['fas', 'key']" />
        <span class="focusBorder"></span>
      </div>

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
  place-items: center;

  .inputContainer {
    position: relative;
    width: 100%;

    .inputIcon {
      position: absolute;
      top: 5px;
      right: 364px;
      font-size: 24px;
      color: #4b4b4b;
    }
  }

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
    text-indent: 30px;
    width: 100%;
    place-self: center;
    padding: 3px 0;
    font-weight: bold;

    ~ .focusBorder {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: #210636;
      transition: 0.4s;
    }

    &:focus {
      outline: none;

      ~ .focusBorder {
        width: 100%;
      }

      + .inputIcon {
        color: #210636;
      }
    }
  }

  label {
    font-weight: bold;
    justify-self: start;
    padding: 5px 0;
  }
}
</style>

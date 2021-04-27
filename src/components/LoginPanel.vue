<template>
  <section>
    <!-- Component/Element transition, transitions the first element out, the the other one in 1 frame later, pretty cool vue thing, I'm sure this is great on the router-view tag -->
    <transition name="fade" mode="out-in">
      <!-- if errorTitle = false (default = undefined) this element will display, considered moving into own component, conflicted -->
      <div id="transitionContainer" v-if="loginStatus === null">
        <h1 class="loginTitle">Login!</h1>
        <form id="loginForm" action="javascript:void(0)">
          <!-- had required on my input boxes, but removed since auth is handled by the API here -->
          <div class="inputContainer">
            <!-- Input boxes, used text-indent to move the placeholder and user input text to the right a bit to make room for icons -->
            <input id="emailInput" type="text" placeholder="Email Address..." />
            <!-- FontAwesome icons from their library, positioned absolute and in the input boxes -->
            <fa-icon class="inputIcon" :icon="['fas', 'at']" />
            <!-- focus Border is styled with box-shadow in a wway that resembles a border-bottom, positioned absolute, left:0 and width: 0; with a transition on the width -->
            <span class="focusBorder"></span>
          </div>

          <div class="inputContainer">
            <!-- Input boxes, used text-indent to move the placeholder and user input text to the right a bit to make room for icons -->
            <input type="text" id="userInput" placeholder="Username..." />
            <!-- FontAwesome icons from their library, positioned absolute and in the input boxes -->
            <fa-icon class="inputIcon" :icon="['fas', 'user']" />
            <!-- focus Border is styled with box-shadow in a wway that resembles a border-bottom, positioned absolute, left:0 and width: 0; with a transition on the width -->
            <span class="focusBorder"></span>
          </div>

          <div class="inputContainer">
            <!-- Input boxes, used text-indent to move the placeholder and user input text to the right a bit to make room for icons -->
            <input type="password" id="passInput" placeholder="Password..." />
            <!-- FontAwesome icons from their library, positioned absolute and in the input boxes -->
            <fa-icon class="inputIcon" :icon="['fas', 'key']" />
            <!-- focus Border is styled with box-shadow in a wway that resembles a border-bottom, positioned absolute, left:0 and width: 0; with a transition on the width -->
            <span class="focusBorder"></span>
          </div>
          <!-- Submit button for Axios POST on click -->
          <input
            @click="attemptLogIn"
            id="loginButton"
            type="submit"
            value="Login"
          />
        </form>
        <!-- Little section to make copy and pasting the API email a bit faster -->
        <p class="emailSpoiler">
          Use Email: eve.holt@reqres.in and any username and password to login
        </p>
      </div>
      <!-- Component that transitions in when loginStatus returns false, -->
      <error-slide v-else-if="!loginStatus" />
      <!-- Component that transitions in when loginStatus returns true -->
      <login-succ-slide v-else-if="loginStatus" />
    </transition>
  </section>
</template>

<script>
// imports
import cookies from "vue-cookies";
import axios from "axios";
import ErrorSlide from "./ErrorSlide.vue";
import LoginSuccSlide from "./LoginSuccSlide.vue";
export default {
  // defining components
  components: { ErrorSlide, LoginSuccSlide },
  name: "login-panel",

  data() {
    return {
      //  Get Cookies
      loginToken: cookies.get("loginToken"),
      emailAddress: cookies.get("emailAddress"),
      userName: cookies.get("userName"),
    };
  },

  computed: {
    // Getter to get the login status from the state
    loginStatus() {
      return this.$store.getters.getLoginStatus;
    },
  },
  methods: {
    // Axios Post request used on click with login button
    attemptLogIn() {
      axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            email: document.getElementById("emailInput").value,
            password: document.getElementById("passInput").value,
          },
        })
        .then((res) => {
          console.log(res);
          // this.$store.commit("updateSuccMsg", this.logInResponse);
          cookies.set("loginStatus", true);
          this.$store.commit("updateStatus", true);

          // Set Cookies, unsure if I'll use email address for anything, but I'll store it anyways, is this BAAAAD?
          // (this.loginToken = res.data.token),

          cookies.set("loginToken", res.data.token);
          cookies.set(
            "emailAddress",
            document.getElementById("emailInput").value
          );
          cookies.set("userName", document.getElementById("userInput").value);
          // had to set here and in cookie, otherwise it would not show username until refresh
          this.$store.state.username = document.getElementById(
            "userInput"
          ).value;
          // reset form on success, unsure if this is proper, but it seems to work.
          // removed reset because it is noticable prior to the animation and looks kinda odd.
          // document.getElementById("loginForm").reset();
        })
        .catch((err) => {
          // console.log(err.response.data.error);
          // console.log(this.modalInfo);
          cookies.set("loginStatus", "");
          this.$store.commit("updateStatus", false);
          this.$store.commit("updateError", err.response.data.error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 400px;
  height: 400px;
  background: #cecece;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.5);
  color: #210636;
  display: grid;
  grid-auto-flow: column;

  .loginTitle {
    place-self: center;
  }
}

.fade-enter-active {
  transition: all 0.35s ease-in-out;
}
.fade-leave-active {
  transition: all 0.35s ease-in-out;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}

#transitionContainer {
  display: grid;
  width: 100%;
  height: 100%;

  form {
    display: grid;
    margin: 5px;
    place-items: center;
    height: 100%;
    gap: 20px;
    .inputContainer {
      position: relative;
      width: 100%;

      .inputIcon {
        position: absolute;
        top: 5px;
        right: 360px;
        font-size: 24px;
        color: #4b4b4b;
      }
    }

    input[type="submit"] {
      padding: 15px 50px;
      place-self: center;
      border: 1px solid #210636;
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
      transition: background-position 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        background-position: right;
        box-shadow: 0 1px 5px 1px #575757;
      }
    }

    input[type="text"],
    input[type="password"] {
      background: transparent;
      font-size: 24px;
      border: none;
      border-bottom: 3px solid #999999;
      text-indent: 40px;
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
        transition: width 0.38s ease-in-out;
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
}

.emailSpoiler {
  color: #210636;
  font-weight: bold;
  place-self: center;
}
</style>

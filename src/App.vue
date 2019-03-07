<template>
  <div id="app">
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <button @click="checkLogin">Check login</button>
    <br>
    <p v-if="this.$store.state.userName">Hello, {{this.$store.state.userName}}</p>
    <Register></Register>
    <Login></Login>
  </div>
</template>

<script>
import Register from "./components/Register";
import Login from "./components/Login";

export default {
  name: "app",
  components: {
    Register,
    Login
  },
  mounted() {
    if (localStorage.getItem("token") !== 0) {
      this.$store.commit("setUserName", localStorage.getItem("userName"));
    }
  },
  methods: {
    checkLogin() {
      this.$store.dispatch("checkLogin");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, sans-serif;
  max-width: 256px;
  display: flex;
  flex-direction: column;
  font-size: 18px;

  .logo {
    margin: 0 auto;
  }

  p {
    margin: 0;
  }

  input {
    width: 100%;
    padding: 8px;
  }
}
</style>

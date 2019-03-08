<template>
  <div id="app">
    <div v-if="this.$store.state.isLoggedIn">
      <p>Hello, {{this.$store.state.userName}}</p>
      <Logout></Logout>
    </div>
    <Register></Register>
    <Login></Login>
  </div>
</template>

<script>
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

export default {
  name: "app",
  components: {
    Register,
    Login,
    Logout
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.$store.commit("login", {
        user: localStorage.getItem("userName"),
        token: localStorage.getItem("token")
      });
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

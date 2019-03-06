<template>
  <div id="app">
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <button @click="checkLogin">Check login</button>
    <p>{{this.$store.state.user}}</p>
    <div>
      <h2>Register</h2>
      <div>
        <p>Name:</p>
        <input type="name" name="name" v-model="register.name" @keyup.enter="dispatchRegister">
        <p>Email:</p>
        <input type="email" name="email" v-model="register.email" @keyup.enter="dispatchRegister">
        <p>Password:</p>
        <input
          type="password"
          name="password"
          v-model="register.password"
          @keyup.enter="dispatchRegister"
        >
        <button @click="dispatchRegister">Register</button>
      </div>
    </div>
    <div>
      <h2>Login</h2>
      <div>
        <p>Email:</p>
        <input type="email" name="email" v-model="login.email" @keyup.enter="dispatchLogin">
        <p>Password:</p>
        <input
          type="password"
          name="password"
          v-model="login.password"
          @keyup.enter="dispatchLogin"
        >
        <button @click="dispatchLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: ""
      },
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    dispatchRegister() {
      this.$store.dispatch("register", {
        displayName: this.register.name,
        email: this.register.email,
        password: this.register.password
      });
      this.register = {
        name: "",
        email: "",
        password: ""
      };
    },
    dispatchLogin() {
      this.$store.dispatch("login", {
        email: this.login.email,
        password: this.login.password
      });
      this.login = {
        email: "",
        password: ""
      };
    },
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

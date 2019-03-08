import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://authorization-example.herokuapp.com";

export default new Vuex.Store({
  state: {
    userName: "",
    isLoggedIn: false
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
    },
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    login(state, data) {
      state.userName = data.user;
      state.isLoggedIn = true;
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.user);
    },
    logout(state) {
      state.userName = "";
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
    }
  },
  actions: {
    register(context, data) {
      fetch(`${PROXY_URL}${BASE_URL}/register`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(r => r.json())
        .then(data => context.commit("login", data));
    },
    login(context, data) {
      fetch(`${PROXY_URL}${BASE_URL}/login`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(r => r.json())
        .then(data => {
          context.commit("login", data);
        });
    },
    checkLogin() {
      fetch(`${PROXY_URL}${BASE_URL}/checklogin`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token")
          }
        })
        .then(r => r.json())
        .then(r => {
          alert(r);
        });
    }
  }
});
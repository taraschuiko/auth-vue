import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://authorization-example.herokuapp.com";

export default new Vuex.Store({
  state: {
    userName: "",
    isLoggedIn: ""
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
    },
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    }
  },
  actions: {
    register(context, data) {
      fetch(`${PROXY_URL}${BASE_URL}/user`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
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
          context.commit("setUserName", data.user);
          context.commit("setToken", data.token);
          localStorage.setItem("token", data.token);
          console.log(data);

        })
    },
    checkLogin(context) {
      fetch(`${PROXY_URL}${BASE_URL}/custom`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: localStorage.getItem("token")
          }
        })
        .then(r => r.json())
        .then(r => {
          // context.commit("setIsLoggedIn", r);
          console.log(r);
        })
    },
  }
})
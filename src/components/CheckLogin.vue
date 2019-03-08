<template>
  <button @click="checkLogin">Check login</button>
</template>

<script>
export default {
  name: "CheckLogin",
  methods: {
    checkLogin() {
      this.$store.dispatch("checkLogin");
    }
  }
};
</script>

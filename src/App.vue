<template>
  <v-app id="app">
    <router-view />
    <BottomNav/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import BottomNav from "@/components/BottomNav.vue";
export default Vue.extend({
  components:{
    BottomNav
  }
});
</script>


<style lang="scss">
@import "@/assets/scss/main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: black;
    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>

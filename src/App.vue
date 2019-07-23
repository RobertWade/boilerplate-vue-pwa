<template>
  <v-app
    :dark="$store.state.darkMode"
    :class="$store.state.darkMode===true ? 'darkmode' : 'lightmode'"
    id="app"
  >
    <Snackbar />
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
    <BottomNav />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import BottomNav from "@/components/BottomNav.vue";
import Snackbar from "@/components/Snackbar.vue";
export default Vue.extend({
  components: {
    BottomNav,
    Snackbar,
  },
});
</script>


<style lang="scss">
@import "@/assets/scss/main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 15px;
}

.darkmode {
  transition: all 0.4s linear;
  .icon {
    color: white;
  }
}

.lightmode {
  p {
    color: black;
  }
  transition: all 0.4s linear;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: $primary;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: .2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

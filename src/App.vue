<template>
  <v-app
    :dark="$store.state.darkMode"
    :class="$store.state.darkMode===true ? 'darkmode' : 'lightmode'"
    id="app"
  >
    <SpeedDial />
    <Snackbar />
    <h1 class="path">{{$route.name}}</h1>
    <transition name="fade" mode="out-in">
      <router-view class="page"></router-view>
    </transition>
    <BottomNav />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import BottomNav from "@/components/BottomNav.vue";
import Snackbar from "@/components/Snackbar.vue";
import SpeedDial from "@/components/SpeedDial.vue";
export default Vue.extend({
  components: {
    BottomNav,
    Snackbar,
    SpeedDial,
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

.page {
  padding-top: 40px;
  margin-bottom: 60px;
}
.path {
  margin-top: 5px;
  text-transform: capitalize;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

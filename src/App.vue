<template>
  <v-app
    :dark="$store.state.darkMode"
    :class="$store.state.darkMode===true ? 'darkmode' : 'lightmode'"
    id="app"
  >
    <Snackbar />
    <div class="head">
      <SpeedDial />
      <h2 v-if="$route.name !== 'messages'" class="path">{{$route.name}}</h2>
      <h2 @click="$router.go(-1)" v-else class="path">
        <v-icon>chevron_left</v-icon>
        {{$route.name}}
      </h2>
    </div>
    <div class="space-top"></div>

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
html {
  background: white;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 15px;
}

.darkmode {
  transition: all 0.4s linear;
  .head {
    transition: all 0.4s linear;
    background: #303030;
  }
  .icon {
    color: white;
  }
}

.lightmode {
  background: white;
  .head {
    transition: all 0.4s linear;
    background: white;
  }
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
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  padding: 5px 15px;
  z-index: 10;
}

.lightmode {
  background: white !important;
}
.darkmode {
  background: #303030 !important;
}
.space-top {
  height: 50px;
}

.page {
  margin-bottom: 60px;
}
.path {
  cursor: pointer;
  margin-top: 5px;
  display: flex;
  justify-content: center;
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

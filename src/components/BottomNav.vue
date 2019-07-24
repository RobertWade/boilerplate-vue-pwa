<template>
  <div>
    <v-bottom-nav
      :dark="$store.state.darkMode"
      :class="$store.state.darkMode===true ? 'darkmode' : 'lightmode'"
      :active.sync="bottomNav"
      :value="true"
      fixed
      color="transparent"
    >
      <v-btn color="primary" flat value="recent" @click="$router.push({name:'about'})">
        <span>About</span>
        <img v-if="$store.state.darkMode == false" src="@/assets/icons/help.png" alt />
        <img v-else src="@/assets/icons/help-white.png" alt />
      </v-btn>

      <v-btn color="primary" flat value="favorites" @click="$router.push({name:'home'})">
        <span>Home</span>
        <img v-if="$store.state.darkMode == false" src="@/assets/icons/home.png" alt />
        <img v-else src="@/assets/icons/home-white.png" alt />
      </v-btn>

      <v-btn color="primary" flat value="settings" @click="$router.push({name:'settings'})">
        <span>Settings</span>
        <img v-if="$store.state.darkMode == false" src="@/assets/icons/settings.png" alt />
        <img v-else src="@/assets/icons/settings-white.png" alt />
      </v-btn>
      <v-btn color="primary" flat value="components" @click="$router.push({name:'components'})">
        <span>Components</span>
        <img v-if="$store.state.darkMode == false" src="@/assets/icons/component.png" alt />
        <img v-else src="@/assets/icons/component-white.png" alt />
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BaseComponent extends Vue {
  public bottomNav: string = "recent";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
img {
  height: 25px;
}
.lightmode {
  background: white !important;
}
.darkmode {
  background: #303030 !important;
}
</style>

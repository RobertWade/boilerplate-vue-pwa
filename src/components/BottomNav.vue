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
        <v-icon>help_outline</v-icon>
      </v-btn>

      <v-btn color="primary" flat value="favorites" @click="$router.push({name:'home'})">
        <span>Home</span>
        <v-icon class="icon">home</v-icon>
      </v-btn>

      <v-btn color="primary" flat value="settings" @click="$router.push({name:'settings'})">
        <span>Settings</span>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn color="primary" flat value="components" @click="$router.push({name:'components'})">
        <span>Components</span>
        <v-icon>dashboard</v-icon>
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
.lightmode {
  background: white !important;
}
.darkmode {
  background: #303030 !important;
}
</style>

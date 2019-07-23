<template>
  <div>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="transparent">
      <v-btn color="primary" flat value="recent" @click="$router.push({name:'about'})">
        <span>About</span>
        <v-icon>help_outline</v-icon>
      </v-btn>

      <v-btn color="primary" flat value="favorites" @click="$router.push({name:'home'})">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="primary" flat value="nearby">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BaseComponent extends Vue {
  bottomNav: string = "recent";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

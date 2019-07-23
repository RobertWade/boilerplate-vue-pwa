<template>
  <div>
    <v-snackbar
      v-model="showSnackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ snackText }}
      <v-btn flat @click="$store.commit('toggleSnackbar', false)">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Snackbar extends Vue {
  get snackText() {
    return this.$store.state.snackText;
  }
  get showSnackbar() {
    return this.$store.state.showSnackbar;
  }
  set showSnackbar(state: boolean) {
    this.$store.commit("toggleSnackbar", false);
  }

  public snackbar: boolean = false;
  public y: string = "top";
  public x: any = null;
  public mode: string = "light";
  public timeout: number = 6000;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

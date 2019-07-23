<template>
  <div class="base">
    <v-date-picker color="primary" :dark="false" v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseComponent extends Vue {
  public picker: string = new Date().toISOString().substr(0, 10);
  public landscape: boolean = false;
  public reactive: boolean = true;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

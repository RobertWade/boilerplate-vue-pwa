<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800">
    <v-btn>TEST</v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  data: () => ({
    model: null,
  }),
})
export default class SlideGroup extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

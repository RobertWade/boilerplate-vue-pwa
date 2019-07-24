<template>
  <v-card class="column">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span v-on="on">This text has a tooltip</span>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-icon color="primary" dark v-on="on">home</v-icon>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Button</v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
  </v-card>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Tooltips extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.column {
  display: flex;
  margin-top: 20px;
  flex-direction: column;
}
</style>

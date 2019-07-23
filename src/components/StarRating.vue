<template>
  <div class="text-xs-center">
    <v-rating hover background-color="primary" v-model="rating"></v-rating>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StarRating extends Vue {
  get rating() {
    return this.$store.state.rating;
  }
  set rating(rating: number) {
    this.$store.state.rating = this.rating;
  }
}
</script>
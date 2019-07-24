<template>
  <div class="components">
    <h2>Ausgewählt:{{current}}</h2>
    <v-btn @click="current='calendar'" color="primary">Date picker</v-btn>
    <v-btn @click="current='timeline'" color="primary">Timeline</v-btn>
    <v-btn @click="current='rating'" color="primary">Rating</v-btn>
    <Calendar v-if="current==='calendar'" />
    <StarRating v-if="current==='rating'"/>
    <Timeline v-if="current==='timeline'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent.vue";
import Calendar from "@/components/Calendar.vue";
import Timeline from "@/components/Timeline.vue";
import StarRating from "@/components/StarRating.vue";
@Component({
  components: {
    BaseComponent,
    Calendar,
    Timeline,
    StarRating,
  },
})
export default class Components extends Vue {
  public current: string = " ";
}
</script>

<style lang="scss" scoped>
.components{
  padding: 15px;
}
h2 {
  margin-top: 15px;
}
button{
  margin: 20px 5px;
}
</style>



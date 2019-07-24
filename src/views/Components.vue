<template>
  <div class="components">
    <h2>Ausgewählt:{{current}}</h2>
    <v-btn @click="current='calendar'" color="primary">Date picker</v-btn>
    <v-btn @click="current='timeline'" color="primary">Timeline</v-btn>
    <v-btn @click="current='rating'" color="primary">Rating</v-btn>
    <v-btn @click="current='swiper'" color="primary">Swipe List</v-btn>
    <v-btn @click="current='tabs'" color="primary">Tabs</v-btn>
    <v-btn @click="current='tooltips'" color="primary">Tooltips</v-btn>
    <Calendar v-if="current==='calendar'" />
    <StarRating v-if="current==='rating'" />
    <Timeline v-if="current==='timeline'" />
    <SwipeList v-if="current==='swiper'" />
    <Tabs v-if="current==='tabs'" />
    <Tooltips v-if="current==='tooltips'" />
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent.vue";
import Calendar from "@/components/Calendar.vue";
import Timeline from "@/components/Timeline.vue";
import StarRating from "@/components/StarRating.vue";
import SwipeList from "@/components/SwipeList.vue";
import Tabs from "@/components/Tabs.vue";
import Tooltips from "@/components/Tooltips.vue";
@Component({
  components: {
    BaseComponent,
    Calendar,
    Timeline,
    StarRating,
    SwipeList,
    Tabs,
    Tooltips,
  },
})
export default class Components extends Vue {
  public current: string = " ";
}
</script>

<style lang="scss" scoped>
.components {
  padding: 15px;
}
h2 {
  margin-top: 15px;
}
button {
  margin: 20px 5px;
}
</style>



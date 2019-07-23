<template>
  <div class="components">
    <v-btn @click="current='calendar'" color="primary">Date picker</v-btn>
    <v-btn @click="current='timeline'" color="primary">Timeline</v-btn>
    <Calendar v-if="current==='calendar'" />

    <Timeline v-if="current==='timeline'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent.vue";
import Calendar from "@/components/Calendar.vue";
import Timeline from "@/components/Timeline.vue";
@Component({
  components: {
    BaseComponent,
    Calendar,
    Timeline,
  },
})
export default class Components extends Vue {
  public current: string = " ";
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 15px;
}
</style>



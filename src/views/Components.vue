<template>
  <div class="components">
    <h1>Components</h1>
    <h2>Date picker</h2>
    <Calendar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent.vue";
import Calendar from "@/components/Calendar.vue";
@Component({
  components: {
    BaseComponent,
    Calendar,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
h2{
  margin-top: 15px;
}
</style>



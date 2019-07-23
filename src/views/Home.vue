<template>
  <div class="home">
    <p>This is some text</p>
    <BaseComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent.vue";
@Component({
  components: {
    BaseComponent,
  },
})
export default class Home extends Vue {}
</script>

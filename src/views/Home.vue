<template>
  <div class="home">
    <BaseComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseComponent from '@/components/BaseComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    BaseComponent,
  },
})
export default class Home extends Vue {}
</script>

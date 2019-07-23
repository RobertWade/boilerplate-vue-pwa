<template>
  <div class="home">
    <h1>Home</h1>
    <BaseComponent/>
    <Snackbar text="Test"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseComponent from '@/components/BaseComponent.vue';
import Snackbar from '@/components/Snackbar.vue';
@Component({
  components: {
    BaseComponent,
    Snackbar
  },
})
export default class Home extends Vue {}
</script>

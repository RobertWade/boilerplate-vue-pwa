<template>
  <div class="home">
    <VideoCard source="https://source.unsplash.com/400x200/?soccer"/>
    <VideoCard source="https://source.unsplash.com/400x200/?soccer,stadium"/>
    <VideoCard source="https://source.unsplash.com/400x200/?soccer,kid"/>
    <VideoCard source="https://source.unsplash.com/400x200/?soccer,team"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VideoCard from "@/components/VideoCard.vue";

@Component({
  components: {
    VideoCard,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="videocard">
    <div class="picwrapper">
      <img :src="source" alt />
    </div>

    <h3>Lorem ipsum dolor sit</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quibusdam harum id voluptate deleniti itaque quos, cum, labore, rerum dolorum veritatis alias. Placeat sint debitis cum nobis fugiat. Suscipit, sed.</p>
    <div class="row">
      <v-btn class="readmore" flat color="primary">Read more</v-btn>
      <div class="flexrow" @click="like()">
        <p>{{likes}}</p>
        <img
          v-if="!liked && $store.state.darkMode == false"
          class="icon"
          src="@/assets/icons/like-empty.png"
          alt
        />
        <img
          v-if="!liked && $store.state.darkMode == true"
          class="icon"
          src="@/assets/icons/like-empty-white.png"
          alt
        />
        <img v-if="liked" class="icon" src="@/assets/icons/liked.png" alt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseComponent extends Vue {
  public liked: boolean = false;
  public likes: number = 0;
  @Prop() private source!: string;
  public like(): void {
    if (!this.liked) {
         this.likes++;
    } else {
        this.likes--;
    }
    this.liked = !this.liked;
  }
  public mounted() {
    this.likes = Math.floor(Math.random() * Math.floor(10000));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.videocard {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  h3 {
    margin-top: 5px;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    margin-bottom: 0;
  }
}

.picwrapper {
  overflow: hidden;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.readmore {
  margin: 0;
  padding: 0;
}

.row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    height: 20px;
    width: 20px;
  }
}

.flexrow {
  display: flex;
}
</style>

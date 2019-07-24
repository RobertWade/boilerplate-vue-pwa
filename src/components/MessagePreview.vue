<template>
  <div class="messagePreview">
    <div class="profile-pic">
      <img :src="source" alt />
    </div>
    <div class="text">
      <h4>{{name}}</h4>
      <p>{{previewText}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MessagePreview extends Vue {
  @Prop() public source!: string;
  @Prop() public name!: string;
  @Prop() public text!: string;
  get previewText() {
    if (!this.text) {
        return "";
    }
    return this.text.length >= 50 ? this.text.substring(0, 50) + "..." : this.text;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.messagePreview {
  margin-top: 10px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  &:active{
      background:rgb(223, 223, 223);
  }
  &:hover{
      background:rgb(223, 223, 223);
  }
}

.profile-pic {
  height: 60px;
  width: 60px;
  max-width: 30%;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.text {
  text-align: left;
  margin-left: 20px;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    color: grey;
  }
}
</style>

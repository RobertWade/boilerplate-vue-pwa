<template>
  <div class="base">
    <v-speed-dial
      fixed
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" class="profile" fab>
          <!-- <v-icon color="white">account_circle</v-icon>
          <v-icon color="white">close</v-icon> -->
          <img src="@/assets/profile.jpg" alt="">
        </v-btn>
      </template>
      <v-btn fab dark small color="white">
        <v-icon color="primary">edit</v-icon>
      </v-btn>
      <v-btn fab dark small color="white">
        <v-icon color="primary">add</v-icon>
      </v-btn>
      <v-btn fab dark small color="white">
        <v-icon color="primary">delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseComponent extends Vue {
  public direction: string = "bottom";
  public fab: boolean = false;
  public fling: boolean = false;
  public hover: boolean = false;
  public tabs: any = null;
  public top: boolean = false;
  public right: boolean = true;
  public bottom: boolean = false;
  public left: boolean = false;
  public transition: string = "slide-y-reverse-transition";

  get activeFab() {
    switch (this.tabs) {
      case "one":
        return { class: "purple", icon: "account_circle" };
      case "two":
        return { class: "red", icon: "edit" };
      case "three":
        return { class: "green", icon: "keyboard_arrow_up" };
      default:
        return {};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}

.profile{
  border:2px solid white;
  background:blue;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  img{
    width:100%;
  }
}
</style>

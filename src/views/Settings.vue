<template>
  <div class="settings">
    <v-btn flat @click="$store.commit('toggleDarkmode')">
      <span v-if="$store.state.darkMode">
        <v-icon color="white">brightness_5</v-icon>Lightmode
      </span>
      <span v-else>
        <v-icon color="black">brightness_3</v-icon>Darkmode
      </span>
    </v-btn>
    <v-btn flat @click="$store.commit('toggleSnackbar', true)">Open Snackbar</v-btn>
  </div>
</template>


<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
</style>

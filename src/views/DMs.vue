<template>
  <div class="dms">
    <v-text-field v-model="filtername" label="Search" placeholder="Profilname" box></v-text-field>
    <MessagePreview
      v-for="(message,i) in messages"
      v-if="message.name.includes(filtername)"
      :key="i"
      :source="message.source"
      :name="message.name"
      :text="message.text"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MessagePreview from "@/components/MessagePreview.vue";

@Component({
  components: {
    MessagePreview,
  },
})
export default class Home extends Vue {
  public filtername: string = "";
  public messages: object[] = [
    {
      name: "Maria Musterfrau",
      source: "https://source.unsplash.com/200x300/?face,woman",
      text: "Hey wie geht es dir?",
    },
    {
      name: "Max Mustermann",
      source: "https://source.unsplash.com/200x300/?face,men",
      text: "Ja das sehe ich auch so. Hast du vielleicht zufällig",
    },
    {
      name: "Sarah Musterfrau",
      source: "https://source.unsplash.com/200x300/?face,woman,happy",
      text: "Hast du das Spiel gestern gesehen? Der absolute wahnsinn wie",
    },
    {
      name: "Tino Mustermann",
      source: "https://source.unsplash.com/200x300/?face,men,happy",
      text: "Klar gern!",
    },
    {
      name: "Lisa Musterfrau",
      source: "https://source.unsplash.com/200x300/?woman",
      text: "Worum geht es da?",
    },
    {
      name: "Peter Mustermann",
      source: "https://source.unsplash.com/200x300/?men",
      text: "Einfach nur cool. Das solltest wirklich öfter mal machen",
    },
    {
      name: "Klaus Mustermann",
      source: "https://source.unsplash.com/200x300/?football,men",
      text: "Hey, ich hab dein Video gesehen. Nicht schlecht!",
    },
    {
      name: "Torben Mustermann",
      source: "https://source.unsplash.com/200x300/?football,men,happy",
      text: "Hi",
    },
    {
      name: "Rolf Mustermann",
      source: "https://source.unsplash.com/200x300/?men,soccer",
      text: "Klar lass uns einfach die Tage mal treffen.",
    },
  ];

  get filteredList() {
    return this.messages.filter((message) => {
      return message.name.toLowerCase().includes(this.filtername.toLowerCase());
    });
  }
}
</script>

<style lang="scss" scoped>
input {
  background: rgb(240, 239, 239);
  border-radius: 10px;
  width: 90vw;
  padding: 15px;
}
</style>


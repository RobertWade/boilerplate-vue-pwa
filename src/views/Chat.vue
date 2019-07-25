<template>
  <div class="chat">
    <div id="chatwindow" class="chatwindow" v-chat-scroll>
      <div
        v-for="(message,i) in chatHistory"
        :key="i"
        :class="['message', message.id!=='myID'? 'answer':'']"
      >{{message.text}}</div>
    </div>
    <div
      :class="$store.state.darkMode===true ? 'darkmode' : 'lightmode'"
      class="messageinput-wrapper"
    >
      <v-text-field
        v-model="messageInput"
        label="Outline"
        outlined
        rounded
        append-icon="send"
        @click:enter="answer"
        @click:append="answer"
      ></v-text-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Chat extends Vue {
  public chatHistory: any = [
    { text: "Hey, how's it going. Want to meet up today?", id: "23456789" },
    { text: "Sure where would you like to go?", id: "myID" },
    { text: "Let's just go to the city and relax", id: "23456789" },
  ];
  public messageInput: string = "";
  public message: any = {
    name: "Maria Musterfrau",
    source: "https://source.unsplash.com/200x300/?face,woman",
    text: "Hey wie geht es dir?",
  };
  public answer(): void {
    this.chatHistory.push({
      text: this.messageInput,
      id: "myID",
    });
    this.messageInput = "";
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.chat {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 80px;
}

.messageinput-wrapper {
  width: 100vw;
  height: 70px;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 5px 15px;
  background: white;
}

.chatwindow {
  display: flex;
  max-height: 90vh;
  overflow: scroll;
  flex-direction: column;
  padding: 15px;
  padding-bottom: 80px;
  justify-self: flex-end;
}

.message {
  border-radius: 20px;
  padding: 10px 15px;
  align-self: flex-end;
  background: $primary;
  color: white;
  margin-bottom: 5px;
  max-width: 70%;
}

.answer {
  align-self: flex-start;
  background: rgb(202, 202, 202);
  color: black;
}
</style>


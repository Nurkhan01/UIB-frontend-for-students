<template>
  <div>user id : {{ user_id }}</div>
  <div class="chat-window">
    <div v-if="messages.length > 0">
      <div v-for="message in messages" :key="message.id" class="message">
        <p>{{ message.body }} <span>{{ message.time }}</span></p>
      </div>
    </div>
    <div class="chat-input">
      <input type="text" v-model="body" @keyup.enter="sendMessage" placeholder="Type your message...">
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import httpClient from "@/services/http.service"

export default {
  name: "MessageSocket",
  data() {
    return {
      body: '',
      messages: [],
      sendToUserId: localStorage.getItem('user_id') == 2 ? 1 : 2,
      user_id: localStorage.getItem('user_id'),
      socket: null
    };
  },
  created() {
    this.pusherLogic()
    this.getMessages()
  },
  methods: {
    async sendMessage() {
      if (this.body.trim() !== '') {
        console.log('Message sent:', this.body);
        try {
          const {status, data} = await httpClient.post('/messages', {
            'body': this.body,
            'sendToUserId': this.sendToUserId
          })
          if (status === 200) {
            this.messages.unshift(data)
          }
        } catch (e) {
          console.log(e)
        }
        this.body = '';
      }
    },
    async getMessages() {
      try {
        const {status, data} = await httpClient.get('/messages');
        if (status === 200) {
          this.messages = data;
        }
      } catch (e) {
        console.log(e.response)
      }
    },
    pusherLogic() {
      console.log('store-message.' + localStorage.getItem('user_id'))
      window.Echo.channel('message.'+ localStorage.getItem('user_id'))
          .listen('StoreChatEvent', (event) => {
            console.log(event)
            this.messages.unshift(event.message);
          })
          .error((error) => {
            console.error('WebSocket error:', error);
          });
    }
  }
}
</script>

<style scoped>
/* Стилизуйте ваше окно чата здесь */
.chat-window {
  border: 1px solid #ccc;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
}

/* Стилизуйте ваше поле ввода и кнопку здесь */
input[type="text"] {
  width: 70%; /* Установите желаемую ширину поля ввода */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff; /* Цвет кнопки */
  color: #fff; /* Цвет текста кнопки */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3; /* Цвет кнопки при наведении */
}
</style>

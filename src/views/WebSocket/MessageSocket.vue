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
// import Pusher from 'pusher-js';

export default {
  name: "MessageSocket",
  data() {
    return {
      body: '',
      messages: [],
      sendToUserId: localStorage.getItem('user_id') == 2 ? 1 : 2,
      user_id: localStorage.getItem('user_id')
    };
  },
  created() {


    // const ws = new WebSocket(wsUrl);
    // Создаем новый экземпляр WebSocket
    this.socket = new WebSocket('ws://127.0.0.1:6001/app/bd2df3aea7bc4b5affcb?protocol=7&client=js&version=8.4.0-rc2&flash=false');

    // Обработчик события открытия соединения
    this.socket.onopen = () => {
      console.log('WebSocket соединение установлено');
    };

    // Обработчик события получения сообщения от сервера
    this.socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      console.log('Received data:', receivedData.data);
      // Действия с полученными данными
    };

    // Обработчик события закрытия соединения
    this.socket.onclose = () => {
      console.log('WebSocket соединение закрыто');
    };

    // Обработчик события ошибки соединения
    this.socket.onerror = (error) => {
      console.error('WebSocket ошибка:', error);
    };

    this.getMessages()
    this.pusherLogic()
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

      // window.Echo.channel('store_message_1')
      //     .listen('.store_message', res => {
      //       console.log(res)
      //       this.messages.unshift(res.message);
      //     })

      // Pusher.logToConsole = true;
      //
      // const pusher = new Pusher('bd2df3aea7bc4b5affcb', {
      //   cluster: 'ap2',
      //   wsHost: '127.0.0.1',
      //   wsPort: 6001,
      //   forceTLS: false,
      // });
      // const channel = pusher.subscribe('store_message_2' );
      // channel.bind('store_message', (data) => {
      //   console.log('hi')
      //   this.messages.unshift(data.message);
      // });
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

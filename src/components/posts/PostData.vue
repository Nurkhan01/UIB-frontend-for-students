<template>
  <div class="container">
    <div class="text-center">
      <p>ID пользователя: {{post.userId}}</p>
      <p>ID поста: {{post.id}}</p>
      <p>Заголовок поста: {{post.title}}</p>
      <p>Контент поста: {{post.body}}</p>
      <div v-if="userId > 1">Пользователь с ID > 1</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostData",
  data(){
    return {
      baseUrl: 'https://jsonplaceholder.typicode.com/posts/',
      post : {},
      id: this.$route.params.id,
      userId: this.$route.params.userId
    }
  },
  async created() {
    console.log(this.$route)
    console.log(this.baseUrl + this.id)
    try {
      const {status, data} = await axios.get(this.baseUrl + this.id);
      if (status === 200) {
        this.post = data
      }
    } catch (e) {
      console.log(e.response)
    }
  },
}
</script>

<style scoped>

</style>
<template>
  <div class="container">
    <div class="text-center">
      <p>ID пользователя: {{post.userId}}</p>
      <p>ID поста: {{post.id}}</p>
      <p>Заголовок поста: {{post.title}}</p>
      <p>Контент поста: {{post.body}}</p>
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
      post : {}
    }
  },
  async created() {
    try {
      const {status, data} = await axios.get(this.baseUrl + this.$route.params.id);
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
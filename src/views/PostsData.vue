<template>
  <div>
    <h2>Посты преподавателей университета международного бизнеса</h2>
    <table class="table table-dark table-striped">
      <thead>
      <tr>
        <th scope="col">ID пользователя</th>
        <th scope="col">ID поста</th>
        <th scope="col">Заголовок поста</th>
        <th scope="col">Контент поста</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(post, index) in postsComputed" :key="index">
        <td>{{post.userId}}</td>
        <td>{{post.id}}</td>
        <td>{{ post.title }}</td>
        <td>{{post.body}} <RouterLink :to="'post/' + post.id + '/user/' + post.userId">...</RouterLink></td>
      </tr>
      </tbody>
    </table>
<!--    <ul>-->
<!--      <li v-for="(post, index) in postsComputed" :key="index">id: {{ post.id }}, title: {{ post.title }}-->
<!--        <RouterLink :to="'post/' + post.id ">перейти</RouterLink>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostsData",
  data() {
    return {
      text: 'some text',
      baseUrl: 'https://jsonplaceholder.typicode.com/posts/',
      posts: [],
      countBeforeUpdate: 0,
      countUpdated: 0
    }
  },
  methods: {},
  beforeCreate() {
    console.log(this.text, 'beforeCreate')
  },
  async created() {
    try {
      const {status, data} = await axios.get(this.baseUrl);
      if (status === 200) {
        this.posts = data
      }
    } catch (e) {
      console.log(e.response)
    }
  },
  beforeMount() {
    console.log(this.text, 'beforeMount')
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.posts.push({id: 4, title: 'Post4'})
  //   }, 10000)
  // },
  // beforeUpdate() {
  //   console.log(this.countBeforeUpdate += 1, 'beforeUpdate')
  //   this.posts.splice(0, 1)
  // },
  // updated() {
  //   console.log(this.countUpdated +=1, 'updated')
  // },
  beforeUnmount() {
    this.posts = []
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },

  computed: {
    postsComputed() {
      let newPosts = []
      for (let key in this.posts) {
        newPosts[key] = {id: this.posts[key].id, title: this.posts[key].title,
          url: this.baseUrl + this.posts[key].id,
          body: this.posts[key].body.slice(0,20),
          userId: this.posts[key].userId
        }
      }
      return newPosts
    }
  }
}
</script>

<style scoped>

</style>
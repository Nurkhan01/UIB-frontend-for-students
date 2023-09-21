<template>
  <div>
    <ul>
      <li v-for="(post, index) in postsComputed" :key="index">id: {{ post.id }}, title: {{ post.title }}
        <a :href="post.url">{{post.url}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostsData",
  data() {
    return {
      text: 'some text',
      baseUrl: 'https://my-json-server.typicode.com/typicode/demo/posts/',
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
  mounted() {
    setTimeout(() => {
      this.posts.push({id: 4, title: 'Post4'})
    }, 10000)
  },
  beforeUpdate() {
    console.log(this.countBeforeUpdate += 1, 'beforeUpdate')
    this.posts.splice(0, 1)
  },
  updated() {
    console.log(this.countUpdated +=1, 'updated')
  },
  beforeUnmount() {
    this.posts = []
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },

  computed: {
    postsComputed(){
      let newPosts = []
      for (let key in this.posts){
        newPosts[key] = {id: this.posts[key].id, title: this.posts[key].title, url: this.baseUrl + this.posts[key].id}
      }
      return newPosts
    }
  }
}
</script>

<style scoped>

</style>
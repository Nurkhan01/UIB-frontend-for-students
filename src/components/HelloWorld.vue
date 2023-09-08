<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
      seen: 'world',
      todos: [
        { text: 'Изучить JavaScript' , date: '31.08.2023'},
        { text: 'Изучить Vue', date: '01.09.2023' },
        { text: 'Создать что-нибудь классное', date: '02.09.2023' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

div {
  margin-top: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

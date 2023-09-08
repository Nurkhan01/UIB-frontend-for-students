<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome Nurkhan! How are you?" text="Let's make new code"/>
  <UsersData />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UsersData from "@/views/UsersData.vue";
export default {
  name: 'App',
  components: {
    HelloWorld,
    UsersData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

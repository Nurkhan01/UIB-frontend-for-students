<template>
  <div class="text-center">
    <h5>{{lastName}} {{firstName}}</h5>
    <p>Возраст: {{age}}</p>
    <p>Опыт: {{exp}}</p>
    <p>Позиция: {{position}}</p>
    <p>Степень: {{degree}}</p>
    <p>Окончил: {{endUniversity}}</p>
  </div>
</template>

<script>
export default {
  name: "UserData",
  data() {
    return {
      lastName: this.$route.query.lastName,
      firstName: this.$route.query.firstName,
      exp: this.$route.query.exp,
      age: this.$route.query.age,
      position: this.$route.query.position,
      degree: this.$route.query.degree,
      endUniversity: this.$route.query.endUniversity,
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
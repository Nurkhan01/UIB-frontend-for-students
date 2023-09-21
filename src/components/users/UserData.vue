<template>
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{lastName}} {{firstName}}</h5>
      <p class="card-text">Возраст: {{age}}</p>
      <p class="card-text">Опыт: {{exp}}</p>
      <p class="card-text">Позиция: {{position}}</p>
      <p class="card-text">Степень: {{degree}}</p>
      <p class="card-text">Окончил: {{endUniversity}}</p>
    </div>
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
  }
}
</script>

<style scoped>

</style>
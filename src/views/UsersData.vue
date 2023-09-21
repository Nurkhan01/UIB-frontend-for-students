<template>
  <div>
    <h1>Здесь список всех пользователей.</h1>
    <InfoUsers :items="usersArray" @change_user_position="changePosition" @parent_change_user="changeUserData"/>
  </div>

</template>

<script>

import InfoUsers from "@/components/users/InfoUsers.vue";

export default {
  name: "UsersData",
  components: {
    InfoUsers
  },
  data() {
    return {
      usersArray: [
        {id: 1, lastName: "Zhaksylyk", firstName: "Nurkhan", exp: "3 years", age : 26, position: "hard teacher", degree: "master", endUniversity: "Kaznu al-farabi"},
        {id: 2, lastName: "Asimzhan", firstName: "Abylai", exp: "2 years", age: 26, position: "professor", degree: "master", endUniversity: "Kaznu al-farabi"},
        {id: 3, lastName: "Zhidebay", firstName: "Islambek", exp: "1 year", age: 26, position: "teacher", degree: "master", endUniversity: "Kaznu al-farabi"},
        {id: 4, lastName: "Yergeshov", firstName: "Bekzat", exp: "1 year", age: 26, position: "teacher", degree: "master", endUniversity: "Kaznu al-farabi"},
        {id: 5, lastName: "Kerimbai", firstName: "Miras", exp: "1 year", age: 26, position: "teacher", degree: "master", endUniversity: "Kaznu al-farabi"},
        {id: 6, lastName: "Gabdjanova", firstName: "Aizhan", exp: "1 year", age: 26, position: "teacher", degree: "master", endUniversity: "Kaznu al-farabi"},
      ]
    }
  },
  methods: {
    changePosition(arrData) {
      let oldData = this.usersArray[arrData[0]]
      let newData = this.usersArray[arrData[1]]
      console.log(arrData)
      this.usersArray[arrData[0]] = newData
      this.usersArray[arrData[1]] = oldData

      console.log(this.usersArray)
    },
    changeUserData(newUsersData) {
      let index = this.usersArray.findIndex(i => i.id === newUsersData['id'])
      this.usersArray[index] = newUsersData
    }
  }
}
</script>

<style scoped>

</style>
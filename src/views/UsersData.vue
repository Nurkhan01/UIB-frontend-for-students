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
        {id: 1, lastName: "Zhaksylyk", firstName: "Nurkhan"},
        {id: 2, lastName: "Asimzhan", firstName: "Abylai"},
        {id: 3, lastName: "Zhidebay", firstName: "Islambek"}
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
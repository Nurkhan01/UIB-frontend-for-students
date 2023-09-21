<template>
  <div>
    <h2>Пользователи университета международного бизнеса</h2>
    <div class="container" id="users">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 fs-3">
          <div v-for="(item, index) in items" :key="item.id">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" :value="index" v-model="checkedUsers"
                     :disabled="inputDisabled" :id="item.id">
              <label class="form-check-label" :for="item.id">
                {{ item.lastName }} {{ item.firstName }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center" id="users_action">
        <button type="button" class="btn btn-success" @click="changeUserPosition">Change Position</button>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                @click="openModal">
          Launch demo modal
        </button>
      </div>
    </div>
    <div v-for="(item, index) in items" :key="index">
      <RouterLink :to="'/user-data?lastName='+item.lastName + '&firstName=' +item.firstName
      + '&age=' + item.age + '&exp=' + item.exp  + '&degree=' + item.degree + '&endUniversity' + item.endUniversity">
        {{ item.lastName }} {{ item.firstName }}
      </RouterLink>
    </div>
  </div>
  <UserModal :choosenUser="choosenUser" @change_user="changeUser"/>
</template>

<script>
import UserModal from "@/components/users/UserModal.vue";

export default {
  name: "InfoUsers",
  components: {
    UserModal
  },
  props: {
    items: Array,
  },
  data() {
    return {
      checkedUsers: [],
      inputDisabled: false,
      isOpened: false,
      choosenUser: {}
    }
  },
  watch: {
    checkedUsers() {
      if (this.checkedUsers.length > 1) {
        this.inputDisabled = true
      } else {
        this.inputDisabled = false
      }
    },
  },
  methods: {
    changeUserPosition() {
      if (this.checkedUsers.length <= 1) {
        alert("Выберите 2 пользователей")
      } else {
        this.$emit('change_user_position', this.checkedUsers)
        this.checkedUsers = []
      }
    },
    openModal() {
      this.isOpened = true
      this.choosenUser = this.items[this.checkedUsers[0]]
    },
    changeUser(newUsersData) {
      this.$emit('parent_change_user', newUsersData)
    }
  }
}
</script>

<style scoped>
#users, #users_action {
  margin-top: 2%;
}

#users_action button {
  margin-left: 2%;
}
</style>
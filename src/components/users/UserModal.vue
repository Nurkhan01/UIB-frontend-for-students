<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" >
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-if="Object.keys(choosenUser).length">
          <input type="text" v-model="lastName">
          <input type="text" v-model="firstName">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="changeData">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserModal",
  props: {
    choosenUser: Object
  },
  data() {
    return {
      lastName: '',
      firstName: ''
    }
  },
  methods : {
    changeData(){
      this.$emit('change_user', {'lastName' : this.lastName, 'firstName' : this.firstName, 'id': this.choosenUser.id})
    }
  }
}
</script>

<style scoped>

</style>
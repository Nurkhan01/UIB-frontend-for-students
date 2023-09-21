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
          <form>
            <div class="md-3">
              <label for="lastName" class="col-form-label">last name</label>
              <input type="text" class="form-control" v-model="lastName" :placeholder="choosenUser.lastName" id="lastName">
            </div>
            <div class="mb-3">
              <label for="firstName" class="col-form-label">last name</label>
              <input type="text" class="form-control" v-model="firstName" :placeholder="choosenUser.firstName" id="firstName">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="changeData">Save changes</button>
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
      this.lastName = ''
      this.firstName = ''
    }
  }
}
</script>

<style scoped>

</style>
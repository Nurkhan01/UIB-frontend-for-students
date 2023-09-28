<template>
  <div class="container" >
    <div class="row">
      <div class="col-md-4" v-for="(product, index) in products" :key="index">
        <div class="card" style="width: 18rem;" >
          <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{product.brand}}</h6>
            <p class="card-text">{{product.description}}</p>
            <RouterLink :to="'/product/' + index" class="nav-link">get full information</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductsData",
  computed: {
    ...mapState('productsdata',['products']),
  },
  methods:{
    ...mapActions('productsdata', ['GET_PRODUCTS']),
  },
  async created() {
    await this.GET_PRODUCTS()
  }
}
</script>

<style scoped>

</style>
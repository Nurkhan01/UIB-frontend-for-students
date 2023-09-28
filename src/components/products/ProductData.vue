<template>
  <!--  {{ productsById }}-->
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-4">
        <img :src="productsById.thumbnail" class="img-fluid" alt="Product Thumbnail">
      </div>
      <div class="col-lg-8">
        <h2 class="mb-3">{{productsById.title}}</h2>
        <p><strong>Description:</strong> {{productsById.description}}</p>
        <p><strong>Price:</strong> {{productsById.price}}</p>
        <p><strong>Discount Percentage:</strong> {{productsById.discountPercentage}}</p>
        <p><strong>Rating:</strong> {{productsById.rating}}</p>
        <p><strong>Stock:</strong> {{productsById.stock}}</p>
        <p><strong>Brand:</strong> {{productsById.brand}}</p>
        <p><strong>Category:</strong> {{productsById.category}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ProductData",
  data() {
    return {
      index: this.$route.params.index
    }
  },
  computed: {
    ...mapState('productsdata', ['products']),
    productsById() {
      return this.products[this.index]
    }
  }
}
</script>

<style scoped>
.carousel-item img {
  max-height: 200px; /* Установите желаемую максимальную высоту */
  width: auto;
  margin: 0 auto; /* Центрируем изображения */
  display: block;
}
</style>
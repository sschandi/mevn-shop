<template>
  <div class="card">
    <router-link :to="{name: 'product', params: {id: product._id}}">
      <img :src="product.image" :alt="product.name">
    </router-link>
    <div class="card-text">
      <router-link :to="{name: 'product', params: {id: product._id}}">
        <h3>{{ product.name }}</h3>
      </router-link>
      <router-link :to="{name: 'category', params: {category: product.category}}">
        <h5>{{ product.category }}</h5>
      </router-link>
      <p>${{ product.price }}<button class="btn" @click="addToCart(product)">Buy Now</button></p>
      <!-- <p>{{ product.description.substring(0, 50) }}</p> -->
      <!-- <router-link tag="button" class="btn" :to="{ name: 'product', params: { id: product._id }}">Desciption</router-link> -->

    </div>
  </div>
</template>

<script>
import mixins from '@/mixins/mixins'

export default {
  props: ['product'],
  mixins: [mixins]
}
</script>

<style scoped>
.btn {
  float: right;
}
.card {
  background-color: #D9FAFF;
  width: 300px;
  margin: 1em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 0 0 10px 10px;
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card-text {
  padding: 1em;
}
h3, h5 {
  margin: 0;
}
img {
  width: 100%;
}
</style>

<template>
  <div class="list-item">
    <router-link :to="{name: 'product', params: {id: product._id}}">
      <h3>{{ product.name }}</h3>
    </router-link>
    <p>${{ product.price }}</p>
    <router-link tag="button" class="btn btn-red" :to="{name: 'editProduct', params: {id: product._id}}">Edit</router-link>
  </div>
</template>

<script>
import Api from '@/config/Api'

export default {
  props: ['product'],
}
</script>

<style scoped>
.list-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #D9FAFF;
  margin-bottom: 1em;
}
</style>

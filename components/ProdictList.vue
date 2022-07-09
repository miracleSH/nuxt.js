<template>
  <div>
    {{products}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const response = await axios.get('http://localhost:8080/products')
    const products = response.data
    return { products }
  },
}
</script>

<style>

</style>
<template>
  <div>
    <h1>메인페이지</h1>
    <p>메인페이지 입니다.</p>
    <div>
      {{products}}
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'MainPage', 
  async asyncData() {
    const response = await axios.get('http://localhost:8080/products')
    const products = response.data
    return { products }
  },
  data(){
    return{
      
    }
  },
}
</script>
<style scoped>

</style>
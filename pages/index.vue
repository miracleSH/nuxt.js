<template>
  <div class="app">
    <main>
      <div>
        <search-input v-model="searchKeyword" @search="searchProducts" />
      </div>
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="routeToProductDetail(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="routeToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>
<script>
import SearchInput from '@/components/SearchInput.vue'
import { fetchProducts, fetchProductByKeyword } from '@/api'
export default {
  name: 'MainPage',
  components: { SearchInput },
  async asyncData() {
    const response = await fetchProducts()
    const products = response.data.map((product) => {
      return {
        ...product,
        imageUrl: `${product.imageUrl}?random=${Math.random()}`,
      }
    })
    return { products }
  },
  data() {
    return {
      searchKeyword: '',
    }
  },
  methods: {
    routeToProductDetail(id) {
      this.$router.push(`product/${id}`)
    },
    async searchProducts() {
      const response = await fetchProductByKeyword(this.searchKeyword)
      this.products = response.data.map((product) => {
        return {
          ...product,
          imageUrl: `${product.imageUrl}?random=${Math.random()}`,
        }
      })
    },
    routeToCartPage() {
      this.$router.push('/cart')
    },
  },
}
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>

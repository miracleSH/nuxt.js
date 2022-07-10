<template>
  <div class="container">
    <h1 class="list-title">카트페이지</h1>
    <div class="list-wrapper">
      <ul>
        <li
          v-for="item in $store.state.cartItems"
          :key="item.id"
          class="list-item"
        >
          <img class="thumbnail" :src="item.imageUrl" :alt="item.name" />
          <div class="description">
            <p class="name">{{ item.name }}</p>
            <p class="price">{{ item.price }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
// import {FETCH_CART_ITEMS} from '@/store'
export default {
  name: 'ProductCart',
  /* async asyncData({store}) {
    await store.dispatch(FETCH_CART_ITEMS)
    return {carts: store.state.cartItems}
  }, */
  data(){
    return{

    }
  },
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>

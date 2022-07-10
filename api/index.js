import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like : keyword
    },
  })
}

function createCartItem(cartItem){
  return instance.post('/carts', cartItem)
}

function fetchCartItem(){
  return instance.get('/carts')
}
export { fetchProductById, fetchProductByKeyword, createCartItem, fetchCartItem }

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Customer from '../pages/Customer.vue'
import Category from '../pages/Category.vue'
import Product from '../pages/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/customer',
    name: 'customer',
    component: Customer
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  }
]

const router = new VueRouter({
  routes
})

export default router

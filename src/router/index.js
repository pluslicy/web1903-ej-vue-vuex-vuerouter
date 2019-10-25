import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Customer from '../pages/Customer.vue'
import CustomerDetail from "../pages/CustomerDetail"
import Category from '../pages/Category.vue'
import Product from '../pages/Product.vue'
import Order from '../pages/Order.vue'
import Order_wfk from '../pages/Order_wfk.vue'
import Order_wpd from '../pages/Order_wpd.vue'
import Order_wjd from '../pages/Order_wjd.vue'
import Login from '../pages/Login'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[{
      path: 'customer',
      name: 'customer',
      component: Customer
    },
    {
      path:'customerDetail',
      name:'customerDetail',
      component:CustomerDetail
    },
    {
      path: 'category',
      name: 'category',
      component: Category
    },
    {
      path: 'product',
      name: 'product',
      component: Product
    },{
      path: 'order',
      name: 'order',
      component:Order,
      children:[{
        path: 'order_wfk',
        name: 'order_wfk',
        component:Order_wfk,
      },{
        path: 'order_wpd',
        name: 'order_wpd',
        component:Order_wpd,
      },{
        path: 'order_wjd',
        name: 'order_wjd',
        component:Order_wjd,
      }]
    }]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next)=>{
  // console.log("to:",to);
  // console.log("from:",from);
  // console.log("next:",next);

  next();
});

export default router

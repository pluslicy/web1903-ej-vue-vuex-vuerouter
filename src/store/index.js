import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import customer from './customer'
import category from './category'
import product from './product'

export default new Vuex.Store({
  modules:{
    customer,
    category,
    product
  }
})

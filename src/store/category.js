import {get,post,post_array} from '../http/axios'
export default {
  namespaced:true,
  state:{
    visible:false,
    categories:[],
    title:"添加栏目信息"
  },
  getters:{
    countCategories:(state)=>{
      return state.categories.length;
    },
    // 需要为获取器传递参数的写法
    categoryStatusFilter:(state)=>{
      return function(status){
        if(status){
          return state.categories.filter(item=>item.status===status)
        } else {
          return state.categories;
        }
      }
    }
  },
  mutations:{
    showModal(state){
      state.visible = true;
    },
    closeModal(state){
      state.visible = false;
    },
    // 需要接受一个参数，这个参数就是categories
    refreshCategories(state,categories){
      console.log('state->',state);
      state.categories = categories;
    },
    setTitle(state,title){
      state.title = title;
    }
  },
  actions:{
    async batchDeleteCategories(context,ids){
      let response = await post_array("/category/batchDelete",{ids});
      context.dispatch("findAllCategories")
      return response;
    },
    // async findAllCategories({commit,dispatch,getters,state}){
    async findAllCategories(context){
      console.log("context->",context);
      // 1. 查询所有栏目信息
      let response = await get("/category/findAll");
      // 2. 将栏目信息设置到state.categories中
      context.commit("refreshCategories",response.data)
    },
    async deleteCategoryById({dispatch},id){
      // 1. 删除栏目信息
      let response = await get("/category/deleteById?id="+id);
      // 2. 刷新
      dispatch("findAllCategories")
      // 3. 提示成功
      return response;
    },
    async saveOrUpdateCategory({dispatch,commit},category){
      // 1. 提交请求
      let response = await post("/category/saveOrUpdate",category)
      // 2. 关闭模态
      commit("closeModal");
      // 3. 刷新页面
      dispatch("findAllCategories");
      // 4. 提示成功 react
      return response;
    }
  }
}
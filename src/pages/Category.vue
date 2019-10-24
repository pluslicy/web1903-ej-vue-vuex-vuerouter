<template>
  <div class="category">
    <h2>栏目管理</h2>
		<!-- 按钮 -->
		<div class="btns">
			<el-button @click="toAddHandler" type="primary" size="small">添加</el-button>
			<el-button type="danger" size="small" @click="batchDeleteHandler">批量删除</el-button>
		</div>
		<!-- 表单 -->
    <el-dialog :title="title" :visible.sync="visible" @close="dialogCloseHandler">
      <el-form :model="form" :rules="rules" ref="categoryForm">
        <el-form-item label="栏目名称" label-width="80px" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="序号" label-width="80px" prop="num">
          <el-input v-model="form.num" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal" size="small">取 消</el-button>
        <el-button type="primary" @click="submitHandler" size="small">确 定</el-button>
      </div>
    </el-dialog>
		<!-- 表格 -->
    <el-table :data="categories" size="small" @selection-change="idsChangeHandler">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="栏目名称"></el-table-column>
      <el-table-column prop="num" label="序号"></el-table-column>
      <el-table-column prop="parentId" label="父栏目"></el-table-column>
      <el-table-column label="操作" width="100px" align="center">
        <template #default="record">
          <a href="" class="el-icon-delete" @click.prevent = "deleteHandler(record.row.id)"></a> &nbsp;
          <a href="" class="el-icon-edit-outline" @click.prevent = "editHandler(record.row)"></a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {
      ids:[],
      form:{},
      rules:{
        name: [
          { required: true, message: '请输入栏目名称', trigger: 'blur' },
        ],
        num:[
          { required: true, message: '请输入序号', trigger: 'blur' }
        ]
      }
    }
  },
  created(){
    this.findAllCategories();
  },
  computed:{
    ...mapState("category",["categories","visible","title"]),
    ...mapGetters("category",["countCategories","categoryStatusFilter"])
    // 普通属性

  },
  methods:{
    ...mapActions("category",["findAllCategories","deleteCategoryById","saveOrUpdateCategory","batchDeleteCategories"]),
    ...mapMutations("category",["showModal","closeModal","setTitle"]),
    // 普通方法
    batchDeleteHandler(){
      this.batchDeleteCategories(this.ids)
      .then((response)=>{
        this.$message({type:"success",message:response.statusText});
      })
    },
    idsChangeHandler(val){
      this.ids = val.map(item => item.id);
    },
    dialogCloseHandler(){
      this.$refs.categoryForm.clearValidate();
    },
    toAddHandler(){
      this.form = {};
      this.setTitle("添加栏目信息")
      this.showModal();
    },
    submitHandler(){
      // 1.表单验证
      this.$refs.categoryForm.validate((valid)=>{
        if(valid){
          // 2.提交表单
          this.saveOrUpdateCategory(this.form)
          .then((response)=>{
            this.$message({type:"success",message:response.statusText});
          })
        } else {
          return false;
        }
      });
      
    },
    deleteHandler(id){
      let promise = this.deleteCategoryById(id)
      promise.then((response)=>{
        this.$message({type:"success",message:response.statusText});
      })
    },
    editHandler(row){
      this.form = row;
      this.setTitle("修改栏目信息")
      this.showModal();
    }
  }
}
</script>
<style scoped>

</style>
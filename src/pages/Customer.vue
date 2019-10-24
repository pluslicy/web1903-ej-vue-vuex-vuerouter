<template>
  <div class="customer">
    <h2>顾客管理</h2>
		<!-- 按钮 -->
		<div class="btns">
			<el-button @click="toAddHandler" type="primary" size="small">添加</el-button>
			<el-button type="danger" size="small" @click="batchDeleteHandler">批量删除</el-button>
		</div>
		<!-- 表单 -->
    <el-dialog :title="title" :visible.sync="visible" @close="dialogCloseHandler">
      <el-form :model="form" :rules="rules" ref="customerForm">
        <el-form-item label="姓名" label-width="60px" prop="realname">
          <el-input v-model="form.realname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="60px" prop="telephone">
          <el-input v-model="form.telephone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeModal" size="small">取 消</el-button>
        <el-button type="primary" @click="submitHandler" size="small">确 定</el-button>
      </div>
    </el-dialog>
		<!-- 表格 -->
    <el-table :data="customers" size="small" @selection-change="idsChangeHandler">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="realname" label="姓名"></el-table-column>
      <el-table-column prop="telephone" label="手机号"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
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
        realname: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
        ],
        telephone:[
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ]
      }
    }
  },
  created(){
    this.findAllCustomers();
  },
  computed:{
    ...mapState("customer",["customers","visible","title"]),
    ...mapGetters("customer",["countCustomers","customerStatusFilter"])
    // 普通属性

  },
  methods:{
    ...mapActions("customer",["findAllCustomers","deleteCustomerById","saveOrUpdateCustomer","batchDeleteCustomers"]),
    ...mapMutations("customer",["showModal","closeModal","setTitle"]),
    // 普通方法
    batchDeleteHandler(){
      this.batchDeleteCustomers(this.ids)
      .then((response)=>{
        this.$message({type:"success",message:response.statusText});
      })
    },
    idsChangeHandler(val){
      this.ids = val.map(item => item.id);
    },
    dialogCloseHandler(){
      this.$refs.customerForm.clearValidate();
    },
    toAddHandler(){
      this.form = {};
      this.setTitle("添加顾客信息")
      this.showModal();
    },
    submitHandler(){
      // 1.表单验证
      this.$refs.customerForm.validate((valid)=>{
        if(valid){
          // 2.提交表单
          this.saveOrUpdateCustomer(this.form)
          .then((response)=>{
            this.$message({type:"success",message:response.statusText});
          })
        } else {
          return false;
        }
      });
      
    },
    deleteHandler(id){
      let promise = this.deleteCustomerById(id)
      promise.then((response)=>{
        this.$message({type:"success",message:response.statusText});
      })
    },
    editHandler(row){
      this.form = row;
      this.setTitle("修改顾客信息")
      this.showModal();
    }
  }
}
</script>
<style scoped>

</style>
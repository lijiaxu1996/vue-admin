<template>
  <div>
    <!-- 导航栏部分 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div>
        <el-row :gutter="30">
          <el-col :span="10"
            ><div>
              <!-- 搜索开始 -->
              <el-input placeholder="请输入内容" v-model="queryList.keyword">
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="getUserList"
                ></el-button>
              </el-input></div
          ></el-col>
          <el-col :span="8"
            ><div>
              <el-button type="primary" @click="isClick = true"
                >添加用户</el-button
              >
            </div></el-col
          >
          <!-- 添加用户对话框 -->
          <el-dialog
            title="添加用户 "
            :visible.sync="isClick"
            width="50%"
            :before-close="handleClose"
            @close="resetClose"
          >
            <el-form
              :model="addForm"
              :rules="addFormRules"
              ref="addFormRef"
              label-width="80px"
            >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="addForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="addForm.password" type="password"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="addForm.email"></el-input>
              </el-form-item>

              <el-form-item label="手机号" prop="phone">
                <el-input v-model="addForm.phone"></el-input>
              </el-form-item>

              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="addForm.gender">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="角色" prop="role">
                <el-select
                  v-model="addForm.role"
                  placeholder="请选择对应角色"
                >
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通用户" value="密码"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="isClick = false">取 消</el-button>
              <el-button type="primary" @click="addUser"
                >确 定</el-button
              >
            </span>
          </el-dialog>
          <!-- 编辑用户 -->
           <el-dialog
            title="编辑用户信息 "
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose"
            @close="resetCloseEdit"
          >
            <el-form
              :model="editForm"
              :rules="editFormRules"
              ref="editFormRef"
              label-width="80px"
            >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="editForm.username" disabled></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="editForm.password" type="password"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="editForm.email"></el-input>
              </el-form-item>

              <el-form-item label="手机号" prop="phone">
                <el-input v-model="editForm.phone"></el-input>
              </el-form-item>

              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="editForm.gender">
                  <el-radio label="男" disabled></el-radio>
                  <el-radio label="女" disabled></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="角色" prop="role">
                <el-select
                  v-model="editForm.role"
                  placeholder="请选择对应角色"
                >
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通用户" value="密码"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="editUser"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </el-row>
        <!-- 表格开始 -->
        <el-table :data="userList" border>
          <el-table-column
            label="#"
            prop="id"
            width="50px"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            label="姓名"
            prop="username"
            width="120px"
          ></el-table-column>

          <el-table-column
            label="密码"
            prop="password"
            width="80px"
          ></el-table-column>

          <el-table-column
            label="邮箱"
            prop="email"
            width="180px"
          ></el-table-column>

          <el-table-column
            label="手机号"
            prop="phone"
            width="120px"
          ></el-table-column>
          <el-table-column
            label="角色"
            prop="role"
            width="100px"
          ></el-table-column>

          <el-table-column label="性别" prop="gender" width="50px">
            <template slot-scope="scope">
              {{ scope.row.gender === 1 ? '女' : '男' }}
            </template>
          </el-table-column>
          <el-table-column
            label="状态"
            prop="status"
            width="80px"
            ref="switchStatus"
          >
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                @change="userStateHandle(scope.row)"
              >
              </el-switch>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="193px">
          <template slot-scope="scope">
          <!-- {{scope.row.id}} -->
          <el-button size="mini" @click=" editUserBtn(scope.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="removeUser(scope.row.id)">删除</el-button>
          </template>
           
          </el-table-column>
        </el-table>
        <!-- 分页开始 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.queryList.pageNum"
          :page-sizes="[1, 2, 3, 4]"
          :page-size="this.queryList.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.total"
          >x`
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
// import { use } from 'vue/types/umd'
export default {
  data() {
    // 自定义手机号规则
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        console.log(reg.test(value))
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    return {
      queryList: {
        keyword: '',
        pageNum: 1,
        pageSize: 2,
      },
      userList: [],
      total: 0,
      isClick: false,
      dialogVisible: false,
      addForm: { username: '', password: '', email: '', phone: '', gender: '',role:'' },
      addFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 20,
            message: '用户名的长度在3-20字符之间',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 25,
            message: '密码的长度在6-25字符之间',
            trigger: 'blur',
          },
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' },
        ],
        gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
        role:{ required: true, message: '请选择对应角色', trigger: 'change' }
      },
      editForm: { username: '', password: '', email: '', phone: '', gender: '',role:'' },
      editFormRules: {
        username: [
          { required: false, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 20,
            message: '用户名的长度在3-20字符之间',
            trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 25,
            message: '密码的长度在6-25字符之间',
            trigger: 'blur',
          },
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkPhone, trigger: 'blur' },
        ],
        gender: [{ required: false, message: '请选择性别', trigger: 'change' }],
        role:{ required: true, message: '请选择对应角色', trigger: 'change' }
      },

    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    async getUserList() {
      let user = await this.$http.get('/api/user', { params: this.queryList })
      console.log(user.data.lists)
      // console.log(user);
      let { lists: result } = user.data //进行解构
      let { queryList: ans } = user.data
      console.log(ans)
      if (user.status !== 200) return this.$notify.error('用户列表获取失败！')
      else {
        if (this.queryList.keyword !== '') {
          result.data = ans.query
          result.total = ans.total[0].total
        }
        result.data.map((item) => {
          //判断state里面是否有值,如果，有值的话设置status为true,否则为false

          item.status = item.status === '1'

          //  console.log(this.userList.status);
        })
        this.userList = result.data

        // console.log(this.userList);
        // console.log(this.userList.status);
        // this.userList.status=user.data
        // this.total = user.data.length;
        this.total = result.total
        // console.log(result);
        // console.log(this.userList, this.total)
      }
    },
    handleSizeChange(pageSize) {
      this.queryList.pageSize = pageSize
      this.getUserList()
    },
    handleCurrentChange(curIndex) {
      this.queryList.pageNum = curIndex
      this.getUserList()
    },
    // 处理用户状态
    async userStateHandle(newUserList) {
      // console.log(newUserList);
      let ans = await this.$http.patch(`/api/user/${newUserList.id}`, {
        status: newUserList.status,
      })
      console.log(ans)
      if (ans.status !== 200) {
        newUserList.status = !newUserList.status
        this.$msg.error('用户状态更新失败')
      } else {
        this.$msg.success('用户状态更新成功!')
      }
    },
    handleClose(done) {
     
      this.$confirm('确认关闭？')
        .then((_) => {
          
          done()
        })
        .catch((_) => {})
    },
    resetClose(){
       this.$refs.addFormRef.resetFields()
      
    },
    resetCloseEdit(){
       this.$refs.editFormRef.resetFields()
    },
    addUser(){
      //实现预校验
      this.$refs.addFormRef.validate(async vaild=>{
        // console.log(vaild);
        if(!vaild) return ;
        //开始获取网络数据
        const user = await this.$http.post('api/user',this.addForm);
        // console.log(user);
        const {data:ans}=user;
        if(ans.code!==0) {
          this.$msg.error('用户添加失败~')
        }
        this.$msg.success('用户添加成功!')
        this.isClick=!this.isClick;//关闭对话框
        this.getUserList()
      })
    },
    editUser(){
      //实现预校验
      this.$refs.editFormRef.validate(async vaild=>{
        // console.log(vaild);
        if(!vaild) return ;
        //开始获取网络数据
        // console.log(this.userList.keys());
        const user = await this.$http.patch(`api/user/${this.editForm.id}`,{password:this.editForm.password,
        email:this.editForm.email,phone:this.editForm.phone,role:this.editForm.role});
        // console.log(user);
        const {data:ans}=user;
        if(ans.code!==0) {
          this.$msg.error('用户信息编辑失败~')
        }
        this.$msg.success('用户信息编辑成功!')
        this.dialogVisible=!this.dialogVisible;//关闭对话框
        this.getUserList()
      })
    },
   async editUserBtn(id){
      this.dialogVisible=true;
      // console.log(id);
      //根据id查询对应的用户数据
      const user = await this.$http.get('api/user/?id='+id);
      
      // console.log(user.data.lists);
      const {data} = user.data.lists;
      // this.editForm=
      // console.log(data[0]);
      this.editForm=data[0]; 
      // console.log(this.editForm);
      
    },
   async removeUser(id){
     let confirmObj=await  this.$confirm('确定永久删除这个用户吗？','提示信息',{
        confirmButtonText:'取消',
        confirmButtonText:'确定',
        type:'warning'
     })
        .catch((_err) => _err)
        if(confirmObj!=='confirm'){
          return this.$msg.info('取消删除成功!')
        }
        // console.log('删除成功!');
        let user = await this.$http.delete(`api/user/${id}`);
        const {data:res} = user;
        if(res.code!==0) return this.$msg.error('删除用户失败~');
        else this.$msg.success('删除用户成功!')
        this.getUserList()
    }

  },
}
</script>
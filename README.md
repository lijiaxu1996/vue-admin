# vue-admin

> 这是使用vue技术栈实现的vue-admin后台管理系统。





## 核心功能
### 1.vue-admin登录退出功能:
- 完成了vue/cli3进行项目创建
- 完成了Element UI进行项目整合。
- 完成了登录页面布局搭建。
- 完成了对登录表单的数据校验（使用elemet UI进行前端校验）
- 利用axios进行后台数据接口的调试。
- 完成了对应的消息提示框
- 完成了退出功能，这里主要使用了Vuex+localStorage对后台token进行控制。
- 完成了欢迎页面用户名的显示功能。
#### 1.1技术难点
在利用Vuex和localStorage对用户名进行显示的时候，页面一旦刷新就会使得Vuex里面的保存的数据丢失,解决办法就是在App.vue里面从新对Vuex进行dispatch
![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master//vue16.gif)
### 2.用户管理功能
- 完成了ElementUI的页面布局。
- 完成了用户的添加功能
- 完成了用户的删除功能
- 完成了用户的编辑功能
- 完成了用户的查询功能
- 查询功能实现方法是主要是模糊查询
- 完成了分页功能
![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master//vue17.gif)
### 3.系统管理
- 完成了角色获取（使用MOCK）
- 完成了菜单获取(真实接口)
### 4. 部署上线成功
http://47.93.62.50:8080/vue-admin/#/login

# vue-admin
这是一个vue写的后台管理系统

## 主要功能
- 登录注册
- 权限管理
- 内容管理
- 用户管理
- 分类管理

## 技术栈实现
- Vue
- Vue-Router
- Vuex
- axios
- Element UI

## Git创建分支
    git checkout -b login
    git branch

## Vuecli4实现自适应布局
```bash
npm install amfe-flexible --S
npm install postcss-pxtorem --S

import 'amfe-flexible' 

module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require("autoprefixer")({
              // 配置使用 autoprefixer
              overrideBrowserslist: ["last 15 versions"] 
            }),
            require("postcss-pxtorem")({
              rootValue: 100, // 换算的基数
              propList: ["*"],
            //exclude: /node_modules/  //配置无需转换
            })
          ]
        }
      }
    }
  };


```

## 收获

1. 掌握Vue核心技术的使用方法。
2. 学会掌握常用的权限管理方法。
3. 学会自己解决问题的方法。
4. 学会rem布局原理和Vuecli里面插件使用办法。

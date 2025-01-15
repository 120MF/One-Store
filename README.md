## 简介
One Store是大连民族大学C One战队开发的一站式物料管理系统，致力于“让工作室的每一份物料随叫随到”。

## 部署

```shell
# 确保docker及docker compose已安装
git clone https://github.com/120MF/One-Store.git
# 网络不畅时可使用Gitee代理
# git clone https://gitee.com/dlmu-cone/one-store.git
cd One-Store
docker-compose up -d
```

## How-To

- 登录系统
  - ...
- 入库新的物料
  - ...
- 为物料生成二维码
  - ...
- 借用物料
  - ...
- 修改设置
  - ...

## 开发说明

- 当前`main`分支为应用的代码分支；`design`分支为应用用户界面的设计分支。
- RouteHandler的API的设计均符合OpenAPI规范，可查询[APIFox文档](https://6zq1i82ten.apifox.cn/)

## Credit
- 战队成员
  - [MoonFeather](https://github.com/120MF)
  - [TuxMonkey](https://gitee.com/tuxmonkey)
- 前端组件库
  - [MUI](https://mui.com/)
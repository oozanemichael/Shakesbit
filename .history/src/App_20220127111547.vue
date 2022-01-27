<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.tans1{
  width: 762px;
  height: 452px;
  background: linear-gradient(221deg, #333333 0%, #1D1D1D 100%) !important;
  border-radius: 18px !important;
}
.tans2{
  width: 100%;
  height: 352px;
  background: linear-gradient(221deg, #333333 0%, #1D1D1D 100%) !important;
  border-radius: 18px !important;
}
.tans3{
  width: 100%;
  background: linear-gradient(221deg, #333333 0%, #1D1D1D 100%) !important;
  border-radius: 18px !important;
  display: flow-root;
}
.el-dialog__body{
  padding: 0 20px !important;
}
.el-dialog__headerbtn .el-dialog__close{
  color:#F3E76E !important;
    border: 2px solid #F3E76E;
    border-radius: 50%;
    padding: 4px;
}
.visible-xs .el-collapse-item__arrow{
  margin-top: -115px !important;
}
body{
  background: #08040c  !important;
}
html,body{
      width: 100%;
    overflow-x: hidden;
    background:#08040c  !important;
}
.swiper-pagination-bullet-active{
      background: #F3E76E  !important;
}
.swiper-pagination-bullet{
    width: 20px  !important;
    height: 4px  !important;
    display: inline-block  !important;
    border-radius: 20px  !important;
}
.swiper-pagination-bullet{
  background: #EFE36C  !important;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9{
  padding-right: 5px  !important;
    padding-left: 5px  !important;
}
.el-collapse-item__header{
  background: none !important;
  border-bottom:0  !important;
}
.el-collapse-item__arrow{
  color: #F3E76E  !important;
}
.el-collapse{
  border-top:0  !important;
  border-bottom:0  !important;
}
.el-collapse-item__wrap{
  background-color:#161616  !important;
  border-bottom:0  !important;
}
.el-collapse-item__header{
  height:auto  !important;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 6px;
    height: 6px;
    background-color: #555;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #333;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
</style>

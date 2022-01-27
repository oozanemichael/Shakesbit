<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/images/logo_icon.png">
      </div>
      <div v-if="!isConnect" class="ConnectWallet" @click="goW">Connect Wallet</div>
      <div v-if="isConnect" class="ConnectWallet22" @click="goConnect">
        <!-- <div class="ConnectWallet23"></div> -->
        {{ConnectTxt.n2}}
      </div>

    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/images/logo_icon.png" alt="logo">
        <div  v-if="!isConnect" class="ConnectWallet1"  @click="goW4()" style="height: 27px;line-height: 27px;font-size: 12px;margin-top: 6px;">Connect Wallet</div>
        <div v-if="isConnect" class="ConnectWallet22" style="width:157px;font-size: 12px;height: 27px;line-height: 27px;margin-top: 16px;margin-right: 20px;" @click="goConnect1">
          <!-- <div class="ConnectWallet23" style="width:86px;font-size: 12px;height: 27px;line-height: 27px;"></div> -->
            {{ConnectTxt.n2}}
          </div>
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
        </div>
      </div>

        <el-dialog
          custom-class='tans3'
          title=""
          :visible.sync="ddcd"
          width="370px"
          :before-close="handleClose3"
          :show-close='true'
          :append-to-body="true">

          <div style="width:100%;padding-left:30px;padding-right:30px;">
            <div class="tan111">Select a Wallet</div>
            <div style="padding-bottom:40px;float: left;width:100%">
              <div :class="{acc:mm==index}" class="tan112" :key="index" v-for="(item,index) in aaa" @click="chan(index)">
                <div class="tan222"><span></span></div>
                <div class="tan1121">{{item.name}}</div>
                <div class="tan1122"><img :src="item.src" alt=""></div>
              </div>
            </div>
          </div>
        </el-dialog>
        <el-dialog
          custom-class='tans3'
          title=""
          :visible.sync="ddcd4"
          width="90%"
          :before-close="handleClose4"
          :show-close='true'
          :append-to-body="true">

          <div style="width:100%;padding-left:10px;padding-right:10px;">
            <div class="tan111">Select a Wallet</div>
            <div style="padding-bottom:40px;float: left;width:100%;">
              <div :class="{acc:mm==index}" class="tan112" :key="index" v-for="(item,index) in aaa" @click="chan(index)">
                <div class="tan222" ><span></span></div>
                <div class="tan1121">{{item.name}}</div>
                <div class="tan1122"><img :src="item.src" alt=""></div>
              </div>
            </div>
          </div>
        </el-dialog>

        <el-dialog
          custom-class='tans3'
          title=""
          :visible.sync="ovST"
          width="370px"
          :before-close="handleCloseST"
          :show-close='true'
          :append-to-body="true">

          <div style="width:100%;padding-left:30px;padding-right:30px;">
            <div class="tan111" style="text-align: center;padding-bottom: 50px;padding-top: 20px;font-size: 26px;">coming soon</div>
          </div>
        </el-dialog>
        <!-- 新加弹出 -->
        <el-dialog
          custom-class='tans3'
          title=""
          :visible.sync="isConnect1"
          width="370px"
          :before-close="handleClose5"
          :show-close='true'
          :append-to-body="true">

          <div style="width:100%;padding-left:30px;padding-right:30px;float:left">
            <div class="tan111" style="text-align: center;">Your Wallet</div>
            <div style="padding-bottom:40px;float: left;width:100%;">
              <div class="wallet1">YOUR ADDRESS</div>
              <div class="wallet2" style="margin-top:15px;position: relative;">{{ConnectTxt.n3}}
                <img @click="cop(ConnectTxt.n3)" class="wallet3" src="@/assets/images/fuzhi_icon.png" alt="">
              </div>
              <div class="wallet4">View on Etherscan
                <img  class="wallet3r" src="@/assets/images/wailian_icon.png" alt="">
              </div>
              <div class="wallet5" @click="goConnectBack">Disconnect Wallet</div>
            </div>
          </div>
        </el-dialog>

        <!-- 新加弹出 -->
        <el-dialog
          custom-class='tans3'
          title=""
          :visible.sync="isConnect2"
          width="90%"
          :before-close="handleClose6"
          :show-close='true'
          :append-to-body="true">

          <div style="width:100%;padding-left:30px;padding-right:30px;float:left">
            <div class="tan111" style="text-align: center;">Your Wallet</div>
            <div style="padding-bottom:40px;float: left;width:100%;">
              <div class="wallet1" style="margin-top:30px;font-size: 12px;">YOUR ADDRESS</div>
              <div class="wallet2" style="margin-top:10px;position: relative;font-size:18px;height: 51px;">{{ConnectTxt.n3}}
                <img @click="cop(ConnectTxt.n3)" class="wallet3" src="@/assets/images/fuzhi_icon.png" alt="">
              </div>
              <div class="wallet4" style="margin-top:20px;">View on Etherscan
                <img  class="wallet3r" src="@/assets/images/wailian_icon.png" alt="">
              </div>
              <div class="wallet5" @click="goConnectBack2" style="margin-top:30px;font-size: 14px;">Disconnect Wallet</div>
            </div>
          </div>
        </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
      menuName: "Project",
      menuClass: "glyphicon glyphicon-menu-down",
      ddcd:false,
      ddcd4:false,
      ovST:false,
      isConnect:false,
      isConnect1:false,
      isConnect2:false,
      ConnectTxt:{
        n1:'0.05845 ETH',
        n2:sessionStorage.getItem("mymoney"),
        n3:'oehjg9ejgoejgerhg8ehjg9…'
      },
      mm:0,
      navList: [
        {
          name: "Home",
          path: "/home",
          children: []
        },

        {
          name: "Stake",
          path: "/STAKE",
          children: []
        },
        {
          name: "IHO",
          path: "/IHO",
          children: []
        },
        {
          name: "Buy Token",
          path: "/GOTO",
          children: []
        },
      ],
      aaa:[{src:require("@/assets/images/qianbao2_logo.png"),name:'WalletConnect'},],
    };
  },
    mounted() {
    console.log(sessionStorage.getItem("mymoney"))
    if(sessionStorage.getItem("mymoney")!=null&&sessionStorage.getItem("mymoney")!=''){
      console.log('----')
        this.isConnect=true
    }
    else{
        this.isConnect=false
    }
  },
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
    },
    menuClick() {
      // if (this.menuClass == "glyphicon glyphicon-menu-down") {
      //   this.menuClass = "glyphicon glyphicon-menu-up";
      // } else {
      //   this.menuClass = "glyphicon glyphicon-menu-down";
      // }
    },
    goW(){
      this.ddcd=true
    },
    goW4(){
      this.ddcd4=true
    },
    ov(){
      this.ovST=true
    },
    // 拷贝
    cop(d){
      let input = document.createElement('input')
      //给input的内容复制
      input.value = d
      // 在body里面插入这个元素
      document.body.appendChild(input)
      // 选中input里面内容
      input.select()
      //执行document里面的复制方法
      document.execCommand("Copy")
      // 复制之后移除这个元素
      document.body.removeChild(input)
      // this.$message({
      //     message: '复制成功',
      //     type: 'success'
      //   });
    },
    handleClose3(){
      this.ddcd=false
      // 拟定链接成功，显示新的按钮
      // this.isConnect=true
    },
    handleClose4(){
      this.ddcd4=false
      // 拟定链接成功，显示新的按钮
      // this.isConnect=true
    },
    handleCloseST(){
      this.ovST=false
    },
    goConnect(){
      this.isConnect1=true
    },
    goConnect1(){
      this.isConnect2=true
    },
    handleClose5(){
      this.isConnect1=false
    },
    handleClose6(){
      this.isConnect2=false
    },
    goConnectBack(){
      this.disconnect();
      this.isConnect1=false
      this.isConnect=false
    },
    goConnectBack2(){
      this.disconnect();
      this.isConnect2=false
      this.isConnect=false
    },
    chan(d){
      console.log(d);
      if (d===0){
        //判断用户是否安装MetaMask钱包插件
        if (typeof window.ethereum === "undefined") {
          //没安装MetaMask钱包进行弹框提示
          alert("请安装MetaMask")
        } else {
          var that=this
          //如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
          window.ethereum.enable()
            .then(function (accounts) {
              // 判断是否连接以太
              if (window.ethereum.networkVersion !== "1") {
                console.log('当前网络不在以太坊')
              }
              //如果用户同意了登录请求，你就可以拿到用户的账号
              console.log('用户钱包地址', accounts[0]);
              that.ConnectTxt.n2=accounts[0].toString();
              // 存入缓存
              sessionStorage.setItem('mymoney',accounts[0]);
              that.ConnectTxt.n3=accounts[0].toString();
            })
            // .catch(function (reason) {
            //   // 如果用户拒绝了登录请求
            //   if (reason === "User rejected provider access") {
            //     console.log('用户拒绝了登录请求')
            //   } else {
            //     console.log("其他情况");
            //   }
            // });
        }
      }
      // 当前选中高亮
      this.mm=d
    },
    //断开钱包方法
    async disconnect(){
      this.isConnect=false
      sessionStorage.setItem('mymoney','');
      ethereum.on('disconnect', function (){
        console.log("disconnect");
        
      });
    },

  }
};
</script>
<style scoped>
.wallet1{
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #F3E76E;
  line-height: 20px;
  margin-top: 40px;
  float: left;
  width: 100%;
}
.wallet2{
  width: 100%;
  height: 56px;
  background: rgba(243, 231, 110, 0.1);
  border-radius: 8px;
  float: left;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #F3E76E;
  padding: 12px 18px;
  padding-right: 33px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.wallet3{
  position: absolute;
  top: 14px;
  right: 10px;
  cursor: pointer;
}
.wallet4{
  width: 100%;
  float: left;
  text-align: right;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #F3E76E;
  position: relative;
  margin-top:20px;
  padding-right:25px;
}
.wallet4 img{
  position: absolute;
  top:3px;
  right:0px;
}
.wallet5{
  height: 40px;
  background: #F3E76E;
  border-radius: 4px;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #202020;
  text-align: center;
  width: 100%;
  float: left;
  line-height: 40px;
  cursor: pointer;
  margin-top: 45px;
}
.doc{
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    cursor: pointer;
}
.tan111{
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  width: 100%;
  text-align:left;
  float: left;
}
.tan112{
  width: 100%;
  height: 44px;
  background: #212020;
  border-radius: 4px;
  float: left;
  margin-top: 20px;
  border:1px solid #212020;
  cursor: pointer;
}
.acc{
  background: #161616;
  border-radius: 4px;
  border: 1px solid #F3E76E;
}
.acc .tan222{
  width:10%;
  float: left;
  height: 30px;
}
.acc .tan222 span{
  width: 12px;
  height: 12px;
  background: #F3E76E;
  float: left;
  border-radius: 50%;
  margin-top: 15px;
  margin-left: 56%;
}
.acc .tan1121{
  width:70% !important;
}
.tan112 .tan1121{
  width:80%;
  float: left;
  line-height: 44px;
  padding-left: 10px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
}
.tan112 .tan1122{
  width:20%;
  float: left;
  text-align: right;
}
.tan112 .tan1122 img{
  float: right;
  margin-top: 6px;
  margin-right: 10px;
  width: 30px;
}
/* 顶部 */
#header {
  background: none;
  transition: all ease 0.6s;
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 90px;
}
/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}
/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 150px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 90px;
  float: right;
  margin: 0;
  max-width: 800px;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 30px;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #F3E76E;
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #F3E76E;
  text-decoration: none;
}
.doc:hover{
    color: #F3E76E;
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
.doc:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #F3E76E;
  text-decoration: none;
  border-bottom: 2px solid #F3E76E;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}
@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 60px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 110px;
    position: absolute;
    top: 14px;
    left: 16px;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 41%;
    right: -11px;
    width: 50px;
    height: 40px;
    color: #F3E76E;
    z-index: 999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #020001;
    z-index: 999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #F3E76E;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
.ConnectWallet{
  width: 155px;
  height: 41px;
  background: #F3E76E;
  border-radius: 21px;
  float: right;
  margin-top: 25px;
  line-height: 41px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  margin-left: 60px;
}
.ConnectWallet1{
  width: 155px;
  height: 41px;
  background: #F3E76E;
  border-radius: 21px;
  line-height: 41px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 20px;
}
.ConnectWallet22{
  width: 215px;
  height: 41px;
  background: #F3E76E;
  border-radius: 21px;
  float: right;
  margin-top: 25px;
  line-height: 41px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.ConnectWallet23{
  width: 113px;
  height: 41px;
  background: #FFF9C1;
  border-radius: 21px;
  float: left;
  line-height: 41px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>

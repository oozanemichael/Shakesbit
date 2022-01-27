<template>
  <div id="HomePage" class="animated" style="margin-top: -89px;">
    <div id="bigData" class="container-fuild hidden-xs" 
    >
      <div class="row bigData-container" style="background: url('../assets/images/banner_img.png');background-size:100% 1400px;background-repeat:no-repeat;margin-top:89px">
        <div class="new1">知識 · 工具 · 收益</div>
        <div class="new2">你駕馭加密貨幣的起點 <br/>—Shakesbit</div>
        <div class="new3" v-if="ti">
            白名單開售倒數：
                <span class="span">{{hh}}</span>:
                <span class="span">{{mm}}</span>:
                <span class="span">{{ss}}</span>
        </div>
        <div class="new3" v-if="ti2">
            白名單購買倒數：
                <span class="span">{{hh2}}</span>:
                <span class="span">{{mm2}}</span>:
                <span class="span">{{ss2}}</span>
        </div>
        <div class="new3" v-if="typ2">
            荷蘭式拍賣開售倒數：
                <span class="span">{{hh3}}</span>:
                <span class="span">{{mm3}}</span>:
                <span class="span">{{ss3}}</span>
        </div>
        <div class="new4">
          <div class="new5" style="margin-top: 80px;">
            <video class="video1" style="height: 420px;" controls autoplay="autoplay" loop muted>
              <source src="@/assets/vi.mp4" type="video/mp4">
            </video>
            <div class="new55">
              <div class="new6">價格</div>
              <div class="new7">0.39ETH</div>
              <div class="new6">剩餘數量</div>
              <div class="new7">150/150</div>
              <div class="new6">本輪資格</div>
              <div v-if="typ=='c'" class="new7">公開售賣</div>
              <div v-else class="new7">白名單</div>
            </div>
          </div>
          <div class="new8">
              <div v-if="typ=='b'" class="new9" @click="openY">Mint</div><!-- b阶段按钮 -->
              <div v-else-if="typ=='c'" class="new9" @click="openY">Mint</div><!-- c阶段按钮 -->
              <div v-else class="new9" style="background: rgb(152, 152, 152);">Mint</div>
              <div class="new9" style="margin-left:138px;background: rgb(152, 152, 152);cursor: not-allowed">BUY ON OPENSEA</div>
          </div>
        </div>
        <div class="new10">
          <div style="width: 14px;height: 30px;background: #FFE153;border-radius: 2px;float:left"></div>
          <div class="new11">＊會員權益</div>
          <div class="new12">
            <div style="margin-top:40px">1. NFT交易的Royalty Fee , 50%將於累積後空投給持有者。</div>
            <div style="margin-top:40px">2. Discord創世會員身分組：可以進入進階群組。
                <br/>· 主流幣：走勢分析、技術分析、點位教學。
                <br/>· NFT：分析教學、新項目資訊更新、白名單教學。
                <br/>· 各大鏈新項目：分析、翻譯、資訊更新。
                <br/>· 不定期邀請幣圈各界大佬來演講、教學、分享。</div>
                <div style="margin-top:40px">3. 莎士比特投資收益分紅權益：<br/>
創世會員卡資金如通過透過架設礦場、投資虛擬貨幣...有收益，收益扣除營運、維護、建設...等必要費用後，將反饋給創世會員卡持有者。</div>
            <div class="mask">
            <div style="margin-top:40px">4. 莎士比特量化機器人收益分紅權益：<br/>
創世會員卡資金如通過透過量化機器人有收益，收益扣除營運、維護、建設...等必要費用後，將反饋給創世會員卡持有者。</div>
                <div style="margin-top:40px">5. 莎士比特量化機器人使用權：<br/>
由華爾街團隊 & 火幣技術團隊出身的工程師，共同開發，打造專屬虛擬貨幣市場的量化機器人； 持有創世會員卡免月費即可直接使用。</div>
            </div>
            <div class="mask1">Coming Soon</div>
          </div>
          
        </div>

      </div>
    </div>


    <div id="bigData4" class="container-fuild visible-xs" style="margin-top: -89px;">
      <div class="row bigData-container">
        <div class="new1" style="font-size: 30px;font-weight:400;margin-top: 100px;">知識 · 工具 · 收益</div>
        <div class="new2" style="font-size: 24px;letter-spacing: 4px; line-height: 35px;margin-top:0">你駕馭加密貨幣的起點 <br/>—Shakesbit</div>
        <div class="new3" style="font-size:16px;letter-spacing: 3px;line-height:16px; margin-top: 28px;-webkit-text-stroke:0px #FFE153" v-if="ti">
            白名單開售倒數：
                <span class="span">{{hh}}</span>:
                <span class="span">{{mm}}</span>:
                <span class="span">{{ss}}</span>
        </div>
        <div class="new3" style="font-size:16px;letter-spacing: 3px;line-height:16px;margin-top: 28px;-webkit-text-stroke:0px #FFE153" v-if="ti2">
            白名單購買倒數：
                <span class="span">{{hh2}}</span>:
                <span class="span">{{mm2}}</span>:
                <span class="span">{{ss2}}</span>
        </div>
        <div class="new3" style="font-size:16px;letter-spacing: 3px;line-height:16px;margin-top: 28px;-webkit-text-stroke:0px #FFE153" v-if="ti2">
            荷蘭式拍賣開售倒數：
                <span class="span">{{hh3}}</span>:
                <span class="span">{{mm3}}</span>:
                <span class="span">{{ss3}}</span>
        </div>
        <div class="new4">
          <div class="new5" style="width:60%;height:320px;margin-top:40px;">
            <video style="margin-top:0px;height: 190px;" class="video1" controls autoplay="autoplay" loop muted>
              <source src="@/assets/vi.mp4" type="video/mp4">
            </video>
            <div class="new55" style="padding: 0 14px;">
              <div class="new6" style="font-size: 14px;margin-top: 15px;">價格</div>
              <div class="new7" style="font-size: 14px;margin-top: 15px;">0.39ETH</div>
              <div class="new6" style="font-size: 14px;margin-top: 10px;">剩餘數量</div>
              <div class="new7" style="font-size: 14px;margin-top: 10px;">150/150</div>
              <div class="new6" style="font-size: 14px;margin-top: 10px;">本輪資格</div>
              <div v-if="typ=='c'" class="new7" style="font-size: 14px;margin-top: 10px;">公開售賣</div>
              <div v-else class="new7" style="font-size: 14px;margin-top: 10px;">白名單</div>
            </div>
          </div>
          <div class="new8" style="width:100%">
              <div @click="openY" v-if="typ=='b'" class="new9" style="width:50%;margin-left:25%;margin-top:25px;font-size: 16px;height:44px;line-height:44px">Mint</div><!-- b阶段按钮 -->
              <div @click="openY" v-else-if="typ=='c'" class="new9" style="width:50%;margin-left:25%;margin-top:25px;font-size: 16px;;height:44px;line-height:44px">Mint</div><!-- c阶段按钮 -->
              <div v-else class="new9" style="background: rgb(152, 152, 152);width:50%;margin-left:25%;margin-top:25px;font-size: 16px;;height:44px;line-height:44px">Mint</div>
              <div class="new9" style="width:50%;margin-left:25%;margin-top:20px;font-size: 16px;height:44px;line-height:44px;background: rgb(152, 152, 152);cursor: not-allowed">BUY ON OPENSEA</div>
          </div>
        </div>
        <div class="new10" style="margin-top:65px;padding:0 15px;">
          <div style="width: 10px;height: 26px;background: #FFE153;border-radius: 2px;float:left"></div>
          <div class="new11" style="font-size: 26px;">＊會員權益</div>
          <div class="new12" style="font-size: 18px;line-height: 30px;padding-left: 12px;">
            <div style="margin-top:30px">1. NFT交易的Royalty Fee , 50%將於累積後空投給持有者。</div>
            <div style="margin-top:30px">2. Discord創世會員身分組：可以進入進階群組。
                <br/>· 主流幣：走勢分析、技術分析、點位教學。
                <br/>· NFT：分析教學、新項目資訊更新、白名單教學。
                <br/>· 各大鏈新項目：分析、翻譯、資訊更新。
                <br/>· 不定期邀請幣圈各界大佬來演講、教學、分享。</div>
                <div style="margin-top:30px">3. 莎士比特投資收益分紅權益：<br/>
創世會員卡資金如通過透過架設礦場、投資虛擬貨幣...有收益，收益扣除營運、維護、建設...等必要費用後，將反饋給創世會員卡持有者。</div>
            <div class="mask">
            <div style="margin-top:30px">4. 莎士比特量化機器人收益分紅權益：<br/>
創世會員卡資金如通過透過量化機器人有收益，收益扣除營運、維護、建設...等必要費用後，將反饋給創世會員卡持有者。</div>
                <div style="margin-top:30px">5. 莎士比特量化機器人使用權：<br/>
由華爾街團隊 & 火幣技術團隊出身的工程師，共同開發，打造專屬虛擬貨幣市場的量化機器人； 持有創世會員卡免月費即可直接使用。</div>
            </div>
            <div class="mask1" style="width:70%;font-size: 22px;height: 42px;line-height:42px">Coming Soon</div>
          </div>
          
        </div>
        
      </div>

      <!-- 弹出 -->
      <el-dialog
          custom-class='tans3'
          title=""
          :visible.sync="yanzheng"
          width="270px"
          :before-close="handleCloseyanzheng"
          :show-close='true'
          :append-to-body="true">

          <div style="width:100%;padding-left:30px;padding-right:30px;">
            <div style="padding-bottom:40px;float: left;">
              <slide-verify :l="42"
                :r="10"
                :w="160"
                :h="105"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
                :slider-text="text"
                ></slide-verify>
            </div>
          </div>
        </el-dialog>
        
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
import mychart from '@/components/chart'
import { setTimeout } from 'timers';
export default {
  name: "HomePage",
  data() {
    return {
        day: 0,
        hh: "24", 
        mm: "00", 
        ss: "00",
        hh2: "24", 
        mm2: "00", 
        ss2: "00",
        hh3: "24", 
        mm3: "00", 
        ss3: "00",
        ti:false,
        ti2:false,
        typ:"m",
        text:'',
        msg:'',
        yanzheng:false,
        typ2:false,
    };
  },
  mounted() {
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
    this.countdown()
    const that = this
    setInterval(function () {
      that.countdown()
    }, 1000)
  },
  methods: {
     countdown() {
      // const end = Date.parse(new Date('2022-01-27 20:00:00'))
      const end = Date.parse(new Date('2022-02-04 20:00:00'))   
      const end2 = Date.parse(new Date('2022-02-05 21:00:00'))
      const end3 = Date.parse(new Date('2022-05-05 20:00:00'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      
      const msec2 = end2 - now
      let day2 = parseInt(msec2 / 1000 / 60 / 60 / 24)
      let hr2 = parseInt(msec2 / 1000 / 60 / 60 % 24)
      let min2 = parseInt(msec2 / 1000 / 60 % 60)
      let sec2 = parseInt(msec2 / 1000 % 60)

      const msec3 = end3 - now
      let day3 = parseInt(msec3 / 1000 / 60 / 60 / 24)
      let hr3 = parseInt(msec3 / 1000 / 60 / 60 % 24)
      let min3 = parseInt(msec3 / 1000 / 60 % 60)
      let sec3 = parseInt(msec3 / 1000 % 60)

      this.day = day
      if(msec>0){
        // 阶段a
        if(this.day==0){
          this.ti=true
          // 时间小于一天 开始倒计时 a阶段开始
          this.hh = hr > 9 ? hr : '0' + hr
          this.mm = min > 9 ? min : '0' + min
          this.ss = sec > 9 ? sec : '0' + sec
          this.typ='a'
        }else if(this.day<0){
          // 过期
          this.ti=false
          this.typ='m'
        }
        else{
          // 时间未到
          this.ti=false
          this.typ='m'
        }
      }
      
      if(msec2>0){
        // 阶段b
        if(day2==0&&hr2==0){
          this.typ='b'
          this.ti2=true
          this.hh2 = hr2 > 9 ? hr2 : '0' + hr2
          this.mm2 = min2 > 9 ? min2 : '0' + min2
          this.ss2 = sec2 > 9 ? sec2 : '0' + sec2
        }
        else{
          // 时间未到
          this.typ='m'
        }
      }
      else{
        this.typ='c'
      }
      // 荷兰式拍卖
      if(msec3>0){
        // this.ti=false
        if(day3==0){
          // 
          // 时间小于一天 开始倒计时 a阶段开始
          this.hh3 = hr3 > 9 ? hr3 : '0' + hr3
          this.mm3 = min3 > 9 ? min3 : '0' + min3
          this.ss3 = sec3 > 9 ? sec3 : '0' + sec3
          this.typ2=true
        }
      }
      else{
        // 事件过期
        this.typ2=false
      }
      
    },
    openY(){
      this.yanzheng=true
    },
    handleCloseyanzheng(){
      this.yanzheng=false
    },
    onSuccess(){
      this.msg = 'login success'
      alert("验证成功")
    },
    onFail(){
      this.msg = ''
    },
    onRefresh(){
      this.msg = ''
    }
  },
  components:{
      mychart
  }
};
</script>
<style  scoped>
.mask{position: relative;filter: blur(2px);user-select: none;}
.mask::after{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  background: rgba(0, 0, 0, 0.2);
}
.mask1{
  width: 380px;
  height: 82px;
  background: linear-gradient(90deg, rgba(223, 105, 7, 0) 0%, #DF6907 52%, rgba(243, 231, 110, 0) 100%);
  opacity: 1;
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
  line-height: 82px;
  margin: -200px auto 200px;
}
.new1{
  width:100%;
  font-size: 62px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 87px;
  letter-spacing: 1px;
  -webkit-text-stroke: 2px #FFFFFF;
  text-stroke: 2px #FFFFFF;
  text-align: center;
}
.new2{
  width:100%;
  font-size: 50px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 75px;
  letter-spacing: 16px;
  text-align: center;
  margin-top:50px;
}
.new3{
  width:100%;
  font-size: 34px;
  font-family: PingFangSC-Semibold, PingFang SC;
  color: #FFE153;
  line-height: 75px;
  letter-spacing: 11px;
  -webkit-text-stroke: 1px #FFE153;
  text-stroke: 1px #FFE153;
  text-align: center;
  margin-top:50px;
}
.new4{
  width:100%;
  text-align: center;
  float: left;
}
.new5{
  margin: 0 auto;
  width: 420px;
  height: 620px;
  background: #1A1A1A;
  border-radius: 21px;

}
.new5 video{
  width:100%;
  /* margin-top:80px; */
}
.new55{
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 25px;
  width:100%;float:left;padding:0 30px;
}
.new6{
  float: left;
  width:50%;
  text-align: left;
  margin-top:30px;
}
.new7{
  float: left;
  width:50%;
  text-align: right;
  margin-top:30px;
}
.new8{
  margin: 0 auto;
  width: 650px;
}
.new9{
  width: 256px;
  height: 59px;
  line-height: 59px;
  background: #FFE153;
  border-radius: 8px;
  font-size: 22px;
  font-family: Impact;
  color: #171717;
  text-align: center;
  cursor: pointer;
  float: left;
  margin-top:100px;
}
.new10{
  width:100%;
  text-align: left;
  margin-top: 170px;
  float: left;
}
.new11{
  font-size: 28px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  float: left;
  margin-top: -8px;
}
.new12{
  width:100%;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 48px;
  float: left;
  padding-left: 42px;
}
.SYtime{
  color:#fff;
}
/* 整体盒子 */
#HomePage {
  width: 100%;
  
  
}

/* 轮播图 */
.ss1{
  text-align:left;
  padding-left: 15%;
  color:#FF9B7B;
}
.ss2{
  text-align: left;
    padding-left: 15%;
    width: 50%;
    color:#FF0079
}
#swiper {
  /* height: 600px; */
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide{
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1{
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p{
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}
/* 首页2 */
.homeTwo{
  width: 100%;
  height: 350px;
  background: linear-gradient(221deg, #333333 0%, #1D1D1D 100%);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 22px;
}
.twLeft{
  width:45%;
  float: left;
  margin-right: 5%;
  position: relative;
}
.tip1{
  width: 106px;
  height: 29px;
  background: linear-gradient(90deg, #DF6907 0%, rgba(243, 231, 110, 0) 100%);
  position: absolute;
  top: 33px;
  left:0px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 29px;
  padding-left: 5px;
}
.tx1{
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 22px;
  width: 60%;
  margin-top: 16px;
  margin-bottom: 16px;
  display: inline-block;
}
.tx2{
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 22px;
  width: 30%;
  margin-top: 16px;
  margin-bottom: 16px;
  display: inline-block;
  text-align: right;
}
.xian1{
  width: 100%;
  height: 1px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 255, 255, 0) 100%);
}
.twLeft video{
  width:100%;
  background: #000;
}
.video1{
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  background: #000;
}
.twRight{
  width:50%;
  float: left;
}
.twRight1{
  width:100%;
  float: left;
}
.bt1{
  width: 80%;
  height: 40px;
  background: #F3E76E;
  border-radius: 2px;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #171717;
  line-height: 40px;
  text-align: center;
  margin-top: 40px;
  cursor: pointer;
}
#bigData {
  padding: 50px 100px 50px;
  width: 1170px;
  margin: 0 auto;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#bigData3 {
  padding:0 100px 50px;
  width: 1170px;
  margin: 0 auto;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#bigData4 {
  padding:0 15px 50px;
  width: 100%;
  margin: 0 auto;
  transition: all ease 0.6s;
  box-sizing: border-box;
  background: url('../assets/images/banner_img.png');
  background-size:100% 780px;
background-repeat:no-repeat;
}
.cenkuai{
  width:100%;
  background: linear-gradient(221deg, #333333 0%, #1D1D1D 100%);
  border-radius: 8px;
  float: left;
}
.d1{
  font-size: 20px;
  font-family: "JDZY";
  font-weight: 400;
  color: #F3E76E;
  line-height: 20px;
  width: 100%;
  float: left;
  margin-top: 28px;
  margin-left: 28px;
}
.d2{
  width: 100%;
  float: left;
  margin-left: 28px;
  font-size: 30px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 42px;
}
.d3{
  width: 100%;
  float: left;
  padding-left: 28px;
  padding-top: 30px;
  font-size: 20px;
  font-family: "JDZY";
  font-weight: 400;
  color: #F3E76E;
  line-height: 20px;
}
.d4{
  width:calc(40% - 28px);
  float: left;
  margin-left: 28px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 40px;
  margin-top: 40px;
  margin-bottom: 65px;
}
.d5{
  width:calc(50% - 2px);
  float: left;
  height: 70px;
  border: 1px dashed #fff;
  margin-top: 30px;
}
.d31{
  width: 100%;
  float: left;
  padding-left: 30px;
  padding-top: 5px;
  font-size: 14px;
  font-family: "JDZY";
  font-weight: 400;
  color: #F3E76E;
  line-height: 20px;
}
.d41{
  width:100%;
  float: left;
  font-size: 15px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  padding-left: 30px;
  margin-top: 0;
}
.d51{
  width:calc(100% - 60px);
  float: left;
  height: 70px;
  border: 1px dashed #fff;
  margin-left: 30px;
  margin-bottom: 10px;
}
#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}
#bigData .bigData-device {
  margin: 50px 0 20px;
}
.homeTwoMap{
  width:100%;
  float: left;
  padding: 10px;
}
.homeTwoMap3{
  width:100%;
  float: left;
  padding: 10px;
  /* background: url('../assets/images/banner_img.png');
  background-size: 100% 100%; */
}
.TwoMapKang{
  width: calc(50% - 12px);
  background: linear-gradient(221deg, #333333 0%, #1D1D1D 100%);
  border-radius: 8px;
      float: left;
      margin: 5px;
      position: relative;
}
.TwoMapKang3{
  width: calc(25% - 10px);
  /* background: linear-gradient(221deg, #333333 0%, #1D1D1D 100%); */
  border-radius: 8px;
      float: left;
      margin: 5px;
      position: relative;
}
.twRight1 .tx1, .twRight1 .tx2{
  font-size: 12px !important;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 3px;
}
.twRight1 .tx2{
  width:auto
}
.twRight1 .bt1{
  margin-top: 10px;
  margin-left: 10%;
  margin-bottom: 10px;
}
.im1{
  width:100%;
}
.d4cen{
  width: 1135px;
  margin: 0 auto;
  width: 970px;
  margin: 0px auto;
  padding-top: 50px;
}
/* 媒体查询（手机） */
#swiper {
  height: 800px;
}
@media screen and (max-width: 768px) {
  #swiper {
    height: 250px;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }
  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
  #bigData {
    padding: 60px;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
  #contactUs {
    height: 300px;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'


/* axios */
// import * as axios from './api'
// import api from './api/api'
var axios = require('axios')
axios.defaults.baseURL = 'http://127.0.0.1:8070'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据npm
Vue.prototype.$axios = axios
//Vue.prototype.http = axios;
//Vue.prototype.api = api;

/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)

import "@/assets/fonts/text.css";

/* 验证组件 */
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if(to.meta.title){
      document.title = to.meta.title
    }
    console.log(to)
    if('redirectedFrom' in to){
      if(to.redirectedFrom=='/GOTO'){

          alert('跳转预留')

      }
      else{
        next();
      }
    }
    else{
      next();
    }
});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <a ><img src="@/assets/images/line_icon.png" alt="logo图"></a>
      <a ><img src="@/assets/images/discord_icon.png" alt="logo图"></a>
    </div>
    <p class="copy">Copyright © TowerDao</p>
  </div>
</template>
<script>
import {communityList} from '@/api/index'
export default {
  name: "Footer",
  data() {
    return {
      imgList:[]
    };
  },
  mounted() {
  },
  methods: {
  
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
  display: flex;
  align-items: center;
  justify-content:center
}
.logo img{
  margin: 20px;
  width: 50px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
.logo img{
  width:35px;
}
}
</style>


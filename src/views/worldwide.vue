<template>
<div class="app">
  <div class="wrap">
    <div class="container">
     <topper></topper>
      <div class="clear"></div>
      <div class="center">
        <div class="center_top">
          <img src="./image/banner_03.jpg" alt="">
          <!-- <el-carousel :interval="3000" arrow="always" :height="imgHeight">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <el-row>
                <el-col><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
              </el-row>
            </el-carousel-item>
         </el-carousel> -->
        </div>
        <div class="center_cen">
          <div class="center_cen_left">
            <img src="./image/wordwide1.png" alt="">
          </div>
         <div class="foot_right">
              <p>{{$t("message.Worldewide.w_1")}}</p>
              <p>{{$t("message.Worldewide.w_2")}}</p>
              <span>{{$t("message.Worldewide.w_3")}}</span>
        </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
    </div>
     <div class="line"></div>
    <bottom></bottom>
    </div>
</template>
<script>
import topper from '../components/topper'
import bottom from '../components/bottom'
export default {
  data() {
    return {
      // imgList: [
      //     {id: 0, idView: require('./image/new1.png')},
      //     {id: 1, name: '详情', idView: require('./image/banner_02.jpg')},
      //     {id: 2, idView: require('./image/banner_03.jpg')},
      //     {id: 3, idView: require('./image/banner_04_03.jpg')},
      // ],
      // imgHeight: '498px'
    }
  },
  components: {
     topper,
    bottom
  },
  created() {

  },
  methods: {

  }

}

</script>
<style scoped>
*{
    margin:0;
    padding:0
}
ul li{

  list-style-type: none;
}
.clear{
  clear: both;
}
.wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
}
 .top .left{
   margin:28px 0;
   float: left
}
.top .right{
  margin:13px 0;
  float: right;
  letter-spacing: 2px;
}
.top .right ul li{
  font-weight: 800;
  float: left;
  margin: 48px 0;
  margin-left: 130px;
}
.top .right ul li:hover,
.active{
  color: rgb(241, 193, 178);
  cursor: pointer;
}
.center{
  width:1200px;
}
.center .center_top{
  margin:0 0 70px 0;;
}
.center .center_cen {
  width:1200px;
  height: 300px;
  margin-bottom: 72px;
}
.center .center_cen .center_cen_left{
    float: left;
    padding: 22px 0 0 50px;
    margin-left:56px;
}

.center .center_cen .center_cen_right{
  float: left;
  margin:124px 0 0 184px;
}
.center .center_cen .center_cen_right rig{
  float: left;
}
.center_cen .center_cen_right div{
  width: 162px;
  height: 32px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
.wrap .footer{
   width:1200px;
   margin:0 auto;
   margin-top: 82px;
   letter-spacing: 1px;
 }
 .footer .foot_left{
   float:left;
 }
 .footer .foot_left h2{
   margin-bottom: 24px;
 }
  .footer .foot_left i{
    font-style:normal;
    font-weight:800;
    margin-bottom: 12px;
    display: inline-block;
  }
  .footer .foot_left p{
    font-size: 20px;
    color: rgb(1, 1, 1);
  }
   .foot_right{
    float: right;
    width:718px;
    margin-top: 50px;
    margin-left: 68px;
   }
 .foot_right p:first-child{
     font-size: 36px;
     color: rgb(25, 25, 25);
     margin-bottom: 10px;

  }
  .foot_right p:nth-child(2){
     font-size: 24px;
    color: rgb(25, 25, 25);
    margin-bottom: 42px;
  }
    .foot_right span{
     font-size: 20px;
     color: rgb(25, 25, 25)
   }
  .footer .foot_bottom{
     text-align:center;
  }
  .footer .foot_bottom p{
      display: inline-block;
      margin:24px 0 38px 0;
  }
.line{
    width: 100%;
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-top: 82px;
  }

</style>

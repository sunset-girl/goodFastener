<template>
<div class="app">
   <div class="wrap">
    <div class="container">
      <topper></topper>
      <div class="clear"></div>
      <div class="center">
        <div class="center_top">
           <el-carousel :interval="4000" arrow="always" :height="imgHeight">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <el-row>
                <el-col><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
              </el-row>
            </el-carousel-item>
         </el-carousel>
        </div>
        <div class="center_cen">
          <div class="center_cen_left">
            <div id="colee" style="overflow:hidden;height:1113px;width:254px;border:1px solid white;">
            <div id="colee1">
                <ul>
                    <li><img src="./image/about_us1.png"></li>
                    <li><img src="./image/about_us2.png"></li>
                    <li><img src="./image/about_us3.png"></li>
                    <li><img src="./image/about_us4.png"></li>
                    <li><img src="./image/about_us1.png"></li>
                    <li><img src="./image/about_us2.png"></li>
                    <li><img src="./image/about_us3.png"></li>
                    <li><img src="./image/about_us4.png"></li>
                  </ul>
            </div>
            <div id="colee2"></div>
        </div>
          </div>
          <div class="center_cen_right">
            <div class="cen_right_top">
                <h2>{{$t("message.About.A_1")}}</h2>
                <p>{{$t("message.About.A_2")}}。</p>
            </div>
            <div class="cen_right_bottom">
                <ul>
                  <li><h2>{{$t("message.About.A_3")}}</h2></li>
                  <li><h3>2017.11</h3><p>{{$t("message.About.A_4")}}</p></li>
                  <li><h3>2018.04</h3><p>{{$t("message.About.A_5")}}</p></li>
                  <li><h3>2018.05</h3><p>{{$t("message.About.A_6")}}</p></li>
                  <li>
                      <h3>2018.06</h3>
                      <p>{{$t("message.About.A_7")}}</p>
                  </li>
                  <li><h3>2018.07</h3><p>{{$t("message.About.A_10")}}</p></li>
                  <li>
                      <h3>2018.09</h3>
                      <p>{{$t("message.About.A_8")}}</p>
                  </li>
                  <li>
                      <h3>2018.11</h3>
                      <p>{{$t("message.About.A_9")}}</p>
                  </li>
                </ul>
            </div>
          </div>
        </div>
       <!-- ///这里是团队介绍的地址 -->
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
        imgList: [
          {id: 0, idView: require('./image/banner_01.jpg')},
          {id: 1, name: '详情', idView: require('./image/banner_02.jpg')},
          {id: 2, idView: require('./image/banner_03.jpg')},
          {id: 3, idView: require('./image/banner_04_03.jpg')},
        ],
        imgHeight: '498px'
    }
  },
  components: {
    topper,
    bottom
  },
  created() {

  },
  mounted(){
    var speed=20;
    var colee2=document.getElementById("colee2");
    var colee1=document.getElementById("colee1");
    var colee=document.getElementById("colee");
    colee2.innerHTML=colee1.innerHTML; //克隆colee1为colee2
    function Marquee1(){
    //当滚动至colee1与colee2交界时
    if(colee2.offsetTop-colee.scrollTop<=0){
    colee.scrollTop-=colee1.offsetHeight; //colee跳到最顶端
    }else{
    colee.scrollTop++
    }
    }
    var MyMar1=setInterval(Marquee1,speed)//设置定时器
    //鼠标移上时清除定时器达到滚动停止的目的
    colee.onmouseover=function() {clearInterval(MyMar1)}
    //鼠标移开时重设定时器
    colee.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)}
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
    /* margin-bottom: -73px; */
    margin-bottom: 70px;
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
  margin:0 0 46px 0;;
}
.center .center_cen {
  width:1200px;
  height: 300px;
}
.center .center_cen .center_cen_left{
    float: left;
    background-image:url(./image/about_us1_top.png);
    background-repeat:no-repeat;
    padding: 48px 37px 0 32px;
    height: 1065px;
    overflow: hidden;
}
.center .center_cen .center_cen_right{
  float: left;
  margin-left: 50px;
  width:800px;
}
 .center_cen_right .cen_right_top{
   margin-bottom: 66px;
 }
 .center_cen_right .cen_right_top h2{
   margin-bottom:44px;
   font-size: 28px;
   color:rgb(25, 25, 25);
 }
 .center_cen .center_cen_right .cen_right_top p,
 .center .center_bottom p{
   display: inline-block;
   margin-bottom:10px;
   font-size: 16px;

 }
 .center_cen_right .cen_right_bottom li{
   margin-bottom: 50px;
   font-size: 16px;
 }
 .center_cen_right .cen_right_bottom li h2{
   font-size: 28px;
   color: rgb(25, 25, 25);
 }
  .center_cen_right .cen_right_bottom li h3{
     margin-bottom: 16px;
     font-size: 28px;
     color:rgb(1, 1, 1);
  }
  .center .center_bottom{
    width: 100%;
    text-align: center;
    margin:82px 0 163px 0;

  }
  .center .center_bottom h2{
    margin-bottom: 46px;
  }
  .center .center_bottom .center_wrap{
    border: 1px solid rgb(243, 243, 243);
  }
 .center_bottom .center_wrap .wrap_top{
   width:100%;
   height:306px;
   margin:0 auto;
 }
 .line{
    width: 100%;
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-top: 82px;
  }
  .el-pagination.is-background .btn-prev{
    display: none;
}
</style>
<style>

    html, body {
      position: relative;
      height: 100%;
    }
    .swiper-container {
      width: 1200px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;


      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

  .notice_active {
    float: left;
    width: 100%;  /*此高要等于父高*/
    padding: 0;
    overflow: hidden;
    position: relative;
}
</style>


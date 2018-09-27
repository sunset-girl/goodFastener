<template>
<div class="app">
   <div class="wrap">
    <div class="container">
      <topper v-on:childByValue="childByValue"></topper>
      <div class="clear"></div>
      <div class="center">
        <div class="center_top">
          <!-- <img src="../image/contact1.png"> -->
          <!-- <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div> -->
          <el-carousel :interval="4000" arrow="always" :height="imgHeight">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <el-row>
                <el-col><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
              </el-row>
            </el-carousel-item>
         </el-carousel>
        </div>
        <div class="center_cen">
           <!-- <div class="center_cen_left">
              <img src="../image/home_page1.png">
          </div> -->
          <!-- <div class="center_cen_right"> -->
              <div class="cen_change">
                 <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="imgs"><img src="../image/home_page1_1.png"></div>
                      <div class="fonts fonts1"><p>独立<i>/</i>Designer</p><p>因为不同，而在一起</p><span>Independent Designers</span></div>
                      <div><button class="nows" @click="independent()">{{$t("message.Home.H_11")}}</button></div>
                      </div>
                    <div class="swiper-slide">
                      <div class="imgs"><img src="../image/home_page1_2.png"></div>
                      <div class="fonts fonts2"><p>买手<i>/</i>Global</p><p>你喜欢的，我绝不放过</p><span>Global fashion buyers</span></div>
                      <div><button class="nows" @click="worldwide()">{{$t("message.Home.H_11")}}</button></div>
                    </div>
                    <div class="swiper-slide">
                      <div class="imgs"><img src="../image/home_page1_3.png"></div>
                      <div class="fonts fonts3"><p>甄选<i>/</i>Genuine</p><p>更加丰富，更加一致</p><span>Elaborately selected Brands</span></div>
                      <div><button class="nows" @click="certified()">{{$t("message.Home.H_11")}}</button></div>
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"></div>
                </div>
              </div>
          <!-- </div> -->
          <div class="clear"></div>
          <div class="center_cen_bottom">
              <img src="../image/home_page3.png">
              <img class="relatives" :src="imgas">
              <img src="../image/home_page5.png">
              <div class="bottom_top">
                  <p>{{$t("message.Home.H_1")}}</p>
                  <button>{{$t("message.Home.H_3")}}</button>
                  <button>{{$t("message.Home.H_4")}}</button>
              </div>
          </div>
      </div>
       <div class="clear"></div>
        <div class="center_bottom">
            <div class="centers">
              <span>{{$t("message.Home.H_2")}}</span>
              <ul>
                <li><img src="../image/home_page6.png"></li>
                <li><img src="../image/home_page7.png"></li>
                <li><img src="../image/home_page8.png"></li>
                <li class="disp"><img src="../image/home_page9.png"></li>
                <li><img src="../image/home_page10.png"></li>
                <li class="diff"><img src="../image/home_page11.png"></li>
                <li><img src="../image/home_page12.png"></li>
                <li><img src="../image/home_page13.png"></li>
              </ul>
            </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
   </div>
    <div class="line"></div>
      <bottom></bottom>
   </div>
</template>
<script>
import topper from '../../components/topper'
import bottom from '../../components/bottom'
export default {
  data() {
    return {
       imgList: [
          {id: 0, idView: require('../image/banner_01.jpg')},
          {id: 1, name: '详情', idView: require('../image/banner_02.jpg')},
          {id: 2, idView: require('../image/banner_03.jpg')},
          {id: 3, idView: require('../image/banner_04_03.jpg')},
        ],
        imgHeight: '498px',
        imgas: '',
    }
  },
  watch:{
    // this.imgHeight = '620px'
    // window.onresize = function temp() {
    // // 通过点语法获取img的height属性值
    // that.imgHeight = `${that.$refs.imgHeight['0'].height}px`

  },
  components: {
    topper,
    bottom
  },
  mounted(){
     var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
      },
       spaceBetween: 30,
       loop: true,
       centeredSlides: true,
       autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  },
  created() {
    // let url = sessionStorage.getItem('imgs') || '../image/home_page4.png'
    // console.log(url)
    // this.imgas = require(url)
    if(!sessionStorage.getItem('imgs')){
      this.imgas = require('../image/home_page4_en.png')
      console.log("xixihehahashizhi")
    }
    if ( sessionStorage.getItem('imgs') == 1){
      this.imgas = require('../image/home_page4.png')
      console.log("yoyo")
    }

    if ( sessionStorage.getItem('imgs') == 2){
      this.imgas = require('../image/home_page4_en.png')
    }
    this.childByValue()
  },
  methods: {
    certified(){
      this.$router.push({
          path:'/certified'
      })
    },
    independent(){
      this.$router.push({
          path:'/independent'
      })
    },
     worldwide(){
      this.$router.push({
          path:'/worldwide'
      })
    },
     childByValue: function (childValue) {
        // childValue就是子组件传过来的值
        this.name = childValue
        if(this.name == 0){
          this.imgas = require('../image/home_page4.png')
          sessionStorage.setItem('imgs','1')
        }
        if(this.name == 1){
           this.imgas = require('../image/home_page4_en.png')
            sessionStorage.setItem('imgs','2')
        }
      }
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
    margin-bottom: 74px;
    width: 1200px;
    margin: 0 auto;
}

.center{
  width:1200px;
}
.center .center_top{
  margin:0 0 58px 0;;
}
.center .center_cen {
  width:1200px;
  text-align: center;
}
.center .center_cen .center_cen_left{
    float: left;
    padding: 0 37px 0 56px;
    margin-left:56px;
}

.center .center_cen .center_cen_right{
  float: right;
  margin:0 144px 0 0px;
}
.center .center_cen .center_cen_right .cen_change{
  width: 342px;
}
.center_cen button{
    padding: 12px 22px;
    background: #000;
    border: 0;
    color: #fff;
    font-size: 17px;
    display: block;
    margin: 150px 0 0 -220px;
    cursor: pointer;
}
.center_cen button:hover{
  box-shadow: 0px 8px 10px #888888;
}
.center_cen button.nows{
  margin: 270px 0 0 -224px;
}
.center_cen .center_cen_bottom{
    width:1200px;
}
.center_cen .center_cen_bottom .bottom_top{
    width: 538px;
    margin: 0 auto;
    margin-top:126px;
}
.center_cen_bottom .bottom_top p{
     font-size: 22px;
    color: rgb(1, 1, 1);
    font-weight: 500;
}
.center_cen_bottom .bottom_top button{
    padding: 14px 46px;
    background: #000;
    border: 0;
    color: #fff;
    font-size: 17px;
    display: inline-block;
    margin: 36px 0 14px 24px;
}
.center_cen_bottom .bottom_top button:hover{
    cursor: pointer;
    background: rgb(193, 194, 194);
}
.center_cen_bottom .relatives{
  position: relative;
    top: 100px;
}
 .center .center_bottom{
    width: 100%;
    text-align: center;
    margin:130px 0 24px 0;

  }
  .center .center_bottom span{
    font-size:38px;
    color: rgb(1, 1, 1);
    display: inline-block;
    margin-bottom: 62px;
  }
    .center .center_bottom ul li{
      width: 282px;
      height: 188px;
      float: left;
      margin: 7px;
      border: 1px solid rgb(226, 226, 226);
    }
    .center .center_bottom ul li{
      height: 184px;;
    }
    /* .center .center_bottom ul li:nth-child(3),
    .center .center_bottom ul li:nth-child(8)
    {
      height: 157px;
      padding-top: 30px;
    }
    .center .center_bottom ul li:nth-child(2){
      height: 172px;
      padding-top: 15px;
    }

    .center .center_bottom ul li:nth-child(5){
          padding-top: 38px;
          height: 150px;
    }
    .center .center_bottom ul li:nth-child(6){
    }
     .center .center_bottom ul li:nth-child(7){
      padding-top: 22px;
      height: 166px;
     } */


  .line{
    width: 100%;
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-top: 82px;
  }

</style>
<style>
 html, body {
      position: relative;
      height: 100%;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-container .imgs{
      width: 410px;
      height: 455px;
      margin-left: -92px;
    }
    .swiper-container img:hover{
      cursor: pointer;
      width: 410px;
      height: 455px;
    }
    .swiper-slide {
      text-align: left;
      font-size: 18px;
      background: #fff;
      width: 1200px !important;

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
    .swiper-pagination-bullet {
      width: 72px;
      /* height: 12px; */
      height: 3px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: rgb(240, 240, 240);

    }
    .swiper-pagination-bullet-active {
      color:#fff;
      background: rgb(0, 0, 0)
    }
    .swiper-pagination-bullet:first-child{
      border-top-left-radius:20% !important;
      border-bottom-left-radius:20% !important;
      border-top-right-radius:0% !important;
      border-bottom-right-radius:0% !important;
    }
     .swiper-pagination-bullet:last-child{
      border-top-right-radius:20% !important;
      border-bottom-right-radius:20% !important;
      border-top-left-radius:0% !important;
      border-bottom-left-radius:0% !important;
    }
    .swiper-pagination-bullet:nth-child(2){
      border-radius:0 !important;
    }
    .swiper-container{
       width: 1200px !important;
    }
    .swiper-container img:nth-child(2){
      margin-left:130px;
      margin-top: -130px;
    }
    .swiper-container img:nth-child(1){
      /* margin-left:-46px;
      margin-right:180px; */
      /* margin-left:-98px; */
    }
    .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0;
    }

    /* 首页轮播 */
     .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 172px;
    left: 220px;
    width: 100%;
  }
  .swiper-wrapper .fonts{
    text-align:center;
    margin-left:115px;
    margin-top:-145px;
  }
  .swiper-wrapper .fonts1{
    width: 352px;
    height: 139px;
  }
   .swiper-wrapper .fonts2{
    width: 342px;
    height: 137px;
  }
    .swiper-wrapper .fonts3{
    width: 362px;
    height: 139px;
  }
  .swiper-wrapper .fonts p:nth-child(1){
    font-size:38px;
  }
  .swiper-wrapper .fonts p i{
    color: rgb(198, 217, 214);
    font-style:normal;
    margin-left: 8px;
    margin-right: 4px;
  }
   .swiper-wrapper .fonts p:nth-child(2){
    font-size: 20px;
    padding: 6px 0 26px 0;
    margin: 0;
  }
   .swiper-wrapper .fonts span{
    font-size:20px;
  }
</style>

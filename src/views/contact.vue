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
              <h1>{{$t("message.Contact.C_1")}}</h1>
              <div> <img src="./image/e_mail.png" alt=""><span> E-mail: contact@buttonupup.com</span></div>
              <div> <img src="./image/qiu.png" alt=""> <span>{{$t("message.Contact.C_2")}}</span></div>
              <div> <img src="./image/weibo.png" alt=""> <span>{{$t("message.Contact.C_3")}}</span> </div>
              <!-- <div>电    话：www.buttonupup.com</div> -->
          </div>
         <div class="foot_right">
              <div class="f_left">
                 <img src="../views/image/footer.png">
                 <p>{{$t("message.Contact.C_4")}}</p>
              </div>
              <div class="f_right">
                 <img src="../views/image/kefu.png">
                <p>{{$t("message.Contact.C_5")}}</p>
              </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="center_bottom">
              <div class="reds dis1">
                  <img src="./image/contact4.png">
                  <p>{{$t("message.Contact.C_8")}}</p>
              </div>
              <div class="reds dis2">
                  <img src="./image/contact4.png">
                  <p>{{$t("message.Contact.C_11")}}</p>
              </div>
              <div class="reds dis3">
                  <img src="./image/contact4.png">
                  <p>{{$t("message.Contact.C_12")}}</p>
              </div>
              <div class="reds dis4">
                  <img src="./image/contact4.png">
                  <p>{{$t("message.Contact.C_7")}}</p>
              </div>
              <div class="reds dis5">
                  <img src="./image/contact4.png">
                  <p>{{$t("message.Contact.C_10")}}</p>
              </div>
              <div class="reds dis6">
                  <img src="./image/contact4.png">
                  <p>{{$t("message.Contact.C_6")}}</p>
              </div>
              <div class="reds dis7">
                  <img src="./image/contact4.png">
                  <p>{{$t("message.Contact.C_9")}}</p>
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
}
.center .center_cen .center_cen_left{
    float: left;
    padding: 0 170px 0 32px;
    margin-left:56px;

}
.center .center_cen .center_cen_left h1{
  font-weight: 400;
  margin-bottom: 32px;
  letter-spacing: -1px;
}
.center .center_cen .center_cen_left div{
    padding: 23px 64px 23px 44px;
    border: 1px solid rgb(238, 238, 238);
    margin-bottom: 12px;
    font-size: 26px;
}
.center .center_cen .center_cen_left div img {
    vertical-align: middle;
    margin-top: -5px;
}
.center .center_cen .center_cen_left div img:first-child{
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
  .center .center_bottom{
    width: 100%;
    text-align: center;
    margin:82px 0 128px 0;
    background: url(./image/contact3.png) no-repeat 100% 100%;
    height: 535px;
    position: relative;
    cursor: pointer;
    /* background-size: contain; */
  }
  /* .center .center_bottom:hover{
     background-size: 100%;
  } */
  .center .center_bottom .reds img:hover{
     width: 20px;
     height: 20px;
  }
  .center .center_bottom .reds p{
    /* margin-top: 30px; */
  }
  .center .center_bottom .dis1{
    width: 310px;
    position:absolute;
    left: 68%;
    top: 41%;

  }
  .center .center_bottom .dis1 p{
    left: -4%;
    margin-top: -2px;
    width: 134px;
    text-align: right;

  }
  .center .center_bottom .dis2{
    position:absolute;
    width: 50px;
    left: 82.8%;
    top: 30%;
  }
  .center .center_bottom .dis2 p{
    left: 73%;

  }
  .center .center_bottom .dis3{
    position:absolute;
    width: 50px;
    left: 85.8%;
    top: 21%;
  }
  .center .center_bottom .dis3 img{
    left:14%;
  }
  .center .center_bottom .dis4{
    width: 33px;
    position: absolute;
    left: 48.8%;
    top: 18%;
  }
  .center .center_bottom .dis4 img{
    left:22%;
  }
  .center .center_bottom .dis5{
    position:absolute;
    width: 48px;
    left: 85%;
    top: 74%;
  }
  .center .center_bottom .dis5 p{
    left: 41px;
    width: 200px;
    text-align: left;
    margin-top: -4px;
  }
   .center .center_bottom .dis6{
    position:absolute;
    width: 48px;
    left: 13.5%;
    top: 28%;
  }
   .center .center_bottom .dis6 p{
    width: 42px;
    position: absolute;
    left: 61.5%;
    top: 36%;
  }
  .center .center_bottom .dis7{
    position:absolute;
    width: 48px;
    left: 77.5%;
    top: 44%;
  }
   .center .center_bottom .dis7 p{
    width: 42px;
    position: absolute;
    left: 77.5%;
    top: 36%;
  }
  /* .center .center_bottom .dis8{
    position:absolute;
    width: 48px;
    left: 11.5%;
    top: 65%;
  }
   .center .center_bottom .dis8 p{
    width: 42px;
    position: absolute;
    left: 16.5%;
    top: 36%;
  } */
  .center .center_bottom img{
    position: absolute;
    top: 72%;
    left: 40%;
  }
  .center .center_bottom p{
    position: absolute;
    top: 82%;
    left: 25px;
    color: rgb(1, 1, 1);
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
   .footer .foot_right{
     float:right
   }
   .footer .foot_right div{
     text-align: center;
     color:rgb(72, 72, 72);
     font-weight: 600;
     margin-top: 6px;
   }
  .footer .foot_right p{
      font-size:20px;
      font-weight:600;
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
    .foot_right{
    float:left
  }
   .foot_right div{
    text-align: center;
    color:rgb(72, 72, 72);
    font-weight: 600;
    margin-top: 126px;
  }
  .foot_right .f_right,
  .foot_right .f_left
 {
     float: right;
 }
 .foot_right .f_right img{
   padding:7px;
   border: 1px solid rgb(236, 236, 236);
 }
  .foot_right .f_left{
   margin-left:32px;
 }
 .foot_right p{
   margin:0;
   font-size: 12px;
   font-weight: 400;
   width: 126px;
 }
</style>

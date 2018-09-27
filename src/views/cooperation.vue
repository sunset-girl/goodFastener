<template>
<div class="app">
   <div class="wrap">
    <div class="container">
        <topper></topper>
      <div class="clear"></div>
      <div class="center">
        <div class="center_cen">
          <div class="center_cen_left">
              <img src="./image/cooperate1.jpg">
          </div>
          <div class="center_cen_right">
              <p>{{$t("message.Cooperation.C_1")}}</p>
              <dl>
                <dt>{{$t("message.Cooperation.C_2")}}</dt>
                <dd>{{$t("message.Cooperation.C_3")}}</dd>
              </dl>
          </div>
          <div class="clear"></div>
          <div class="center_cen_bottom">
              <ul>
                <li class="cen cen_bottom1" id="cen1"><img src="./image/cooperate2.png"><p class="all_buys">{{$t("message.Cooperation.C_4")}}</p><div class="box"><img src="./image/cooperate5.png"><p>{{$t("message.Cooperation.C_6")}}</p></div></li>
                <li class="cen cen_bottom2" id="cen2"><img src="./image/cooperate3.png"><p class="all_buys">{{$t("message.Cooperation.C_5")}}</p><div class="box"><img src="./image/cooperate5.png"><p>{{$t("message.Cooperation.C_6")}}</p></div></li>
                <li class="cen cen_bottom3" id="cen3"><img src="./image/cooperate4.png"><p class="all_buys">{{$t("message.Cooperation.C_7")}}</p><div class="box"><img src="./image/cooperate5.png"><p>{{$t("message.Cooperation.C_6")}}</p></div></li>
              </ul>
          </div>
        </div>
        <div class="clear"></div>
        <div class="center_bottom">
              <span>{{$t("message.Cooperation.C_8")}}</span>
              <ul class="flow_path">
                <li><p><span>1</span> {{$t("message.Cooperation.C_9")}}</p>
                    <dl>
                      <dt>{{$t("message.Cooperation.C_13")}}</dt>
                        <!-- <dd>．阅读入驻详情</dd>
                        <dd>．准备入驻材料</dd>
                        <dd>．提交入驻资料</dd>
                        <dd class="kongs">  (店铺类型/品牌、品牌信息、</dd>
                        <dd class="kongs">  店铺命名)</dd>
                        <dd>．提交审核</dd> -->
                    </dl>
                </li>
                <li><p><span>2</span> {{$t("message.Cooperation.C_10")}}</p>
                    <dl>
                      <dt>{{$t("message.Cooperation.C_14")}}</dt>
                        <!-- <dd>．品牌/商户评估</dd>
                        <dd>．资质初审</dd>
                        <dd>．资质复审</dd> -->
                    </dl>
                </li>
                <li><p><span>3</span> {{$t("message.Cooperation.C_11")}}</p>
                    <dl>
                        <dt>{{$t("message.Cooperation.C_15")}}</dt>
                        <!-- <dd>．签署协议</dd>
                        <dd>．完善店铺信息</dd>
                        <dd>．缴纳保证金和管理费</dd> -->
                    </dl>
                </li>
                <li><p><span>4</span> {{$t("message.Cooperation.C_12")}}</p>
                    <dl>
                      <dt>{{$t("message.Cooperation.C_16")}}</dt>
                        <!-- <dd>．激活商家账号</dd>
                        <dd>．发布商品</dd>
                        <dd>．装修店铺</dd>
                        <dd>．店铺正式上线</dd> -->
                    </dl>
                </li>
              </ul>
               <div class="clear"></div>
              <div>
                   <p>{{$t("message.Cooperation.C_17")}}</p>
                   <p>{{$t("message.Cooperation.C_18")}}</p>
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

    }
  },
  components: {
    topper,
    bottom
  },
  created() {

  },
  mounted(){
    // var len = document.getElementsByClassName("boxs").length;
    // for(var i=0; i<len; i++){
    //   document.getElementsByClassName("boxs")[i].onmouseover = function(){
    //     console.log(i)
    //   }
    // // }
        $(".cen").on({
					mouseover : function(){
            $(this).addClass("paddings");
            $(this).find('.box').show()
					} ,
					mouseout : function(){
            $(this).removeClass("paddings");
						$(this).find('.box').hide()
					}
				}) ;

  },
  methods: {

  }

}

</script>
<style lang="scss" scoped>

*{
    margin:0;
    padding:0;

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
  letter-spacing: 2px;
}
.top .right ul li:hover,
.active{
  color: rgb(241, 193, 178);
  cursor: pointer;
}
.center{
  width:1200px;
}
.center .center_cen {
  width:1200px;
}
.center .center_cen .center_cen_left{
    float: left;
}
.center .center_cen .center_cen_left img{
  width: 771px;
  height: 550px;
}
.center .center_cen .center_cen_right{
  float: right;
  width:352px;
  margin-top: 106px;
}
.center .center_cen .center_cen_right p{
    font-size: 42px;
    color: rgb(25, 25, 25);
}
.center_cen .center_cen_right dt{
    padding: 16px 0 46px 0;
    font-size: 18px;
    color: rgb(25, 25, 25);

}
.center_cen .center_cen_right dd{
    font-size: 14px;
    display: inline-block;
    margin-bottom: 2px;
    color: rgb(80, 80, 80);
}
.center_cen .center_cen_bottom{
    width:1200px;
    height: 540px;
}
.center_cen .center_cen_bottom .box{
    display: none;
    padding-bottom:32px;
}
.paddings{
    margin-top: -45px !important;
}
.center_cen .center_cen_bottom ul li{
  float: left;
  margin-right: 50px;
}
.center_cen .center_cen_bottom .cen_bottom1{
  margin-left:50px;
}
.center_cen .center_cen_bottom .cen{
    position: relative;
    top: 88px;
    width: 330px;
    text-align: center;
    border: 1px solid rgb(226, 226, 226);
}

.center_cen_bottom .cen p{
    font-size: 18px;
}
.center_cen_bottom .cen p.all_buys{
   font-size: 20px;
   color: rgb(1, 1, 1);
   letter-spacing: 2px;
   margin-bottom: 48px;
}
.center_cen .center_cen_bottom .cen{
    width: 330px;
    text-align: center;
    border:1px solid rgb(226, 226, 226);
    margin-top: 50px;
}
.center_cen_bottom .cen img{
    margin-top:38px;
}
.center_cen_bottom .cen .box img{
  margin-top:0;
}
.center .center_bottom{
    width: 100%;
    text-align: left;
    margin:0 0 -13px 0;

  }
  .center .center_bottom ul{
    width: 1200px;
    height: 178px;
  }
  .center .center_bottom span{
    font-size:28px;
    color: rgb(1, 1, 1);
    display: inline-block;
    margin-bottom: 44px;
    letter-spacing: 4px;
    text-align: center;
  }
    .center .center_bottom ul li{
      width: 284px;
      float: left;
      margin: 0 12px 12px 0;
      border: 1px solid rgb(226, 226, 226);
      padding: 18px 0 20px 0;
      text-align: center;
    }
    .center .center_bottom .flow_path span{
      font-size: 40px;
      font-weight: 500;
      display: inline-block;
      margin:12px 0 0 0;
    }
    .center .center_bottom .flow_path p{
      font-size: 18px;
    }
    .center .center_bottom .flow_path dt{
      font-size: 20px;
      color: rgb(237, 176, 157);
      display: inline-block;
      margin: 6px 0 22px 0;
    }
    .center .center_bottom .flow_path dd{
      font-size: 15px;
      font-weight: 500;
      color: rgb(58, 58, 58);
      margin:0 0 6px 36px;
    }
    .center .center_bottom .flow_path .kongs{
      margin-left: 48px;
    }
    .center .center_bottom div{
      width: 1200px;
      text-align: center;
    }
    .center .center_bottom div p{
      font-size: 20px;
      color: rgb(1, 1, 1);
      margin-bottom: 6px;
      letter-spacing: 2px;
    }
    .center .center_bottom div p i{
      font-style: normal;
      color: rgb(237, 176, 157);

    }
.line{
    width: 100%;
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-top: 82px;
  }
</style>

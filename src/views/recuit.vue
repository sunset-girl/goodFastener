<template>
<div class="app">
   <div class="wrap">
    <div class="container">
      <topper></topper>
      <div class="center">
      </div>
       <div class="clear"></div>
    </div>
    </div>
    <div class="pos"><p class="positions">{{$t("message.Careers.C_1")}}</p></div>
    <div class="lines"></div>
    <div class="containers">
       <div class="centers">
         <div>
           <p>{{$t("message.Careers.C_2")}}</p>
           <li> <span></span><p>{{$t("message.Careers.C_3")}}</p></li>
         </div>
         <div>
           <p>{{$t("message.Careers.C_4")}}</p>
           <li> <span></span> <p>{{$t("message.Careers.C_5")}}</p></li>
         </div>
         <div>
           <p>{{$t("message.Careers.C_6")}}</p>
           <li> <span></span> <p>{{$t("message.Careers.C_7")}}</p></li>
         </div>
         <div>
           <p>{{$t("message.Careers.C_8")}}</p>
           <li> <span></span> <p>{{$t("message.Careers.C_9")}}</p></li>
         </div>
         <div class="take_part">
           <p>{{$t("message.Careers.C_10")}}</p>
           <p> <img src="./image/e_mail.png" alt=""> Email：franceswang@buttonupup.com</p>
         </div>
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
      message:[],
      count: 1,
      size:6,
      page:1,
      currentPages:1,
      path:'',
      lang: ""
    }
  },
  components: {
    topper,
    bottom
  },
  created() {
    this.newlist()
  },
  methods: {
    //获取当前页码
      handleCurrentChange(val) {
      this.page = val
      this.newlist()
    },
      //最新资讯
    newlist(){
      let url = "//niukou.adminapi.chengmikeji.com/index/article/newlist"
       if(sessionStorage.getItem("Thelangs") == 1){
        this.lang = "en"

      }
      else{
        this.lang = "cn"
      }
      console.log(this.lang)
      let data = {
        page: this.page,
        size: this.size,
        lang: this.lang
      }
      this.$http.post(url,data).then((res)=>{
        this.message = res.data.data
        this.count = res.data.count


      })
    },
     article(obj){
      console.log(obj)
      this.$router.push({
          path:'/article',
          query: {
          titles: obj.titles,
          content: obj.content
          }
      })
    },
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
    margin-bottom: 28px;
    width: 1200px;
    margin: 0 auto;
}
.containers{
    display: flex;
    justify-content: center;
    align-items: center
}
.containers .centers{
  width: 1200px;

}
.containers .centers div{
  padding:60px 0;
  border-bottom:1px solid rgb(208, 208, 208);
}
.containers .centers div.take_part{
  text-align: center;
  border:1px solid rgb(208, 208, 208);
  margin: 50px 0;
}
.containers .centers div.take_part img{
  margin-right:18px;
}
.containers .centers div li{
  list-style: none;
  font-size: 20px;
}
.containers .centers div li span{
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgb(184, 184, 184);
    margin-right:12px;
    float: left;
}

.containers .centers div.take_part p:nth-child(1){
  font-size: 28px;
  color: rgb(25, 25, 25)
}
.containers .centers div.take_part p:nth-child(2){
  font-size: 24px;
}
.containers .centers p:first-child{
  font-size: 28px;
  padding: 0 0 20px 22px ;
}
.containers .centers div li p{
  width: 1125px;
  height: 50px;
  float: left;
  margin-top: -6px;
}
.containers .center li{
  font-size:20px;
  color: rgb(25, 25, 25);
}
 .top .left{
   margin:28px 0;
   float: left
}
.top .right{
  margin:13px 0;
  float: right;
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
  box-shadow: 0 5px 8px rgb(226, 226, 226);
}
.center{
  width:1200px;
}
.center .center_top{
  margin:0 0 70px 0;;
}
.center .center_cen {
  width:1200px;
}
.center .center_cen .center_cen_left{
    float: left;
    text-align: left;
}
.center .center_cen .center_cen_left ul li,
.center .center_cen .center_cen_right ul li{
  height: 152px;
  margin-bottom: 40px;
  border: 1px solid rgb(226, 226, 226);
  float: left;
  margin-right: 18px;
  padding-bottom: 8px;
}
.center .center_cen .center_cen_left ul li:hover{
      border: 1px solid rgb(237, 176, 157);
      cursor: pointer;
      box-shadow: 0 5px 8px rgb(226, 226, 226);
    }
.center .center_cen .center_cen_left .left
{
    float: left;
    width: 260px;
    text-align: left;
    padding-left: 30px;
    padding-right: 290px;
    position: relative;

}
.center .center_cen .center_cen_left .left img{
    width:207px;
    height:160px;
    position: absolute;
    top: 0;
    right: 0;
}
.center .center_cen .center_cen_left h2,
.center .center_cen .center_cen_right h2{
    margin-bottom: 24px;
    letter-spacing: 2px;
}
.center .center_cen .center_cen_left h3.leave{
   overflow:hidden;
   text-overflow:ellipsis;
   white-space:nowrap;
   font-size: 20px;
   color: rgb(25, 25, 25);

}
.center_cen_left .left p:first-child,
.center_cen_right .left p:first-child{
  margin: 24px 0 18px 0;
  display: inline-block;
  font-size: 14px;
  color: rgb(141, 141, 141);
}
.center_cen_left .left p.sec,
.center_cen_right .left p.sec{
  margin: 0 0 18px 0;
  display: inline-block;
  font-size: 14px;
  letter-spacing: 2px;
}
.center_cen_left .left h3,
.center_cen_right .left h3{
  margin: 0 0 10px 0;
  letter-spacing: 2px;
}
.center_cen_left .left button,
.center_cen_right .left button{
    padding: 10px 50px;
    background: #000;
    border: 0;
    color: #fff;
    font-size: 17px;
    display: block;
    margin: 16px 0 14px 24px;
}
.center .center_cen .center_cen_right{
    float: right;
    margin-top: 68px;
}
.center .center_cen .center_cen_bottom{
    float:right;
    padding:48px 0;
}
 .wrap .footer{
   width:1200px;
   margin:0 auto;
  margin-top: 82px;

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
    font-weight: 600;
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
</style>
<style>
.el-pagination.is-background .el-pager{
  display: inline-block;
  margin:0;
  padding:0;
}
.el-pagination.is-background .el-pager li{
  float: left;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li{
    margin: 0 5px;
    color: #606266;
    min-width: 43px;
    min-height: 43px;
    line-height: 43px;
    border-radius: 2px;
    color: rgb(233, 233, 233);
    border: 1px solid rgb(233, 233, 233);
    font-size: 18px;
    background:#fff;
    list-style: none;
    text-align: center;
    cursor: pointer;
}
.el-pagination.is-background .el-pager li:not(.disabled).active,
.el-pagination.is-background .el-pager li:not(.disabled):hover  {
    background-color: white;
    color: rgb(58, 58, 58);
    border: 1px solid rgb(58, 58, 58);
    list-style: none;
    cursor: pointer;
}
.el-pagination.is-background .btn-next{
    /* background:url(./image/community_dian.png) no-repeat center; */
}
.el-pagination.is-background .el-pager{
   float:left;
}
.lines{
    width: 100%;
    border-bottom: 4px solid rgb(1, 1, 1);

  }
.line{
    width: 100%;
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-top: 82px;
  }
  .positions{
    font-size: 36px;
    color: rgb(25, 25, 25);
  }
  .el-pagination.is-background .btn-prev{
    display: none;
}
.pos{
  text-align:center;
  margin:48px 0 36px 0;
}
</style>

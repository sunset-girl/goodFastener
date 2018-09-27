<template>
<div class="app">
   <div class="wrap">
    <div class="container">
      <topper></topper>
      <div class="clear"></div>
      <div class="center">
        <div class="center_cen">
          <div class="center_cen_left">
              <h2>{{titles}}</h2>
              <div class="article" v-html="content">
                  <!-- {{content}} -->
              </div>
          </div>
        </div>
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
      titles:'',
      content:'',
      path:''
    }
  },
   watch:{
    '$router':(to,form)=>{
      this.path = this.$route.path
    }
  },
  components: {
    topper,
    bottom
  },
  created() {
    this.getParam()
    // this.path = this.$route.path
    this.detail()
  },
  methods: {
    getParam(){
      this.id = this.$route.query.id
      // this.titles = this.$route.query.titles
      // this.content = this.$route.query.content
    },
     //详情
    detail(){
      let url = "http://niukou.adminapi.chengmikeji.com/index/article/detail"
      let data = {
        id: this.id
      }
      this.$http.post(url,data).then((res)=>{
        this.content = res.data.data.content
        this.titles = res.data.data.titles
        console.log(res.data.data.content)
      })
    },

  }

}

</script>
<style scoped>
@import '../assets/css/header.css';
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
    width: 100%;
    text-align: center;
}
.center .center_cen .center_cen_left .article{
    width: 93%;
    padding: 40px;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    margin: 0;
    border:1px solid rgb(222, 222, 222);
    margin:40px 0;
    text-align: left;
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
    margin-top:-20px;
}
.line{
    width: 100%;
    border-bottom: 1px solid rgb(226, 226, 226);
    margin-top: 82px;
  }
  .el-pagination.is-background .btn-prev{
    display: none;
}
.active{
 color: rgb(241, 193, 178);
 cursor: pointer;
}
</style>

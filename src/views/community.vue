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
              <p>{{$t("message.Community.C_1")}}</p>
              <div class="div">
                <ul>
                  <li v-for="(obj,obj_index) in message" v-bind:key="obj_index" @click="article(obj)">
                    <div class="left">
                        <p>{{ obj.send_time }}</p>
                        <h3 class="leave">{{ obj.titles }}</h3>
                        <p class="sec">{{ obj.content }}</p>
                        <button>{{$t("message.Community.C_2")}}</button>
                        <!-- 这才是后端传过来的图片 -->
                        <img v-bind:src="obj.cover_img">
                        <!-- 这是临时的本地图片 -->
                        <!-- <img src="./image/community.png" alt=""> -->
                    </div>
                  </li>
                </ul>
              </div>
          </div>
          <div class="clear"></div>
          <div class="center_cen_bottom">
              <el-pagination
               @current-change="handleCurrentChange"
                :current-page="currentPages"
                background
                :page-size="size"
                layout="prev, pager, next"
                :total="count">
              </el-pagination>
              <!-- <el-pagination background layout="prev, pager, next" :total="1000">
              </el-pagination> -->
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
      message: [],
      count: 1,
      size:6,
      page:1,
      currentPages:1,
      imgList: [
         {id: 0, idView: require('./image/banner_01.jpg')},
          {id: 1, name: '详情', idView: require('./image/banner_02.jpg')},
          {id: 2, idView: require('./image/banner_03.jpg')},
          {id: 3, idView: require('./image/banner_04_03.jpg')},
      ],
      imgHeight: '498px',
      lang: ""
    }
  },
  components: {
      topper,
      bottom
  },
  created() {
    this.communitylist()
  },
  methods: {
    //获取当前页码
      handleCurrentChange(val) {
      this.page = val
      this.communitylist()
    },
    //社区精选
    communitylist(){
      let url = "//niukou.adminapi.chengmikeji.com/index/article/communitylist"
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
          id: obj.id,
          // titles: obj.titles,
          // content: obj.content
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
ul{
  float: left;
}
ul li{
  list-style: none;
}

.clear{
  clear: both;
}
.wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:66px;
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
  letter-spacing: 2px;
}
.center .center_cen .center_cen_left{
    float: left;
    text-align: left;

}
.center .center_cen .center_cen_left .div img{
    width:260px;
    height:240px;
    position: absolute;
    top: 0;
    right: 0;
}
.center .center_cen .center_cen_left ul li{
  width: 582px;
  margin-bottom: 40px;
  border: 1px solid rgb(226, 226, 226);
  text-align: left;
  float: left;
  margin-right: 12px;
}
.center .center_cen .center_cen_left ul li:hover{
  border:1px solid rgb(241, 193, 178);
  cursor: pointer;
  box-shadow: 5px 5px 8px rgb(226, 226, 226);
}
.center .center_cen .center_cen_left .left
{
  float: left;
  width:270px;
  height: 240px;
  padding-right:312px;
  position: relative;

}
/* .center_cen .center_cen_left .one{
    background:url(./image/community.png) no-repeat right;
} */
.center_cen .center_cen_left .two{
    background:url(./image/community1.png) no-repeat right;
}
.center_cen .center_cen_left .thr{
    background:url(./image/community2.png) no-repeat right;
}
.center .center_cen .center_cen_left p:first-child{
    margin-bottom: 8px;
    font-size: 28px;
    height: 37px;
    letter-spacing: -1px;
}
.center_cen_left .left p:first-child{
  margin: 22px 0 18px 24px;
  display: inline-block;
  font-size: 14px;
}
.center_cen_left .left h3.leave{
   overflow:hidden;
   text-overflow:ellipsis;
   white-space:nowrap;
}
.center_cen_left .left p.sec{
  margin:0 0 18px 24px;
  display: inline-block;
  font-size: 14px;
}
.center_cen_left .left h3{
  margin: 0 0 10px 24px;
  font-size: 20px;
}
.center_cen_left .left button{
    padding: 10px 50px;
    background: #000;
    border: 0;
    color: #fff;
    font-size: 17px;
    display: block;
    margin: 16px 0 14px 24px;
    position: absolute;
    top: 164px;
    font-size: 20px;
}
.center_cen_left .left button:hover{
   cursor: pointer;
}
.center .center_cen .center_cen_bottom{
    float:right;
    padding:48px 0;
    margin:-26px 0 -58px 0;
    text-align: right;
}
.el-pagination.is-background .el-pager{
   float:left;
}
 .line{
    width: 100%;
    border-bottom: 1px solid rgb(226, 226, 226);
     margin-top: 82px;
  }
</style>
<style>

.el-pagination .is-background .el-pager{

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
.el-pagination.is-background .el-pager li:not(.disabled):hover
  {
    background-color: white;
    color: rgb(58, 58, 58);
    border: 1px solid rgb(58, 58, 58);
    list-style: none;
    cursor: pointer;
}
.el-pagination.is-background .btn-next{
     color:rgb(58, 58, 58);
     border: 1px solid rgb(58, 58, 58);
}
.el-pagination.is-background .btn-next:disabled{
      border: 1px solid rgb(233, 233, 233);
}
.el-pagination.is-background .btn-prev{
    display: none;
}
</style>


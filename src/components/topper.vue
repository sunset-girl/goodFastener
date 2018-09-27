<template>
    <div class="top">
        <div class="left">
           <img src="../views/image/top1.png">
        </div>
        <div class="right">
            <ul>
              <li @click="home" :class=" path == '/' ? 'active' : ''" >{{$t("message.title.title1")}}</li>
              <li @click="community" :class=" path == '/community' ? 'active' : ''">{{$t("message.title.title2")}}</li>
              <li @click="cooperation" :class=" path == '/cooperation' ? 'active' : ''">{{$t("message.title.title3")}}</li>
             <!-- <li @click="about" :class=" path == '/about' ? 'active' : ''">关于我们</li> -->
              <!-- <li>
                <el-select v-model="stattuima" :placeholder="$t('message.title.title4')" style="width: 104px;" @change="about" id="selects">
                  <el-option :label="item.name" :value="item.value" v-for="(item,stattuima_index) in stattuimaList" :key="stattuima_index"></el-option>
                </el-select>
             </li> -->
             <li class="li" :class=" path == '/news' ||  path == '/about'? 'active' : ''"  >
                {{messages}}
                <ul class="abuts" >
                  <li @click="about">{{$t('message.title.title8')}}</li>
                  <li @click="news">{{$t('message.title.title4')}}</li>
                </ul>
             </li>
             <!-- <li>
               <select  id =  "sel" >
                  <option  value = "1" >{{$t("message.title.title4")}}</option >
                  <option  value = "2"  selected = "selected" >{{$t("message.title.title8")}}</option >
               </select >
             </li> -->
              <!-- <li class="newss"  @click="news"  :class=" path == '/news' ? 'active' : ''" >新闻中心
                <ul>
                   <li class="aboutss" @click.native="about" :class=" path == '/about' ? 'active' : ''" >关于我们</li>
                </ul>
              </li> -->
              <!-- <li>
                  <select class="select" name="country-wrap" @change="about" v-model="about_value" :class=" path == '/about' ||  path == '/news' ? 'active' : ''">
                    <option class="opts" value="关于我们" :class=" path == '/about' ? 'active' : ''">关于我们</option>
                    <option class="opts" value="新闻中心" :class=" path == '/news' ? 'active' : ''">新闻中心</option>
                  </select>
              </li> -->
              <li @click="contact" :class=" path == '/contact' ? 'active' : ''" id="contacts">{{$t("message.title.title6")}}</li>
              <li @click="recuit" :class=" path == '/recuit' ? 'active' : ''">{{$t("message.title.title7")}}</li>
            </ul>
            <div class="changsLange">
                <!-- <el-select v-model="Thelangs" placeholder="中文版" style="width: 76px;" @change="changes">
                      <el-option :label="item.name" :value="item.value" v-for="(item,Thelangs_index) in langs" :key="Thelangs_index"></el-option>
                </el-select> -->
                <p @click="changeEdit" v-if="Thelangs == 1" id="Edit1">中文版</p>
                <p @click="changeEdit" v-if="Thelangs == 0" id="Edit2">English</p>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      path:'',
      about_value:'新闻中心',
      stattuima: "",
      messages: this.$t("message.title.title8"),
      // stattuimaList: [{
      //     value: 1,
      //     name: this.$t("message.title.title4")
      //   },
      //   {
      //     value: 0,
      //     name: this.$t("message.title.title8")
      //   }
      // ],
       Thelangs: sessionStorage.getItem('Thelangs') ? sessionStorage.getItem('Thelangs') : "1" ,
      // langs: [{
      //     value: "1",
      //     name: '中文版'
      //   },
      //   {
      //     value: "0",
      //     name: 'English'
      //   }
      // ]
    }
  },
  watch:{
    $route(to,from){
      this.path = this.$route.path
      if ( this.path == '/about'){
        this.messages = this.$t("message.title.title8")
      }
      if (  this.path == '/news' ){
         this.messages = this.$t("message.title.title4")
      }
    }
  },
  created(){
    this.path = this.$route.path
    if (  this.path == '/about'){
         this.messages = this.$t("message.title.title8")
      }
      if (  this.path == '/news' ){
          this.messages = this.$t("message.title.title4")
      }
    this.$emit('childByValue', this.Thelangs)

  },
  mounted(){
    // $(".newss").on({
		// 			mouseover : function(){
    //         $(this).find('.aboutss').show()
		// 			} ,
		// 			mouseout : function(){
    //         $(this).find('.aboutss').hide()
		// 			}
    //     }) ;
    // $('.aboutss').on('mouseover',function(){
    //   $(this).find('.newss').show()
    //    console.log(22)
    // })
  },
  methods: {
    changeEdit(){
    console.log(this.Thelangs)

     if(this.Thelangs == '1'){
      sessionStorage.setItem('Thelangs','0')
       this.Thelangs = "0"
      this.$i18n.locale = 'cn'
      document.getElementsByTagName("title")[0].innerText = 'Buttonup纽扣好物 | 一个小众时尚电商平台'
      $('meta[name="Description"]').attr('content','纽扣好物是一个小众时尚电商平台。集结全球独立设计师、品牌和奢品买手店，我们相信物有性格，有灵魂，小至一枚纽扣，都能表达与众不同的对立精神。')
      $('meta[name="Keywords"]').attr('content','Buttonup，Buttonupup,纽扣好物,奢侈品,全球购,海外购,独立设计师,生活家,海外品牌商')
      sessionStorage.setItem('title','Buttonup纽扣好物 | 一个小众时尚电商平台')
      sessionStorage.setItem('Description','纽扣好物是一个小众时尚电商平台。集结全球独立设计师、品牌和奢品买手店，我们相信物有性格，有灵魂，小至一枚纽扣，都能表达与众不同的对立精神。')
      sessionStorage.setItem('Keywords','Buttonup，Buttonupup,纽扣好物,奢侈品,全球购,海外购,独立设计师,生活家,海外品牌商')
       if ( this.path != '/news'){
        this.messages = this.$t("message.title.title8")
      }
      if (  this.path == '/news' ){
         this.messages = this.$t("message.title.title4")
      }
        this.$emit('childByValue', this.Thelangs)
      return false
     }


     if(this.Thelangs == '0'){
       sessionStorage.setItem('Thelangs','1')
       this.Thelangs = "1"
        this.$i18n.locale = 'en'
        document.getElementsByTagName("title")[0].innerText = 'Button Up.  A E-Commerce platform for creative goods and affordable luxury'
        $('meta[name="Description"]').attr('content','Button Up is a an E-Commerce platform for creative goods and affordable luxury. We gathering independent designers, brands and luxury goods buyers from all over the world. we believe that every merchandise we sell have unique characteristics and soul. As small as a button, can express a different spirit of independence.')
        $('meta[name="Keywords"]').attr('content','Buttonup, Buttonupup, Button up, luxury, affordable luxury, Global purchase, overseas purchase, independent designer, living expert, and overseas brands.')
        sessionStorage.setItem('title','Button Up.  A E-Commerce platform for creative goods and affordable luxury')
        sessionStorage.setItem('Description','Button Up is a an E-Commerce platform for creative goods and affordable luxury. We gathering independent designers, brands and luxury goods buyers from all over the world. we believe that every merchandise we sell have unique characteristics and soul. As small as a button, can express a different spirit of independence.')
        sessionStorage.setItem('Keywords','Buttonup, Buttonupup, Button up, luxury, affordable luxury, Global purchase, overseas purchase, independent designer, living expert, and overseas brands.')
         if ( this.path != '/news'){
        this.messages = this.$t("message.title.title8")
      }
      if (  this.path == '/news' ){
         this.messages = this.$t("message.title.title4")
      }
        this.$emit('childByValue', this.Thelangs)
        return false
     }
    },

    home(){
      this.$router.push({path:'/'})

    },
     community(){
      this.$router.push({path:'/community'})

    },
     cooperation(){
      this.$router.push({path:'/cooperation'})

    },
    // about(){
    //   this.path = this.$route.path
    //   if ( this.stattuima == "0" ){
    //     this.$router.push({path:'/about'})
    //      $("#selects").width(80);
    //      $('#contacts').css('marginLeft','36px')
    //     console.log( $("#selects").width())
    //     console.log("xixi")
    //   }
    //   if ( this.stattuima == "1" ){
    //      this.$router.push({path:'/news'})
    //   }
    // },
    // changes(){
    //   if( this.Thelangs == 0 ){
    //      this.$i18n.locale = 'cn'
    //      document.getElementsByTagName("title")[0].innerText = 'Buttonup纽扣好物 | 一个小众时尚电商平台'
    //      $('meta[name="Description"]').attr('content','纽扣好物是一个小众时尚电商平台。集结全球独立设计师、品牌和奢品买手店，我们相信物有性格，有灵魂，小至一枚纽扣，都能表达与众不同的对立精神。')
    //       $('meta[name="Keywords"]').attr('content','Buttonup，Buttonupup,纽扣好物,奢侈品,全球购,海外购,独立设计师,生活家,海外品牌商')
    //      sessionStorage.setItem('title','Buttonup纽扣好物 | 一个小众时尚电商平台')
    //      sessionStorage.setItem('Description','纽扣好物是一个小众时尚电商平台。集结全球独立设计师、品牌和奢品买手店，我们相信物有性格，有灵魂，小至一枚纽扣，都能表达与众不同的对立精神。')
    //      sessionStorage.setItem('Keywords','Buttonup，Buttonupup,纽扣好物,奢侈品,全球购,海外购,独立设计师,生活家,海外品牌商')
    //   }

    //   if( this.Thelangs == 1 ){
    //       this.$i18n.locale = 'en'
    //      document.getElementsByTagName("title")[0].innerText = 'Button Up.  A E-Commerce platform for creative goods and affordable luxury'
    //     $('meta[name="Description"]').attr('content','Button Up is a an E-Commerce platform for creative goods and affordable luxury. We gathering independent designers, brands and luxury goods buyers from all over the world. we believe that every merchandise we sell have unique characteristics and soul. As small as a button, can express a different spirit of independence.')
    //     $('meta[name="Keywords"]').attr('content','Buttonup, Buttonupup, Button up, luxury, affordable luxury, Global purchase, overseas purchase, independent designer, living expert, and overseas brands.')
    //       sessionStorage.setItem('title','Button Up.  A E-Commerce platform for creative goods and affordable luxury')
    //       sessionStorage.setItem('Description','Button Up is a an E-Commerce platform for creative goods and affordable luxury. We gathering independent designers, brands and luxury goods buyers from all over the world. we believe that every merchandise we sell have unique characteristics and soul. As small as a button, can express a different spirit of independence.')
    //       sessionStorage.setItem('Keywords','Buttonup, Buttonupup, Button up, luxury, affordable luxury, Global purchase, overseas purchase, independent designer, living expert, and overseas brands.')
    //   }
    //   this.stattuimaList = [{
    //       value: 0,
    //       name: this.$t("message.title.title4")
    //     },
    //     {
    //       value: 1,
    //       name: this.$t("message.title.title8")
    //     }
    //   ],
    //   sessionStorage.setItem("Thelangs",this.Thelangs);

    //   this.$emit('childByValue', this.Thelangs)
    // },

    news(){
      this.$router.push({path:'/news'})
      this.messages = this.$t("message.title.title4")

    },
     about(){
      this.$router.push({path:'/about'})
      this.messages = this.$t("message.title.title8")

    },
     contact(){
      this.$router.push({path:'/contact'})

    },
     recuit(){
      this.$router.push({path:'/recuit'})

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../assets/css/header.css';

  .select option{
    color: #000 !important;
  }
  select {
    border-radius: 0px;
    border-color: white;
    font-size:18px;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    padding:2px;
    outline:none;
}
select:hover{
  cursor: pointer;
}

select .opts{
  border:0;
}

</style>
<style>
.el-input__suffix{
  display: none !important;
}
input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #000000 !important;
        /* placeholder字体大小  */
        font-size: 18px;
        /* placeholder位置  */
        text-align: center;
    }
    .el-input__inner{
        color: rgb(239, 186, 172);
        font-size:18px;
        height: 23px;
        line-height:25px;
        padding:0;
        border: 1px solid #fff;
        text-align: center;

    }
    .el-select .el-input__inner:focus {
    border-color: #fff !important;
}
.el-input--suffix .el-input__inner{
  padding:0;
}
.el-input__inner:hover {
    border-color: #fff;
    color:rgb(239, 186, 172) !important;
}
.el-select-dropdown__item.selected {
    color: #000;
    font-size:17px;
    font-weight: 400;

}
.el-select-dropdown__item {
    font-size: 17px;
    width: 108px;
    height: 46px;
    text-align: center;
}
.el-select-dropdown{
  margin-left: -10px !important;
  left: 1631px;
  top: 24px;
}
.el-popper .popper__arrow, .el-popper .popper__arrow::after {
  display: none !important;
}
 .changsLange .el-input__inner{
   color: #000 !important;
 }
 .changsLange p{
   cursor: pointer;
 }
  /* .changsLange p#Edit2{
    display: none;
  } */
  #sel{
  appearance:none;
-moz-appearance:none;
-webkit-appearance:none;
}
*{
  padding:0;
  margin:0;
}
.li{
  position:relative;
  display: inline-block;
}
ul.abuts{
  list-style:none;
  position:absolute;
  left:50%;
  top:22px;
  transform:translate(-50%,0);
  color: #000;
  z-index: 10002;
  background: #fff;
}
.li:hover ul.abuts,li ul.abuts:hover{
   display:block;
   cursor: pointer;
}
li ul.abuts{
  width:102px;
  display:none;
  border: 1px solid rgb(240, 240, 240);
}
.right .li ul.abuts li{
  width:100%;
  text-align:center;
  display:block;
  margin:0;
  padding:6px 0;
}
.right .li ul.abuts li:hover{
  background:rgb(240, 240, 240)
}
</style>


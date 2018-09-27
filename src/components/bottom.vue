<template>
    <div class="footer">
      <div></div>
          <div class="foot_left">
              <p class="fir">{{$t("message.Bottom.B_1")}}</p>
              <p><i>E - mail:</i>contact@buttonupup.com</p>
              <p><i>{{$t("message.Bottom.B_8")}}:</i>400-926-0931</p>
              <p><i>{{$t("message.Bottom.B_2")}}</i>{{$t("message.Bottom.B_3")}}</p>
          </div>
          <div class="foot_right">
              <div class="f_left">
                <img src="../views/image/footer.png">
                <p>{{$t("message.Bottom.B_5")}}</p>

              </div>
              <div class="f_right">
                 <img src="../views/image/kefu.png">
                <p>{{$t("message.Bottom.B_4")}}</p>
              </div>
          </div>
          <div class="clear"></div>
          <div class="foot_bottom">
              <p>{{$t("message.Bottom.B_6")}}</p>
          </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/footer.css';
</style>

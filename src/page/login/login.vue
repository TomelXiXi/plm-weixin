<template>
  <div class="login">
    <div class="btn_box">
    <div class="result_div"></div>
      <button @click="submit" class="submit" type="button" name="button">登录</button>
    </div>
   </div>
</template>

<script>
  import {setCookie, getCookie, removeCookie} from 'src/config/cookie'
  import {baseUrl} from 'src/config/env'
  import {mapMutations} from 'vuex'
  import $ from 'jquery'

  export default {
    data(){
      return{
        name:'',
        password:'',
      }
    },
    //实例创建后调用
    created() {
        // `this` 指向 vm 实例
    },
    //定义函数
    methods:{
    	

        // 登录
        submit() {

$.ajax({
                url:'/Windchill/rfa/mgl/weixin/getData.jsp', //接口地址
                headers: {
                "Authorization": "Basic " + btoa("wcadmin" + ":" + "wcadmin")
            },

                timeout:10000,    //超时时间
                dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
                success: (msg)=>{         
                      console.log(msg)
                      console.log(this.$router)
                      this.$router.replace({ path: `/test` })

                     console.log("success"); 
                   },  
              
                error: () => {
console.log("error");
                }
              })
        }
    }
  }
</script>

<style lang="scss">
  @import 'src/style/mixin';

  .login{
    input::-webkit-input-placeholder {/* WebKit browsers */
        color:#9da0b0;
    }
    input:-moz-placeholder {/* Mozilla Firefox 4 to 18 */
        color:#9da0b0;
    }
    input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:#9da0b0;
    }
    input:-ms-input-placeholder { /* Internet Explorer 10+ */
        color:#9da0b0;
    }
    position: absolute;
    top:0;
    left:0;
    @include wh(100%,100%);
    min-height: 13.3rem;

    padding-top: 2.78rem;
    padding: 2.78rem 0.86rem 0;
    .logo{
      @include wh(1.21rem,1.11rem);
      margin-left:2.1rem;
    }
    .title{
      @include sc(0.44rem,#fff);
      text-align: center;
      line-height: 1rem;
      font-weight: 500;
    }
    .form{
      border-radius: 0.04rem;
      border: 1px solid #000;
      overflow: hidden;
      .input{
        position: relative;
        background: #dfe1ea;
        input{
          @include wh(100%,0.86rem);
          padding-left: 0.3rem;
        }
        &:first-child:after{
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 1px;
            border-bottom: 1px solid #c7c9d2;
            -webkit-transform-origin: 0 100%;
            transform-origin: 0 100%;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            z-index: 2;
        }
      }
    }
    .btn_box{
      padding-top: 0.3rem;
      button{
        @include wh(100%,0.7rem);
        margin-bottom: 0.2rem;
        border-radius: 0.04rem;
        font-weight: 500;
      }
      .submit{
        background: #e599a6;
        color: #fff;
        background: -webkit-linear-gradient(#eda8b4, #d27585);
        background: -o-linear-gradient(#eda8b4, #d27585);
        background: -moz-linear-gradient(#eda8b4, #d27585);
        background: linear-gradient(#eda8b4, #d27585);
      }
      .find_password{
        background: #343640;
        color: #9da0b0;
        border: 1px solid #000;
      }
    }
  }
</style>
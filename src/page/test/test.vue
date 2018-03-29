<template>
  <div class="login">
img 标签时: 
<img class="wc-preview-img" :src="url" v-for="(url, key) in list" :key="key" @click="$preview($event, list, key);test()">

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
        season:'',
        list:['/Windchill/wtcore/test/dist/img/headphoto.png','/Windchill/wtcore/test/dist/img/headerpic.png']
      }
    },
    //实例创建后调用
    created() {
        this.submit();
    },
    //定义函数
    methods:{


        // 登录
        submit() {
console.log('1111');
    },test(){
      console.log("method b");
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
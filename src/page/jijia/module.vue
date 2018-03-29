<template>
  <div class="login">
    <div class="logo">
      < img src="../../images/logo.png" alt="">
    </div>
    <div class="title">
      吉佳世济智慧冷链
    </div>
    <div class="form">
      <div class="input">
        <input v-model.trim="name" type="text" name="" placeholder="用户名" value="">
      </div>
      <div class="input">
        <input v-model.trim="password" type="password" name="" placeholder="密码" value="">
      </div>
    </div>
    <div class="btn_box">
      <button @click="submit" class="submit" type="button" name="button">登录</button>
      <button class="find_password" type="button" name="button">忘记密码</button>
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
        ...mapMutations([
           'showModal', 'creatUserId', 'showLoading' ,'hideLoading'
        ]),

        // 获取查询参数
        getQueryString(name) {
          const after = window.location.hash.split("?")[1];
          if(after) {
              var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
              var r = after.match(reg);
              if(r != null){
                  return  decodeURIComponent(r[2]);
              }else{
                  return null;
              }
          }
          return '';
        },

        // 登录
        submit() {
          if(!this.name || !this.password){
            this.showModal({
              content: '请输入用户名或密码',
              confirmColor: "#c87080",
              hideCancel:true,
            })
            return;
          }
          this.showLoading('登录中...');
          $.ajax({
            url: baseUrl+"/Thingworx/Things/loginRest/Services/weLogin", //接口地址
            type:'POST',
            headers: {
                appKey: "142d3652-c0d4-47d6-b503-6cd0dfa7815a"
            },
            contentType: 'application/json',
            data: JSON.stringify({
              jsonData:{  
                  userID:this.name,
                  passWord:this.password,
                  openId:this.getQueryString('openId'),
                  loginType:'wx',
              }
            }),
            timeout:10000,    //超时时间
            dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
            success: (res) => {
              this.hideLoading();
              if(res.ret === '1'){
                this.creatUserId({
                  name:this.name,
                  password:this.password,
                  token:res.data.token,
                  appkey:res.data.appkey,
                })
                setCookie('recorderId',this.name,30);
                setCookie('recorderPass',this.password,30);
                setCookie('recorderToken',res.data.token,30);
                setCookie('recorderAppkey',res.data.appkey,30)
                this.$router.replace({ path: `/sample` })
              }else{
                this.showModal({
                  content: res.msg,
                  confirmColor: "#c87080",
                  hideCancel:true,
                })
              }
            },
            error: () => {
              this.hideLoading();
              this.showModal({
                content: '未知错误',
                confirmColor: "#c87080",
                hideCancel:true,
              })
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
    background: #3a3c47;
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
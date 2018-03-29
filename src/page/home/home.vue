<template>
  <div id="home">
    <img src="../../images/logo.png" alt="">
    <router-link  to="/detail">
                点我进入详情
    </router-link>
    <div class="">
      <button @click="bindShowLoading" type="button" >loading框</button>
      <button @click="bindTips" type="button" >警告框</button>
      <button @click="bindShowModal" type="button" >模态框</button>
      <button @click="bindShowToast" type="button" >成功提示框</button>
    </div>
  </div>
</template>

<script>
    import {baseUrl} from 'src/config/env'
    import {mapMutations} from 'vuex'
  	export default {
  	    data(){
          return{

          }
        },
        //实例创建后调用
        created() {
            // `this` 指向 vm 实例
        },
        //定义函数
        methods:{
            ...mapMutations([
               'showLoading', 'hideLoading', 'tips', 'showModal', 'showToast'
            ]),

            bindShowLoading() {
              this.showLoading();
              setTimeout(() =>{
                this.hideLoading();
              }, 1500);
            },

            bindShowModal() {
              this.showModal({
                    content: '1111',
                    confirmColor: "#e83632",
                    // hideCancel：true, // 隐藏取消按钮
                    cancel: () => {
                      console.log('点击取消')
                    },
                    confirm: () => {  //确定
                      console.log('点击确定')
                    }
                })
            },

            bindTips() {
              this.tips('我是谁?')
            },

            bindShowToast() {
              this.showToast('成功')
            }


        },
  	}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    #home{
      display: flex;
      flex-direction:column;
      align-items: center;
      img{
        width: 200px;
      }
      padding-top: 1rem;
      @include sc(.5rem,#333);
      text-align: center;
      button{
        display: block;
        margin: 0.2rem auto;
        padding: 0.1rem;
        color: #fff;
        background: #3385ff;
        border-radius: 0.1rem;
      }
    }
</style>

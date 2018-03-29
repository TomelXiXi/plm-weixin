<template>
  <div id="error">
    页面出错了！
  </div>
</template>

<script>
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

        },
  	}

</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  #error{
    position: fixed;
    @include wh(100%,100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
</style>

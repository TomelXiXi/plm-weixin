<template>
  <div id="detail">
    detail
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
               'showLoading', 'hideLoading', 'tips'
            ]),

        },
  	}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
  
</style>

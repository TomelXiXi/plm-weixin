<template>
   <div v-show="$store.state.showLoading" id="toast">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
         <i class="weui-icon_toast weui-loading"></i>
         <p class="weui-toast__content">{{$store.state.showLoadingText || '加载中...'}}</p>
      </div>
   </div>
</template>

<script>
    export default {
        mounted(){

        },
    }
</script>

<style>
    #toast{
        font-size:16px;
    }
</style>




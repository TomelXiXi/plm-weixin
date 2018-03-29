<template>
  <div >
    <div v-wechat-title="$route.meta.title"></div>
    <transition name="router-fade" mode="out-in">
    	<keep-alive>
    	    <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </transition>

    <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>

    <alert-tip></alert-tip>
    <success-tip ></success-tip>
    <loading></loading>
    <modal></modal>
  </div>
</template>

<script>
    import loading from './components/common/loading'
    import alertTip from './components/common/alertTip'
    import successTip from './components/common/successTip'
    import modal from './components/common/modal'

    export default {
      components:{
        loading,
        alertTip,
        successTip,
        modal,
      },
    }
</script>

<style lang="scss">
  	@import './style/weui';
  	@import './style/common';
  	.weui-toast{
  	    line-height:1.6;
  	}
  	.router-fade-enter-active, .router-fade-leave-active {
  	  	transition: opacity .3s;
  	}
  	.router-fade-enter, .router-fade-leave-active {
  	  	opacity: 0;
  	}
  	.router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(6.4rem, 0, 0);
        //opacity: 0;
    }
</style>

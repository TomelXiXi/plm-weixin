<template>
   <div v-if='$store.state.showSuccess'  id="showToast">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
         <i class="weui-icon_toast weui-icon-success-no-circle"></i>
         <p class="weui-toast__content">{{$store.state.scContent}}</p>
      </div>
   </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'showSuccess'
            ]),
        },
        watch: {
            showSuccess: function (value) {
                if(value){
                    setTimeout(() => {
                        this.$store.state.showSuccess = false;
                        this.$store.state.scContent = '';
                    },1000)
                }
            }
        }

    }
</script>

<style>
    #showToast{
        font-size:16px;
    }
</style>
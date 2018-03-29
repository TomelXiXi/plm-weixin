 <template>
    <!--模态框-->
    <div v-if="modal">
        <div class="weui-mask" ></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{modal.title}}</strong></div>
            <div class="weui-dialog__bd">{{modal.content}}</div>
            <div class="weui-dialog__ft">
                <div @click="cancel" v-if="!modal.hideCancel" class="weui-dialog__btn weui-dialog__btn_default cancel">{{modal.cancelText||'取消'}}</div>
                <div @click="confirm" :style="{color:modal.confirmColor}" class="weui-dialog__btn weui-dialog__btn_primary confirm">{{modal.confirmText||'确定'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'modal'
            ]),
        },
        methods:{
            cancel() { // 取消
                if(this.modal.cancel){
                    this.modal.cancel();
                }
                this.$store.state.modal='';
            },
            confirm() { // 确定
                if(this.modal.confirm){
                    this.modal.confirm();
                }
                this.$store.state.modal='';
            }
        },
    }
</script>

<style>
    .weui-dialog{
        top:45%;
        width: 85%;
    }
    .weui-dialog__hd {
        padding: 1.1em 1.6em 0.5em;
    }
    .weui-dialog__bd{
        line-height: 1.5;
        padding: 0 1.5em 0.8em;
    }
</style>
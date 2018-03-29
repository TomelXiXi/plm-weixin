 <template>
    <!--警告框-->
    <div v-if='$store.state.showAlert' class="message-floor" >
        <div class="messge-box">
            <div class="messge-box-icon weui-icon-warn"></div>
            <div class="messge-box-content">{{$store.state.alertText}}</div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'showAlert'
            ]),
        },
        mounted() {
            if(this.showAlert){
                setTimeout(() => {
                    this.$store.state.showAlert = false;
                    this.$store.state.alertText = '';
                },1000)
            }
        },
        watch: {
            showAlert: function (value) {
                if(value){
                    setTimeout(() => {
                        this.$store.state.showAlert = false;
                        this.$store.state.alertText = '';
                    },1000)
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .message-floor {
        @include wh(100%,100%);
        position: fixed;
        top: 0;
        left: 0;
        text-align: center;
        z-index: 77777;
        .messge-box {
            width: 170px;
            min-height: 112px;
            background: rgba(0,0,0,0.7);
            border-radius: 7px;
            @include fb;
            @include ft;
            @include fg;
            padding: 0px 10px 15px;
            position: absolute;
            top: 45%;
            left: 50%;
            -webkit-transform: translate3d(-50%,-50%,0);
            transform: translate3d(-50%,-50%,0);
            .messge-box-icon{
                margin-top: 15px;
                @include sc(50px,#fff);
            }
            .messge-box-content {
                @include sc(14px,#fff);
                margin-top: 10px;
                line-height: 21px;
                text-align: left;
            }
        }
    }

</style>

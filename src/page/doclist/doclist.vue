<template>
	<div>
		<!-- 导航栏 -->

		<!-- 标题图片 -->
		<div class="HeaderPic">
			<img class="u18_img" src="../../images/headerpic.png"/>

			<!-- <el-input placeholder="请输入内容" prefix-icon="el-icon-search" class="search-put"></el-input> -->
		</div>
		<div class="upload_icon" id="upload_icon">
			<img class="u14_img" src="../../images/public.jpg" @click="topuclic"/>
		</div>

		<loading></loading>
		<!-- 遮罩区域 -->
		<div class="z_mask2" ref="mask_div" @click="hideMask($event)">
			<div>
				<img class="pic_show"  v-bind:src="maskPicSrc">
			</div>


		</div>  
		<div class="list_div">
			<ul >
				<li v-for="(item,index) in resultList">
					<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
						<el-col :span="2" :offset="1">           
							<div class="u24_div">
								<img class="u24_img" src="../../images/headphoto.png"/>
							</div>
						</el-col>
						<el-col :span="17" :offset="1">
							<div >
								<span class="name-spn">{{item.creatorName}}</span>
								<br><br>
								<span class="time-span">发布时间：{{item.createTime}}</span>
							</div>

						</el-col>
					</el-row>
					<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
						<el-col :span="17" :offset="4">
							<div class="note-div">
								<span>
									{{item.note}}
								</span>
							</div>
						</el-col>
					</el-row>
					<!-- 图像区域 -->
					<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
						<el-col :span="20" :offset="4">
							<div v-if="item.picNum === '1'">
	<!-- <img class="wc-preview-img chuang_img" :src="item.picList" :key="key" @click="$preview($event,item.picList,0,'filename')"/> -->
	<img class="wc-preview-img chuang_img" :src="url" v-for="(url, key) in item.picList" :key="key" @click="$preview($event, item.picList, key)"/>
							</div>
							<div v-if="item.picNum != '1'">
							<!-- 	<img v-for="i in item.picList"  v-bind:src="i.filename" class="chuang_img3" @click="showPicture($event)"/> -->
<img class="wc-preview-img chuang_img3" :src="url" v-for="(url, key) in item.picList" :key="key" @click="$preview($event, item.picList, key)"/>
							</div>


						</el-col>
					</el-row >
					<!-- 所在位置 -->
					<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;" v-if="item.location != ''">
						<el-col :span="18" :offset="4">
							<div class="location_div">{{item.location}}</div>
						</el-col>
					</el-row >
					<!-- 功能菜单区域 -->
					<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">

						<div class="edit_div" >
							<!-- 赞 -->

							<img class="u55_img" src="../../images/u20.png" />
							<span class="like_note">点赞</span>

							<!-- 竖线 -->



							<!-- 评论 -->

							<img class="u59_img" src="../../images/u59.png"/>
							<span class="chat_note">评论</span>

							<!-- 竖线 -->



							<!-- 编辑 -->

							<img class="u51_img" src="../../images/u51.png"/>
							<span class="editb_note">编辑</span>

						</div>

					</el-row >

					<div class="split-div" v-if="index != (resultSize-1)">

					</div>

					<br>

				</li>



			</ul>

		</div>

	</div>
</template>


<script>
import $ from 'jquery'
import loading from '../../components/common/loading'
import {mapMutations} from 'vuex'
export default {
	components:{
		loading
	},

	data() {
		return {
			resultSize:"",
			resultList:[],
			picList:[],
			maskPicSrc:""
		};
	},
	created() {
            // `this` 指向 vm 实例
            this.queryForList();
        },
        methods: {
        	...mapMutations([
        		'showLoading', 'hideLoading', 'tips', 'showModal', 'showToast'
        		]),
        	topuclic (){
        		this.$router.push({ path: `/docpublic` })
        	},
        	queryForList(){
        		this.showLoading();
console.log(btoa("wcadmin" + ":" + "ptc"));
        		$.ajax({
                url:'/Windchill/rfa/mgl/weixin/getDocList.jsp', //接口地址

                headers: {
                	"Authorization": "Basic " + btoa("wcadmin" + ":" + "ptc")
                },

               
                dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
                success: (msg)=>{         
                	console.log(msg)
                	this.resultSize = msg.queryData.resultSize;
                	this.resultList = msg.queryData.dataList;
                	this.hideLoading();
                },  

                error: () => {
                	console.log("error");
                	this.hideLoading();
                }
            })
        	},
        	showPicture(event){
        		this.$refs.mask_div.style.display="block";
        		this.maskPicSrc = event.target.src;

        	},
        	hideMask(event){
        		this.$refs.mask_div.style.display="none";
        	}
        }
    }
    </script>

    <style lang="scss">

    .upload_icon{top: 11px;position: absolute;right:15px;}
    .u14_img{width:20px;height:15px;}
    .HeaderPic{width:100%;height:220px;}
    .u18_img{width:100%;height:200px;position: relative;}
    .search-put{position:relative;top:-60px;background-color:transparent;}


    .el-row {
    	margin-left: 0px; margin-right: 0px;
    	margin-bottom: 10px;
    	&:last-child {
    		margin-bottom: 0;
    	}
    }


    .u24_img{width:40px;height:41px;border-radius:20px;}
    .name-spn{color:blue;font-size:15px;}
    .time-span{color:gray;font-size:12px;}

    .note-div{font-size:15px;font-size:13px;font-family: "Hiragino Sans GB"; line-height:18px}

    .chuang_img{width:160px;height:200px;}

    .but_div{border-radius:5px;border-width: 1px;border-style: solid;}
    .text_but{color:black;}

    .split-div{height:10px;background-color: #dcdada;}

    .chuang_img3{float:left;width:74px;height:80px;margin-right:10px;margin-bottom:10px;}

    .location_div{font-size: 11px;color: #78b4f3;}


    .edit_div{z-index: 10;

    	width:63%;
    	height:36px;
    	background:inherit;
    	border-width: 1px;
    	border-style: solid;
    	border-color: #dcdada;
    	border-radius:6px;
    	position: relative;
    	left:20%;

    }


    .u55_img{width:15px;height:15px;float:left;position:relative;left:6%;top:9px;}
    .like_note{font-size:13px;float:left;position:relative;left:8%;top:10px;font-family: "Hiragino Sans GB";}

    .u59_img{width:15px;height:15px;float:left;position:relative;left:22%;top:10px;}
    .chat_note{font-size:13px;position: relative;float:left;left:24%;top:10px;font-family: "Hiragino Sans GB";}


    .u51_img{width:15px;height:15px;float:right;position:relative;right:21%;top:8px;}
    .editb_note{font-size:13px;position: relative;top:-2px;float:right;right:1%;top:10px;font-family: "Hiragino Sans GB";}


    /*遮罩层*/
    .z_mask2 {
    	width: 100%;
    	height: 100%;
    	background: black;
    	position: fixed;
    	top: 0;
    	left: 0;
    	z-index: 999;
    	display: none;
    }


    .pic_show{
    	width: 80%;
    	height: 70%;
    	position: absolute;
    	top:15%;
    	left: 10%;

    }



    </style>
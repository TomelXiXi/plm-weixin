<template>
	<div >
		<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;margin-top:10px;">
			<el-col :span="24" >
				<div >
					<textarea class="text_area" rows="3" placeholder="记录下你的灵感..." id="note_text" v-model="note"></textarea>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
			<el-col :span="24" >
				<div>
					<div class="grid-content bg-purple location_note">
						<div class="pic_div">
							<div class="container">
								<!--    照片添加    -->
								<div class="z_photo">
									<div class="z_file">
										<input type="file" name="file" id="file" value="" accept="image/*" multiple @change="imgChange('z_photo','z_file');" />

									</div>

								</div>

								<div class="z_mask2">
									<canvas id="c"></canvas>
									<div style="text-align:center;clear:both;">
									</div>
								</div>
								<!--遮罩层-->
								<div class="z_mask">
									<!--弹出框-->
									<div class="z_alert">
										<p>确定要删除这张图片吗？</p>
										<p>
											<span class="z_cancel">取消</span>
											<span class="z_sure">确定</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>

		<!-- 所在位置 -->
		<div class="location_div2">
			<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
				<el-col :span="3">
					<div class="grid-content bg-purple location_note">
						<img src="../../images/location.png" class="loc_img">
					</div>
				</el-col>
				<el-col :span="18">
					<div class="grid-content bg-purple location_note location_loc" ref="locatin_ref">
						
						<input type="text" name="" style="background-color:transparent;" readonly="true" v-model="location">
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content bg-purple location_note">
						<i class="el-icon-arrow-right"></i>
					</div>
				</el-col>
			</el-row>
		</div>

		<!-- 分隔区域 -->
		<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;margin-bottom:0px">
			<el-col :span="24" style="padding-left: 0px; padding-right: 0px;">
				<div class="spilt_div2">
					
				</div>
			</el-col>
		</el-row>

		<!-- 是否公开 -->
		<div class="bottomdef_div">
			<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
				<el-col :span="3">
					<div class="grid-content bg-purple location_note">
						<img src="../../images/public.png" class="loc_img">
					</div>
				</el-col>
				<el-col :span="17">
					<div class="grid-content bg-purple location_note">
						是否公开
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content bg-purple location_note">
						<el-switch
						v-model="value2"
						active-color="#13ce66"
						inactive-color="#ff4949">
					</el-switch>
				</div>
			</el-col>
		</el-row>
	</div>

	<!-- 主题 -->
	<div class="bottomdef_div">
		<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
			<el-col :span="3">
				<div class="grid-content bg-purple location_note">
					<img src="../../images/theme.png" class="loc_img">
				</div>
			</el-col>
			<el-col :span="15">
				<div class="grid-content bg-purple location_note input_div">
					主题
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple location_note">
					<input type="text" name="" class="theme_text" placeholder="请输入..." v-model="theme">
				</div>
			</el-col>
		</el-row>
	</div>


	<!-- 季节 -->
	<div class="bottomdef_div">
		<el-row :gutter="20" style="margin-left: 0px; margin-right: 0px;">
			<el-col :span="3">
				<div class="grid-content bg-purple location_note">
					<img src="../../images/season.png" class="loc_img">
				</div>
			</el-col>
			<el-col :span="14">
				<div class="grid-content bg-purple location_note">
					{{season}}
				</div>
			</el-col>
			<el-col :span="7">

				<div class="grid-content bg-purple location_note public_btn">
					<el-dropdown trigger="click" @command="command1">
						<span class="el-dropdown-link">
							请选择<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown" >
							<el-dropdown-item >2018-春夏-长线</el-dropdown-item>
							<el-dropdown-item >2018-秋冬-短线</el-dropdown-item>
							<el-dropdown-item >2019-春夏-长线</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-col>
		</el-row>
	</div>
	<loading></loading>
	<br><br>
	<div class="public_btn">
		<el-button type="info" round size="small" @click="canclePublic">取消发布</el-button>
		<el-button type="success" round size="small" @click="ajaxPublic">立即发布</el-button>

	</div>

</div>
</template>

<script>
import $ from 'jquery'
import loading from '../../components/common/loading'
import {mapMutations} from 'vuex'
export default{
	components:{
		loading
	},
	data(){
		return{

			aaa:"click me!!!",
			dialogImageUrl: '',
			dialogVisible: false,
			value1: true,
			value2: true,
			input: '',
			location:'所在位置',
			season:'季节',
			theme:'',
			note:''
		}

	},
	created() {
            // `this` 指向 vm 实例
            
        },
        methods:{
        	...mapMutations([
        		'showLoading', 'hideLoading', 'tips', 'showModal', 'showToast'
        		]),
        	cancle (){
        		this.$router.push({ path: `/doclist` })
        	},
        	queryForList(){
        		console.log(111);
        	},
        	ajaxPublic(){
        		if(this.theme == ''){
        			alert("请输入主题！");
        			return false;
        		}
        		var defaultLoc = this.location;
        		if(defaultLoc == '所在位置'){
        			defaultLoc = ''
        		}
        		var noteDef = this.note;
        		var isPublicDef = this.value2;
        		var themeDef = this.theme;
        		this.showLoading();
        		var that = this;
                //获取点击的文本框
                var file = document.getElementById("file");
    //存放图片的父级元素
    var imgContainer = document.getElementsByClassName("z_photo")[0];
    //获取的图片文件
    var fileList = file.files;
    //文本框的父级元素
    var input = document.getElementsByClassName("z_file")[0];
    var imgArr = new Array();
    var nameArr = new Array();

    if(fileList.length > 0){
    	var fileLength = 0;
    	var reader = new FileReader();
    	var result;
    	reader.readAsDataURL(file.files[fileLength]);
    	reader.onabort = function(e) {
    		console.log("文件读取异常" + file.files[fileLength].name);
    	};
    	reader.onerror = function(e) {
    		console.log("文件读取出现错误" + file.files[fileLength].name);
    	};
    	reader.onload = function(e) {
    		if(e.target.result) {
    			console.log("完成" + file.files[fileLength].name);
    			var name = file.files[fileLength].name;
    			if(name.endsWith(".jpeg")){
    				name = name.replace(".jpeg",".jpg")
    			}
    			nameArr[fileLength] = name;
    			result = reader.result;
           //alert(name);
           result = result.replace("data:image/jpeg;base64,","");
           result = result.replace("data:image/png;base64,","");
           imgArr[fileLength] = result;
           //alert(result.length);
           fileLength++;
           if(fileLength < file.files.length) {
           	reader.readAsDataURL(file.files[fileLength]);
           } else {
           //alert(imgArr.length);
           var imgArrStr = "";
           var nameArrStr = "";
           /*for(var m = 0; m < imgArr.length;m++){
           	imgArrStr = imgArrStr + "&imgArr" + m + ":" + imgArr[m] + ",";
           	 nameArrStr = nameArrStr + "&nameArr" + m + "=" + nameArr[m];
           	}*/
           //console.log(imgArr);
           
           //发送ajax请求
           $.ajax({
           	url: "/Windchill/rfa/mgl/weixin/saveDocument.jsp",
           	type: "POST",
           	contentType: 'application/json',
           	headers: {
           		"Authorization": "Basic " + btoa("wcadmin" + ":" + "ptc")
           	},
           	data: JSON.stringify({                  
           		"note": noteDef,
           		"location": defaultLoc,
           		"isPublic": isPublicDef,
           		"theme": themeDef,
           		"imgArrLength":imgArr.length,
           		"picArr": imgArr,
           		"name":nameArr

           	}),
           	success:(msg)=>{
           		console.log("success");
           		that.hideLoading();
           		that.$router.push({ path: `/doclist` });
           	},
           	error:()=>{
           		console.log("error");
           		that.hideLoading();
           		alert("上传失败，请重试！");
           	}

           })

       }
   }
};


}else{
         //发送ajax请求
         $.ajax({
         	url: "/Windchill/rfa/mgl/weixin/saveDocument.jsp",
         	type: "POST",
         	contentType: 'application/json',
         	headers: {
         		"Authorization": "Basic " + btoa("wcadmin" + ":" + "wcadmin")
         	},
         	timeout: 10000,
         	data: JSON.stringify({                  
         		"note": noteDef,
         		"location": defaultLoc,
         		"isPublic": isPublicDef,
         		"theme": themeDef,
         		"imgArrLength":"0"

         	}),
         	success:(msg)=>{
         		console.log("success");
         		that.$router.push({ path: `/doclist` });
         	},
         	error:()=>{
         		console.log("error");
         		alert("上传失败，请重试！");
         	}

         })
     }


        		//this.$router.push({ path: `/doclist` })
        	},
        	command1(){
        		console.log();
        	},
        	imgChange(obj1, obj2) {

    //获取点击的文本框
    var file = document.getElementById("file");
    //存放图片的父级元素
    var imgContainer = document.getElementsByClassName(obj1)[0];
    //获取的图片文件
    var fileList = file.files;
    //文本框的父级元素
    var input = document.getElementsByClassName(obj2)[0];
    var imgArr = [];
    //遍历获取到得图片文件
    
    for (var i = 0; i < fileList.length; i++) {
    	if(i > 8){
    		alert("最多选择9张图片！");
    		return;
    	}   	
    	var name = file.files[i].name;
    	if(name.endsWith(".jpg") || name.endsWith(".png") || name.endsWith(".jpeg")){  
    		var imgUrl = window.URL.createObjectURL(file.files[i]);
    	}else{
    		alert("图片格式有误！");
    		continue;
    	}
    	imgArr.push(imgUrl);
    	var img = document.createElement("img");
    	img.setAttribute("src", imgArr[i]);
    	var imgAdd = document.createElement("div");
    	imgAdd.setAttribute("class", "z_addImg");
    	imgAdd.appendChild(img);
    	imgContainer.appendChild(imgAdd);
    };
    this.imgRemove();
},
imgRemove() {
	var imgList = document.getElementsByClassName("z_addImg");
	var mask = document.getElementsByClassName("z_mask")[0];
	var cancel = document.getElementsByClassName("z_cancel")[0];
	var sure = document.getElementsByClassName("z_sure")[0];
	for (var j = 0; j < imgList.length; j++) {
		imgList[j].index = j;
		imgList[j].onclick = function() {
			var t = this;
			mask.style.display = "block";
			cancel.onclick = function() {
				mask.style.display = "none";
			};
			sure.onclick = function() {
				mask.style.display = "none";
				t.style.display = "none";
			};

		}
	};
},
canclePublic(){
	this.$router.push({ path: `/doclist` });
}




}
}

</script>

<style >

@import '../../style/doc.css';

.z_file {
	width: 65px;
	height: 65px;
	background: url(../../images/z_add.png) no-repeat;
	background-size: 100% 100%;
	float: left;
	margin-right: 15px;
}

</style>


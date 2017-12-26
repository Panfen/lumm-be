<template>
	<el-row class="subcontent upload-product">
		<!-- S topbar -->
		<el-row class="topbar">
			<el-col :span="18">
				<h1>上架商品</h1>
			</el-col>
			<el-col :span="6">
				<el-button type="success" class="el-icon-caret-left" @click="backProductList">返回列表</el-button>
			</el-col>
		</el-row>
		<!-- E topbar -->

		<!-- S inputlist -->
		<el-row class="inputlist">
			<el-row class="baseinfo">
				<h2>基础信息</h2>
				<el-form :model="form" class="form">
			    <el-form-item label="商品名称" :label-width="formLabelWidth">
			    	<el-col :span="6">
			      	<el-input v-model="form.name" auto-complete="off" required></el-input>
			      </el-col>
			    </el-form-item>
			    <el-form-item label="商品类别" :label-width="formLabelWidth">
			    	<el-col :span="6">
				      <el-select v-model="form.group" placeholder="请选择商品类别">
				        <el-option label="猫粮" value="food"></el-option>
				        <el-option label="猫砂" value="sand"></el-option>
				        <el-option label="猫砂盆" value="basin"></el-option>
				        <el-option label="猫窝" value="house"></el-option>
				        <el-option label="玩具" value="toy"></el-option>
				        <el-option label="猫窝" value="tool"></el-option>
				      </el-select>
			      </el-col>
			    </el-form-item>
			    <el-form-item label="商品进价" :label-width="formLabelWidth">
			    	<el-col :span="6">
			      	<el-input v-model="form.orig_price" auto-complete="off"></el-input>
			      </el-col>
			      <span class="yuan">元</span>
			    </el-form-item>
			    <el-form-item label="商品售价" :label-width="formLabelWidth">
			    	<el-col :span="6">
			      	<el-input v-model="form.sale_price" auto-complete="off"></el-input>
			      </el-col>
			      <span class="yuan">元</span>
			    </el-form-item>
			    <el-form-item label="库存" :label-width="formLabelWidth">
			    	<el-col :span="6">
			      	<el-input v-model="form.stock" auto-complete="off"></el-input>
			      </el-col>
			    </el-form-item>
			    <el-form-item label="展示图片" :label-width="formLabelWidth">
			    	<p>主图 <span class="info">(建议尺寸为640像素*640像素，大小不超过500kb)</span></p>
			    	<el-upload class="avatar-uploader"
						  action=""
						  :show-file-list="false"
						  :on-success="handleUploadSuccess"
						  :on-error="handdleUploadError"
						  :before-upload="beforeUpload">
						  <img v-if="imageUrl" :src="imageUrl" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
						<p>副图 <span class="info">(选传，建议尺寸为640像素*640像素，大小不超过500kb，最多8张)</span></p>
						<el-upload
						  action=""
						  list-type="picture-card"
						  :on-remove="handleRemoveImg"
						  :on-success="handleUploadSuccess"
						  :on-error="handdleUploadError"
						  :before-upload="beforeUpload">
						  <i class="el-icon-plus"></i>
						</el-upload>
			    </el-form-item>
			    <el-form-item label="商品详情" :label-width="formLabelWidth">
			    	<el-col>
			    		<el-radio-group v-model="detail" @change="setDetailAct">
							  <el-radio label="0">不设置</el-radio>
							  <el-radio label="1">设置</el-radio>
						  </el-radio-group>
						</el-col>
						<el-col :span="9" v-if="showDetailBox" class="detailBox">
						  <el-col class="addItemBox">
						  	<el-col :span="6" :offset="6">
						  		<el-button type="text" @click="addImgDialogVisible=true" class="img-btn">
						  			<i class="el-icon-picture-outline"></i>
						  			添加图片
						  		</el-button>
						  	</el-col>
						  	<el-col :span="6">
						  		<el-button type="text" @click="addTextDialogVisible=true,inputText=''" class="img-btn">
						  			<i class="el-icon-edit-outline"></i>
						  			添加文字
						  		</el-button>
						  	</el-col>
						  </el-col>
						</el-col>
			    </el-form-item>
			  </el-form>
			</el-row>
			<el-row class="logisticinfo">
				<h2>物流信息</h2>
				<el-form>
					<el-form-item label="所在地" :label-width="formLabelWidth">
			      中国 >> 浙江 >> 杭州 
			      <el-button type="text">编辑</el-button>
			    </el-form-item>
		    </el-form>
			</el-row>
			<el-row class="aftersaleinfo">
				<h2>售后信息</h2>
				<el-form>
					<el-form-item label="发票" :label-width="formLabelWidth">
		      	<template> 
						  <el-radio v-model="form.invoice" label="0">无</el-radio>
						  <el-radio v-model="form.invoice" label="1">有</el-radio>
						</template>
			    </el-form-item>
			    <el-form-item label="包退" :label-width="formLabelWidth">
		      	<template>
						  <el-radio v-model="form.warranty" label="0">无</el-radio>
						  <el-radio v-model="form.warranty" label="1">有</el-radio>
						</template>
			    </el-form-item>
		    </el-form>
			</el-row>
			<el-row class="uploadsetting">
				<h2>上架设置</h2>
				<el-form>
					<el-form-item label="上架时间" :label-width="formLabelWidth">
		      	<el-radio-group v-model="form.show_time">
						  <el-radio label="0">保存商品，暂不上架</el-radio>
						  <el-radio label="1">确认信息，立即上架</el-radio>
						</el-radio-group>
			    </el-form-item>
		    </el-form>
			</el-row>
			<el-col class="control">
				<el-button type="success" @click="confirmInfoAct">确 定</el-button>
			</el-col>
		</el-row>
		<!-- E inputlist -->

		<el-dialog title="添加文字" :visible.sync="addTextDialogVisible" width="40%">
		  <span>单个文本框的字数不超过500。</span>
		  <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="inputText" @input="handleInputChange">
			</el-input>
			<p class="textCount">还可以输入 <span>{{textCount}}</span> 个字</p>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="addTextDialogVisible=false">取 消</el-button>
		    <el-button type="success" @click="addTextDialogVisible=false">确 定</el-button>
		  </span>
		</el-dialog>

		<el-dialog class="imgdialog" title="添加图片" :visible.sync="addImgDialogVisible" width="60%" :show-close="false">
			<el-button class="upload-img-btn" type="success" icon="el-icon-plus" size="small">上 传</el-button>
			<el-col class="imgbox">
				<el-col :span="5" class="menu">
					<ul>
						<li class="selected">全部图片<span>(20)</span></li>
						<li>猫窝<span>(10)</span></li>
						<li>猫砂<span>(0)</span></li>
						<li>猫砂盆<span>(0)</span></li>
						<li>猫粮<span>(0)</span></li>
						<li>玩具<span>(10)</span></li>
					</ul>
				</el-col>
				<el-col :span="19" >
					<ul class="img-list">
						<li class="img-item-box">
							<img width="100" height="100" src="http://p2.so.qhimgs1.com/bdr/_240_/t01b36683a3daa345ae.jpg">
						</li>
					</ul>
				</el-col>
			</el-col>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="addTextDialogVisible=false">取 消</el-button>
		    <el-button type="success" @click="addTextDialogVisible=false">确 定</el-button>
		  </span>
		</el-dialog>

	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				formLabelWidth: '120px',
				form:{
					name: '',
          group: '',
          orig_price: '',
          sale_price: '',
          stock: '',
          invoice: '0',
          warranty: '0',
          show_time: '0'
				},
				imageUrl: '',
				detail: '0',
				showDetailBox: false,
				addTextDialogVisible: false,
				inputText: '',
				textCount: 500,
				addImgDialogVisible: false,
			}
		},
		methods:{
			backProductList(){
				this.$router.push('/shop');
			},
			handleUploadSuccess(res, file) {
				console.log(red)
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handdleUploadError(err, file, fileList){
      	this.$message.error('上传图片失败!');
      },
      beforeUpload(file) {
      	//.jpg和.jpeg文件的File.type都是image/jpeg
        const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
        const isLt500KB = file.size / 1024  < 500;   //单张图片大小不超过500kb
        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG/JPEG/PNG 格式!');
        }
        if (!isLt500KB) {
          this.$message.error('上传图片大小不能超过 500KB!');
        }
        return isJPG && isLt500KB;
      },
      handleRemoveImg(file, fileList) {
        console.log(file, fileList);
      },
      confirmInfoAct(){
      	//
      },
      setDetailAct(select){
      	this.showDetailBox = select === '1';
      },
      handleInputChange(value){
      	this.textCount = 500 -  value.trim().length;
      }
		}
	}
</script>

<style>
	.upload-product .topbar h1{
		font-size: 18px;
		color: #000;
	}
	.upload-product .inputlist h2{
		font-size: 16px;
		position: relative;
		padding-left: 18px;
		margin: 10px 0;
	}
	.upload-product .inputlist h2:before{
		content: "";
		width: 6px;
		height: 6px;
		display: inline-block;
		border-radius: 3px;
		background: #b2b2b2;
		position: absolute;
		left: 0px;
		top: 8px;
	}
	.upload-product .el-form-item{
		margin-bottom: 14px;
	}
	.upload-product .el-select{
		width: 100%;
	}
	.upload-product .el-form-item__label{
		padding: 0 24px 0 0;
	}
	.upload-product span.yuan{
		padding-left: 6px;
	}
	.upload-product span.info{
		color: #8d8d8d;
	}
	/*detailBox*/
	.upload-product .detailBox{
		margin-top: 6px;
		padding: 6px;
		min-height: 400px;
		border: 1px solid #e1e1e1;
	}
	.upload-product .detailBox .addItemBox{
		border: 1px dashed #e1e1e1;
	}
	.upload-product .detailBox .addItemBox .img-btn{
		color: #aaa;
		cursor: pointer;
		text-align: center;
	}
	.upload-product .detailBox .addItemBox .img-btn:hover{
		color: #333;
	}
	.upload-product .detailBox .addItemBox i{
		font-size: 40px;
		display: block;
	}
	.upload-product .el-textarea{
		margin-top: 20px;
	}
	.upload-product .textCount{
		text-align: right;
	}
	.upload-product .el-dialog__header{
		padding: 20px 20px 0px
	}
	.upload-product .el-dialog__body{
		padding: 30px 40px;
	}

	/*add imgdialog*/
	.upload-product .imgdialog .el-dialog__body{
		padding: 20px 0;
	}
	.upload-product .imgbox{
		border-top: 1px solid #e1e1e1;
		border-bottom: 1px solid #e1e1e1;
		margin-bottom: 20px;
	}
	.upload-product .imgbox .menu{
		border-right: 1px solid #e1e1e1;
	}
	.upload-product .imgbox .menu ul li{
		cursor: pointer;
		padding: 7px 0px 7px 20px;
	}
	.upload-product .imgbox .menu ul li.selected,
	.upload-product .imgbox .menu ul li:hover{
		background: #f4f5f9;
	}
	.upload-product .imgbox .menu ul li span{
		color: #aaa;
	}
	.upload-product .upload-img-btn{
		position: absolute;
    top: 15px;
    right: 15px;
	}
	.upload-product .img-item-box{
		margin: 10px;
		cursor: pointer;
		display: inline-block;
		border: 1px solid #e1e1e1;
	}

	/*upload img*/
	.upload-product .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 100
  }
  .upload-product .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .upload-product .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .upload-product .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .upload-product .el-upload.el-upload--picture-card{
  	width: 100px;
  	height: 100px;
  	line-height: 100px;
  }
  .upload-product .control{
  	margin-top: 10px;
  	border-top: 1px solid #cecece;
  	padding-top: 30px;
  	text-align: center;
  }

</style>
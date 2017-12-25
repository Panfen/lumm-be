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
			      	<el-input v-model="form.name" auto-complete="off"></el-input>
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
						  <el-radio v-model="form.invoice" label="1">有</el-radio>
						  <el-radio v-model="form.invoice" label="0">无</el-radio>
						</template>
			    </el-form-item>
			    <el-form-item label="保修" :label-width="formLabelWidth">
		      	<template>
						  <el-radio v-model="form.warranty" label="1">有</el-radio>
						  <el-radio v-model="form.warranty" label="0">无</el-radio>
						</template>
			    </el-form-item>
		    </el-form>
			</el-row>
			<el-row class="uploadsetting">
				<h2>上架设置</h2>
				<el-form>
					<el-form-item label="上架时间" :label-width="formLabelWidth">
		      	<template>
						  <el-radio v-model="form.show_time" label="0">保存商品，暂不上架</el-radio>
						  <el-radio v-model="form.show_time" label="1">确认信息，立即上架</el-radio>
						</template>
			    </el-form-item>
		    </el-form>
			</el-row>
			<el-col class="control">
				<el-button type="success" @click="confirmInfoAct">确 定</el-button>
			</el-col>
		</el-row>
		<!-- E inputlist -->

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
          invoice: '',
          warranty: '',
          show_time: ''
				},
				imageUrl: ''
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
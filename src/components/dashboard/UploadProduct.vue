<template>
	<el-row class="subcontent">
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
			    	<div></div>
			    </el-form-item>
			  </el-form>
			</el-row>
			<el-row class="logisticinfo">
				<h2>物流信息</h2>
			</el-row>
			<el-row class="aftersaleinfo">
				<h2>售后信息</h2>
			</el-row>
			<el-row class="uploadsetting">
				<h2>上架设置</h2>
			</el-row>
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
				}
			}
		},
		methods:{
			backProductList(){
				this.$router.push('/shop');
			}
		}
	}
</script>

<style scoped>
	.topbar h1{
		font-size: 18px;
		color: #000;
	}
	.inputlist h2{
		font-size: 16px;
		position: relative;
		padding-left: 18px;
		margin: 10px 0;
	}
	.inputlist h2:before{
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
	.el-form-item{
		margin-bottom: 14px;
	}
	.el-select{
		width: 100%;
	}
	.el-form-item__label{
		padding: 0 24px 0 0;
	}
	span.yuan{
		padding-left: 6px;
	}
	span.info{
		color: #8d8d8d;
	}
</style>
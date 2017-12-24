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
				//
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
</style>
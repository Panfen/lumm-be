<template>
	<el-row class="content">

		<!-- S content-top -->
		<el-row class="content-top">
			<el-col :span="6" class="top-left">
				<img src="../assets/logo_black.png" width="60" height="60">
				<span>撸猫猫后台管理系统</span>
			</el-col>
			<el-col :span="6" :offset="12">
				hah
			</el-col>
		</el-row>
		<!-- E content-top -->

		<!-- S content-body -->
		<el-row class="content-body">
			<el-col :span="3" class="menu">
				<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
		      <el-submenu index="1">
		        <template slot="title">导航一</template>
	          <el-menu-item index="1-1">选项1</el-menu-item>
	          <el-menu-item index="1-2">选项2</el-menu-item>
	          <el-menu-item index="1-3">选项3</el-menu-item>
		      </el-submenu>
		      <el-submenu index="2">
		      	<template slot="title">导航二</template>
	          <el-menu-item index="2-1">选项1</el-menu-item>
	          <el-menu-item index="2-2">选项2</el-menu-item>
	          <el-menu-item index="2-3">选项3</el-menu-item>
		      </el-submenu>
		      <el-menu-item index="3">导航三</el-menu-item>
		    </el-menu>
			</el-col>
			<el-col :span="21" class="board">
				<div class="grid-content bg-purple-light">右边</div>
			</el-col>
		</el-row>
		<!-- E content-body -->

	</el-row>
</template>

<script>
	export default {
		data(){
			return {
				//
			}
		},
		methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>

<style>
	.content{
		height: 100%;
		position: relative;
	}
	.content-top{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		height: 80px;
		line-height: 80px;
		background: #FCFCFC;
	}
	.top-left{
		text-align: left;
	}
	.top-left img{
		margin: 10px 20px;
		float: left;
	}
	.top-left span{
		display: inline-block;
		line-height: 80px;
		float: left;
		font-weight: bold;
	}
	.content-body{
		height: 100%;
		padding-top: 80px;
	}
	.menu{
		overflow: hidden;
		background: #2C303C;
		height: 100%;
	}
	.board{
		height: 100%;
		background: #F4F3F8;
	}
	.el-submenu .el-menu-item {
		min-width: 0;
	}
</style>

<style scoped></style>
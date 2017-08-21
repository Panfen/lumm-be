<template>
	<el-row class="content">
		<el-row class="content-top">
			<el-col >
				<span>欢迎使用撸猫猫后台管理系统</span>
			</el-col>
		</el-row>
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
		line-height: 80px;
		background: #cecece;
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
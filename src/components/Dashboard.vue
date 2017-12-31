<template>
	<el-row class="content">

		<!-- S content-top -->
		<el-row class="content-top">
			<el-col :span="18" class="top-left">
				<img src="../assets/logo_black.png" width="60" height="60">
				<span>撸猫猫后台管理系统</span>
			</el-col>
			<el-col :span="6">
				千山慕雪
				<i class="logout el-icon-d-arrow-right" @click="logoutAct"></i>
			</el-col>
		</el-row>
		<!-- E content-top -->

		<!-- S content-body -->
		<el-row class="content-body">
			<el-col :span="3" class="menu">
				<el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect" unique-opened>
					<el-menu-item index="1"><i class="el-icon-star-off"></i>系统主页</el-menu-item>
		      <el-submenu index="2">
		      	<template slot="title"><i class="el-icon-setting"></i>系统管理</template>
		      	<el-menu-item index="2-1">用户管理</el-menu-item>
	          <el-menu-item index="2-2">文章管理</el-menu-item>
	          <el-menu-item index="2-3">话题管理</el-menu-item>
	          <el-menu-item index="2-4">店铺管理</el-menu-item>
	          <el-menu-item index="2-5">图片管理</el-menu-item>
		      </el-submenu>
		      <el-submenu index="3">
		      	<template slot="title"><i class="el-icon-rank"></i>系统分析</template>
	          <el-menu-item index="3-1">菜单分析</el-menu-item>
	          <el-menu-item index="3-2">用户分析</el-menu-item>
	          <el-menu-item index="3-3">素材分析</el-menu-item>
	          <el-menu-item index="3-4">图片管理</el-menu-item>
	        </el-submenu>
	        <el-submenu index="4">
		        <template slot="title"><i class="el-icon-menu"></i>系统功能</template>
	          <el-menu-item index="4-1">个人信息</el-menu-item>
	          <el-menu-item index="4-2">更换主题</el-menu-item>
	          <el-menu-item index="4-3">推送设置</el-menu-item>
		      </el-submenu>
		    </el-menu>
			</el-col>
			<el-col :span="21" :offset="3" class="board">
				<router-view></router-view>
			</el-col>
		</el-row>
		<!-- E content-body -->

	</el-row>
</template>

<script>
	export default {
		data(){
			return {
				//this.$router.push('/index')
			}
		},
		methods: {
      handleSelect(key, keyPath) {
      	if(keyPath[0] == '1'){
      		this.$router.push('/index');
      	}else if(keyPath[1] == '2-1'){
      		this.$router.push('/user');
      	}else if(keyPath[1] == '2-2'){
      		this.$router.push('/article');
      	}else if(keyPath[1] == '2-3'){
      		this.$router.push('/topic');
      	}else if(keyPath[1] == '2-4'){
      		this.$router.push('/shop');
      	}else if(keyPath[1] == '2-5'){
      		this.$router.push('/picture');
      	}
      },
      logoutAct(){
	    	this.$router.push('/login');
	    }
    }
	}
</script>

<style scoped>
	.content{
		position: relative;
	}
	.content-top{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 101;
		height: 80px;
		line-height: 80px;
		background: #FCFCFC;
		border-bottom: 1px solid #eee;
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
		position: relative;
	}
	.menu{
		margin-top: 80px;
		overflow: hidden;
		background: #2C303C;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}
	.logout{
		margin-left: 6px;
		font-size: 14px;
		cursor: pointer;
	}
	.board{
		height: 100%;
	}
	.el-submenu .el-menu-item {
		min-width: 0;
	}
</style>

<style scoped></style>
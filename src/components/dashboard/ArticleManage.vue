<template>
	<el-row class="content">
		<!-- S topbar -->
		<el-row class="topbar">
			<el-col :span="6">
				<el-input placeholder="标题" icon="search" v-model="title" :on-icon-click="handleSearch"></el-input>
			</el-col>
			<el-col :span="6" :offset="12">
				<el-button type="success">新建文章</el-button>
			</el-col>
		</el-row>
		<!-- E topbar -->

		<!-- S list -->
		<el-row>
			<span>文章列表(共13篇)</span>
			<el-button-group>
			  <el-button icon="menu" size="mini"></el-button>
			  <el-button icon="more" size="mini"></el-button>
			</el-button-group>
		</el-row>
		<el-row class="article-list">
			<el-col :span="8">
				<el-row class="list-body">
					<el-col class="time">
						<span>更新于 07月04日</span>
					</el-col>
					<el-col class="wrap">
						<h4>长期吸猫有什么不良反应？</h4>
						<img src="../../assets/cover.jpg" width="100%" height="160">
						<span>吸猫一日，想猫一生。据说中了猫毒无药可解。</span>
					</el-col>
				</el-row>
				<el-row class="list-footer">
					<el-col :span="12" class="btn">
						<el-button icon="edit"></el-button>
					</el-col>
					<el-col :span="12" class="btn">
						<el-popover
						  ref="popover5"
						  placement="top"
						  width="160"
						  v-model="visible2">
						  <p>删除后将无法恢复，确定删除吗？</p>
						  <div style="text-align: right; margin: 0">
						    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
						    <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
						  </div>
						</el-popover>
						<el-button v-popover:popover5 icon="delete"></el-button>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<!-- E list -->
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				visible2: false
			}
		},
		methods:{
			handleSearch(){
				//
			}
		}
	}
</script>

<style scoped>
	.content{
		margin: 20px;
    padding: 40px;
    min-height: 500px;
    text-align: left;
    background: #fff;
    border: 1px solid #eee;
	}
	.topbar{
		margin-bottom: 20px;
	}
	.topbar .el-col:last-child{
		text-align: right;
	}
	.el-button-group{
		margin-left: 10px;
	}
	.article-list .el-col{
		padding: 20px 40px 20px 0;
		font-family: "微软雅黑";
	}
	.article-list .el-col .el-row{
		border: 1px solid #e7e7eb;
	}
	.article-list .el-col .el-row .el-col.time{
		padding: 12px 14px;
	}
	.article-list .el-col .el-row .el-col.time span{
		color: #666;
		font-size: 13px;
		display: block;
		padding-bottom: 12px;
		border-bottom: 1px solid #e7e7eb;
	}
	.article-list .el-col .el-row .el-col.wrap{
		padding: 0 12px 14px 12px;
	}
	.article-list .el-col .el-row .el-col.wrap h4{
		color: #555;
		padding: 0;
		margin: 0 0 8px 0;
		font-weight: 500;
		font-size: 14px; 
	}
	.article-list .el-col .el-row .el-col.wrap span{
		color: #666;
		font-size: 13px;
	}
	.article-list .el-col .el-row.list-footer{
		border-top: none; 
	}
	.article-list .el-col .el-row.list-footer .el-col{
		padding: 0;
		transition: all .5s;
	}
	.article-list .el-col .el-row.list-footer .el-col:first-child{
		border-right: 1px solid #e7e7eb;
	}
	.article-list .el-col .el-row.list-footer .el-col .el-button{
		width: 100%;
		color: #ccc;
		display: inline-block;
		text-align: center;
		padding: 6px 15px;
		transition: all .5s;
		border-radius: 0;
		border: none;
		padding: 10px 0;
	}
	.article-list .el-col .el-row.list-footer .el-col .el-button:hover{
		color: #777;
		background: #eee;
	}
	.el-popover p{
		font-family: "微软雅黑"
	}
	.el-popover .el-button{
		border-radius: 0;
	}
</style>
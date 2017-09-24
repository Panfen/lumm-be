<template>
	<el-row class="content">
		<!-- S  topbar -->
		<el-row class="topbar">
			<el-col :span="6">
				<el-input placeholder="粉丝昵称" icon="search" v-model="username" :on-icon-click="handleSearch"></el-input>
			</el-col>
			<el-col :span="6" :offset="12">
				<el-button type="success">新建分组</el-button>
			</el-col>
			</el-col>
		</el-row>
		<!-- E topbar -->

		<!-- S datalist -->
		<el-row class="datalist">
			<el-col :span="18" class="list">
				<h2>全部粉丝</h2>
				<p class="control">
					<checkbox :checkboxName="checkboxName"></checkbox>
				</p>
				<ul class="userlist">
					<li v-for="user in users">
						<checkbox></checkbox>
						<img v-bind:src="user.url" width="48" height="48"/>
						<h3>{{user.name}}</h3>
					</li>
				</ul>
			</el-col>
			<el-col :span="6" class="groups">
				<ul class="grouplist">
					<li class="selected">全部粉丝(2)</li>
					<li>活跃(0)</li>
					<li>杭州(0)</li>
					<li>上海(0)</li>
				</ul>
			</el-col>
		</el-row>
		<!-- E datalist -->
	</el-row>
</template>

<script>
	import checkbox from '../tools/checkbox.vue'

	export default{
		data(){
			return {
				username: '',
				checkboxName: '全选',
				users: [
					{name: '啊啊阿狸', url: 'https://ps.ssl.qhimg.com/t0189bbabbca6665578.jpg'},
					{name: '认真的犯错', url: 'https://ps.ssl.qhimg.com/t014125947e3be23398.jpg'}
				]
			}
		},
		methods: {
			handleSearch(){
				//
			}
		},
		components: {
			checkbox
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
	.topbar .el-col:last-child{
		text-align: right;
	}
	.datalist{
		margin-top: 20px;
		border: 1px solid #eee;
		font-size: 14px;
		font-family: "微软雅黑";
	}
	.datalist .list{
		border-right: 1px solid #eee;
	}
	.datalist .list h2{
		padding: 10px 16px;
		border-bottom: 1px solid #eee;
	}
	.datalist .list .control{
		padding: 10px 16px;
		background: #f4f5f9;
	}
	.datalist .list .userlist li{
		padding: 10px 16px;
		display: flex;
		align-items: top;
		border-bottom: 1px solid #eee;
	}
	.datalist .list .userlist li img{
		border: 1px solid #eee;
		margin-right: 10px;
	}

	.datalist .groups .grouplist{
		border-bottom: 1px solid #eee;
	}
	.datalist .groups .grouplist li{
		padding: 10px 16px;
		cursor: pointer;
	}
	.datalist .groups .grouplist li:hover,
	.datalist .groups .grouplist li.selected{
		background: #f4f5f9;
	}
</style>
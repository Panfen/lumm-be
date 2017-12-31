<template>
	<el-row class="subcontent">
		<!-- S  topbar -->
		<el-row class="topbar">
			<el-col :span="6">
				<el-input placeholder="粉丝昵称" prefix-icon="el-icon-search" v-model="username" :change="handleSearch"></el-input>
			</el-col>
			<el-col :span="6" :offset="12">
				<el-button type="success" icon="el-icon-plus" @click="dialogVisible=true">新建分组</el-button>
			</el-col>
		</el-row>
		<el-dialog title="新建分组" :visible.sync="dialogVisible" width="30%">
		  <el-input v-model="newGroupName" placeholder="请输入分组名称"></el-input>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible=false">取 消</el-button>
		    <el-button type="primary" @click="createNewClassAct">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- E topbar -->

		<!-- S datalist -->
		<el-row class="datalist">
			<el-col :span="18" class="list">
				<h2>全部粉丝</h2>
				<p class="control">
					<el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
					<el-button :plain="true" :disabled="btnAvaliable" size="small" >重新分组</el-button>
					<el-button :plain="true" :disabled="btnAvaliable" size="small">加入黑名单</el-button>
				</p>
				<el-checkbox-group class="users-checkbox-group" v-model="checkedUsers" @change="handleCheckedUsersChange">
					<ul class="userlist">
						<li v-for="user in users">
							<el-checkbox :label="user.wechatId" :key="user.wechatId"></el-checkbox>
							<img v-bind:src="user.url" width="48" height="48"/>
							<h3>{{user.name}}</h3>
						</li>
					</ul>
				</el-checkbox-group>
			</el-col>
			<el-col :span="6" class="groups">
				<ul class="grouplist">
					<li v-for="(group, index) in groups" v-bind:class="index === currentMenu ? 'selected' : ''" v-on:click="selectMenu(index)">{{group.groupName}}({{group.total}})</li>
				</ul>
			</el-col>
		</el-row>
		<!-- E datalist -->
	</el-row>
</template>

<script>

	export default{
		data(){
			return {
				username: '',
				checkboxName: '全选',
				btnAvaliable: true,
				selectItem: false,
				currentMenu: 0,
				checkAll: false,
				checkedUsers: [],
				users: [
					{
						wechatId: '2017121201', 
						name: '啊啊阿狸', 
						url: 'https://ps.ssl.qhimg.com/t0189bbabbca6665578.jpg'
					},
					{
						wechatId: '2017121202',
						name: '认真犯de错', 
						url: 'https://ps.ssl.qhimg.com/t014125947e3be23398.jpg'
					}
				],
				groups: [
					{
						groupName:'全部粉丝',
						total: 2
					}, 
					{
						groupName:'活跃',
						total: 0
					}, 
					{
						groupName:'杭州',
						total: 0
					}, 
					{
						groupName:'上海',
						total: 0
					}
				],
				dialogVisible: false,
				newGroupName: ''
			}
		},
		methods: {
			handleSearch(){
				//
			},
			handleCheckedUsersChange(value){
				var checkedCount = value.length;
				this.btnAvaliable = checkedCount > 0 ? false : true;
        this.checkAll = checkedCount === this.users.length;
			},
			handleCheckAllChange(val){
				this.checkedUsers = val ? this.getWechatIds() : [];
				this.btnAvaliable = this.checkedUsers.length > 0 ? false : true;
			},
			selectMenu(index){
				this.currentMenu = index;
			},
			getWechatIds(){
				let wechatIds = [];
				this.users.map(user => wechatIds.push(user.wechatId));
				return wechatIds;
			},
			createNewClassAct(){
				if(this.newGroupName){
					this.groups.push({groupName:this.newGroupName,total: 0})
					this.dialogVisible = false;
					this.newGroupName = '';
				}
			}
		}
	}
</script>

<style>
	.users-checkbox-group .el-checkbox__label{
		display: none;
	}
	.datalist{
		margin-top: 20px;
		border-top: 1px solid #eee;
		font-size: 14px;
		font-family: "微软雅黑";
	}
	.datalist .list{
		border-right: 1px solid #eee;
		border-left: 1px solid #eee;
	}
	.datalist .list h2{
		padding: 10px 16px;
		border-bottom: 1px solid #eee;
	}
	.datalist .list .control{
		padding: 10px 16px;
		background: #f4f5f9;

	}
	.datalist .list .control button{
		margin-left: 10px;
	}
	.datalist .list .userlist li{
		padding: 10px 16px;
		display: flex;
		align-items: top;
		border-bottom: 1px solid #eee;
	}
	.datalist .list .userlist li{
		padding: 10px 16px;
		display: flex;
		align-items: top;
		border-bottom: 1px solid #eee;
	}
	
	.datalist .list .userlist li img{
		margin-left: 10px;
	}
	.datalist .list .userlist h3{
		margin-left: 10px;
	}

	.datalist .groups .grouplist{
		border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;
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
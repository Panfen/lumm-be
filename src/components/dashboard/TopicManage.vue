<template>
	<el-row class="subcontent">
		<!-- S topbar -->
		<el-row class="topbar">
			<el-col :span="18">
				<el-col :span="8">
					<el-input placeholder="话题" prefix-icon="el-icon-search" v-model="searchTopic" @change="handleSearch" @keyup.enter.native="handleSearch"></el-input>
				</el-col>
				<el-col :span="10">
					<el-button @click="viewTopic" icon="el-icon-view" class="view-btn">查看</el-button>
					<el-button @click="deleTopic" type="danger" icon="el-icon-delete" class="dele-btn">删除</el-button>
				</el-col>
			</el-col>
			<el-col :span="6">
				<el-button type="success" @click="createTopic" icon="el-icon-plus">新建话题</el-button>
			</el-col>
		</el-row>
		<!-- E topbar -->

		<!-- S table -->
		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" :default-sort = "{prop:'create_time', order:'descending'}" @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="number" label="编号" width="120"></el-table-column>
			<el-table-column prop="title" label="标题" width="220"></el-table-column>
			<el-table-column prop="author" label="作者" width="140"></el-table-column>
			<el-table-column prop="create_time" label="发表时间" width="180" sortable></el-table-column>
			<el-table-column prop="active_time" label="最后活跃时间" width="180" sortable></el-table-column>
			<el-table-column prop="view" label="浏览" width="100" sortable></el-table-column>
			<el-table-column prop="like" label="评论" width="100" sortable></el-table-column>
		</el-table>
		<!-- E table -->
		
		<div align="center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				searchTopic: '',
				selectIndex: [],
				tableData: [{
					number: '2017120701',
					title: '寻找丢失的小白',
					create_time: '2017.12.07 19:59:24',
					active_time: '2017.12.07 19:59:24',
					author: '千山慕雪',
					view: 167,
					like: 53
				},{
					number: '2017120601',
					title: '3岁小奶猫求收养',
					create_time: '2017.12.06 19:59:24',
					active_time: '2017.12.06 19:59:24',
					author: '千山慕雪',
					view: 32,
					like: 124
				},{
					number: '2017120501',
					title: '线下撸猫俱乐部',
					create_time: '2017.12.05 19:59:24',
					active_time: '2017.12.05 19:59:24',
					author: '千山慕雪',
					view: 193,
					like: 45
				}],
				currentPage: 1,
				pagesize: 15,
				totalCount: 3,
				multipleSelection: []
			}
		},
		methods:{
			handleSearch(){
				//
			},
			handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      viewTopic(){
      	this.$router.push('/viewContent');
      },
      deleTopic(){
      	//
      },
      handleSizeChange(){
      	//
      },
      handleCurrentChange(){
      	//
      },
      createTopic(){
      	this.$router.push('/createTopic');
      }
		}
	}
</script>

<style scoped>
	.topbar .view-btn{
		float: left;
		margin: 0 6px;
	}
	.topbar .dele-btn{
		float: left;
		margin-left: 0;
	}
	.cell .el-button+.el-button{
		margin-left: 6px;
		font-size: 8px;
	}

	/*pagination*/
	.el-pagination{
		margin-top: 10px;
	}
</style>
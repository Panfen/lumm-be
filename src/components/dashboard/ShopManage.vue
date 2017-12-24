<template>
	<el-row class="subcontent">
		<el-tabs v-model="activeName" @tab-click="handleClick">

		 	<el-tab-pane label="店铺管理" name="shopManage">
		 		<!--  -->
		 	</el-tab-pane>

	    <el-tab-pane label="商品管理" name="prodManage">
	    	<!-- S topbar -->
				<el-row class="topbar">
					<el-col :span="18">
						<el-col :span="8">
							<el-input placeholder="商品名称" prefix-icon="el-icon-search" v-model="searchProuct" :change="handleSearch"></el-input>
						</el-col>
						<el-popover ref="popover" placement="right" trigger="click">
						  <ul class="menu-item">
						  	<li><i class="el-icon-edit"></i>编辑</li>
						  	<li><i class="el-icon-download"></i>下架</li>
						  	<li><i class="el-icon-upload2"></i>上架</li>
						  	<li><i class="el-icon-sort"></i>调整</li>
						  	<li><i class="el-icon-delete"></i>删除</li>
						  </ul>
						</el-popover>
						<el-button v-popover:popover class="setting-product-btn" icon="el-icon-menu">操作</el-button>
					</el-col>
					<el-col :span="6">
						<el-button type="success" class="upload-product-btn" @click="uploadProductAct">上架商品</el-button>
					</el-col>
				</el-row>
				<!-- E topbar -->

				<!-- S table -->
				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" :default-sort = "{prop:'upload_time', order:'sale_total'}" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column prop="id" label="商品编号" width="120"></el-table-column>
					<el-table-column prop="logo" label="缩略图" width="120">
						<template slot-scope="scope">
						 	<img v-bind:src="scope.row.logo" width="60" height="60"/>
			      </template>
					</el-table-column>
					<el-table-column prop="name" label="商品名称" width="180"></el-table-column>
					<el-table-column prop="group" label="商品类别" width="100" :filters="groups" :filter-method="filterGroup" filter-placement="bottom-end"></el-table-column>
					<el-table-column prop="orig_price" label="进价" width="80" sortable></el-table-column>
					<el-table-column prop="sale_price" label="售价" width="80" sortable></el-table-column>
					<el-table-column prop="sale_total" label="售量" width="80" sortable></el-table-column>
					<el-table-column prop="view" label="浏览" width="80" sortable></el-table-column>
					<el-table-column prop="collect" label="收藏" width="80" sortable></el-table-column>
					<el-table-column prop="upload_time" label="上架时间" width="180" sortable></el-table-column>
				</el-table>
				<!-- E table -->

	    </el-tab-pane>

	    <el-tab-pane label="订单管理" name="orderManage">
	    	订单管理
	    </el-tab-pane>

	    <el-tab-pane label="结算管理" name="settleAccounts">
	    	结算管理
	    </el-tab-pane>
	  </el-tabs>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'shopManage',
				// 商品管理
				searchProuct: '',
				uploadDialog: false,
				groups: [{
					text: '猫粮',
					value: '猫粮'
				},{
					text: '猫窝',
					value: '猫窝'
				}],
				tableData: [{
					id: '2017120701',
					name: 'whiskas伟嘉',
					logo: 'http://ozlcirvd6.bkt.clouddn.com/good1.jpg',
					orig_price: 65.5,
					sale_price: 78.5,
					upload_time: '2017.12.07 19:59:24',
					group: '猫粮',
					view: 167,
					collect: 53,
					sale_total: 125
				},{
					id: '2017120601',
					name: 'Friskies猫粮',
					logo: 'http://ozlcirvd6.bkt.clouddn.com/good3.jpg',
					orig_price: 59.0,
					sale_price: 67.5,
					upload_time: '2017.12.06 19:59:24',
					group: '猫粮',
					view: 32,
					collect: 124,
					sale_total: 65
				},{
					id: '2017120501',
					name: '舒慕高档宠物棉窝',
					logo: 'http://ozlcirvd6.bkt.clouddn.com/good9.jpg',
					orig_price: 129.0,
					sale_price: 149.0,
					upload_time: '2017.12.05 19:59:24',
					group: '猫窝',
					view: 193,
					collect: 45,
					sale_total: 89
				}],
				multipleSelection: [],
				form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
			}
		},
		methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      },
      handleSearch(){
      	//
      },
      filterGroup(value, row) {
        return row.group === value;
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      uploadProductAct(){
      	this.$router.push('/uploadProduct');
      }
    }
	}
</script>

<style>
	.el-popover{
		min-width: 0;
		padding: 0;
	}
	.el-popover ul.menu-item li{
		cursor: pointer;
		line-height: 24px;
		text-align: center;
		padding: 4px 20px;
		font-family: '微软雅黑';
	}
	.el-popover ul.menu-item li:hover{
		background: #ecf5ff;
	}
	.el-form.upload-form .el-input{
		width: 300px;
	}
	.el-popover ul.menu-item li i{
		margin-right: 6px;
	}
	.setting-product-btn{
		margin-left: 6px;
	}
	.upload-product-btn{
		float: right;
	}
</style>
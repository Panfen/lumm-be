<template>
	<el-row class="subcontent">
		<el-tabs v-model="activeName" @tab-click="handleClickTab">

			<el-tab-pane label="店铺首页" name="shopManage">
		 		<!--S banner  -->
		 		<el-row class="banner">
		 			<el-col	:span="8">
		 				<p><i class="el-icon-sold-out"></i>{{waitToDelivery}}</p>
		 				<span>待发货订单</span>
		 			</el-col>
		 			<el-col	:span="8">
		 				<p><i class="el-icon-time"></i>{{waitToReceive}}</p>
		 				<span>待签收订单</span>
		 			</el-col>
		 			<el-col	:span="8">
		 				<p><i class="el-icon-circle-check-outline"></i>{{finishedOrder}}</p>
		 				<span>已完成订单</span>
		 			</el-col>
		 		</el-row>
		 		<!-- E banner -->
		 		<!-- S indicator -->
		 		<el-row class="indicator">
		 			<el-col class="ind-header single">昨日关键指标</el-col>
		 			<el-col class="ind-content" >
		 				<el-col :span="4">
		 					<p>订单数</p>
		 					<span>0</span>
		 				</el-col>
		 				<el-col :span="4">
		 					<p>成交商品数</p>
		 					<span>0</span>
		 				</el-col>
		 				<el-col :span="4">
		 					<p>成交金额</p>
		 					<span>0</span>
		 				</el-col>
		 				<el-col :span="4">
		 					<p>店铺浏览量</p>
		 					<span>0</span>
		 				</el-col>
		 				<el-col :span="4">
		 					<p>货架浏览量</p>
		 					<span>0</span>
		 				</el-col>
		 				<el-col :span="4">
		 					<p>商品浏览量</p>
		 					<span>0</span>
		 				</el-col>
		 			</el-col>
		 		</el-row>
		 		<el-row class="indicator">
		 			<el-col class="ind-header">
		 				<el-col :span="4">关键指标趋势</el-col>
		 				<el-col :span="20">
			 				<el-radio-group v-model="trendDate">
					      <el-radio-button label="最近7天"></el-radio-button>
					      <el-radio-button label="最近15天"></el-radio-button>
					      <el-radio-button label="最近30天"></el-radio-button>
					    </el-radio-group>
				    	<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
		 				</el-col>
		 			</el-col>
		 			<el-col class="ind-content">
						<highcharts :options="options1" class="chart"></highcharts>
		 			</el-col>
		 		</el-row>
		 		<!-- E indicator -->
		 	</el-tab-pane>

			<el-tab-pane label="商品管理" name="prodManage">
	    	<!-- S topbar -->
				<el-row class="topbar">
					<el-col :span="18">
						<el-col :span="8">
							<el-input placeholder="商品名称" prefix-icon="el-icon-search" v-model="searchProuct" :change="handleSearchProduct"></el-input>
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
	    	<!-- S topbar -->
				<el-row class="topbar">
					<el-col :span="6">
						<el-input placeholder="订单编号" prefix-icon="el-icon-search" v-model="searchOrder" :change="handleSearchOrder"></el-input>
					</el-col>
					<el-col :span="18" class="">
						<el-radio-group v-model="orderTypeChoose">
				      <el-radio-button label="全部"></el-radio-button>
				      <el-radio-button label="代发货"></el-radio-button>
				      <el-radio-button label="已发货"></el-radio-button>
				      <el-radio-button label="维权中"></el-radio-button>
				    </el-radio-group>
				    <el-radio-group v-model="orderTimeChoose">
				    	<el-radio-button label="全部"></el-radio-button>
				      <el-radio-button label="近7日"></el-radio-button>
				      <el-radio-button label="近15日"></el-radio-button>
				      <el-radio-button label="近30日"></el-radio-button>
				    </el-radio-group>
					</el-col>
				</el-row>
				<el-table :data="orderListData" ref="multipleTable" class="orderTable" @selection-change="handleOrderSelectionChange">
					<el-table-column
			      type="selection"
			      width="55">
		    	</el-table-column>
		      <el-table-column
		        prop="no"
		        label="订单编号"
		        width="120">
		      </el-table-column>
		      <el-table-column
		        prop="pro_name"
		        label="商品名称">
		      </el-table-column>
		      <el-table-column
		        prop="pro_num"
		        label="数量">
		      </el-table-column>
		      <el-table-column
		        prop="pro_price"
		        label="总价格">
		      </el-table-column>
		      <el-table-column
		        prop="user_name"
		        label="客户昵称">
		      </el-table-column>
		      <el-table-column
		        prop="time"
		        label="下单时间"
		        width="180">
		      </el-table-column>
		      <el-table-column
		        prop="state"
		        label="交易状态"
		        :filters="[{text:'待付款', value:'待付款'}, {text:'待发货', value:'待发货'}, {text:'待收货', value:'待收货'}, {text:'已完成', value:'已完成'}]"
		        :filter-method="filterState"
		        filter-placement="bottom-end">
		        <template slot-scope="scope">
			        {{scope.row.state}}
			      </template>
		      </el-table-column>
		      <el-table-column label="操作" width="180">
		      	<template slot-scope="scope">
		      		<el-button type="text" @click="detailOrder(scope.$index, scope.row)">详情</el-button>
		      		<el-button type="text" @click="comfirmOrder(scope.$index, scope.row)">发货</el-button>
		      		<el-button type="text" @click="closeOrder(scope.$index, scope.row)">关闭</el-button>
		      	</template>
		      </el-table-column>
		    </el-table>
				<!-- E topbar -->
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
        formLabelWidth: '120px',
        searchOrder: '',
        orderTypeChoose: '全部',
        orderTimeChoose: '全部',
        orderListData: [{
        	no: '2017122701', 
        	pro_name: '黑人牙膏',
        	pro_num: 2,
        	pro_price: 78.6,
        	user_name: '千山慕雪',
        	state: '待发货',
        	time: '2017-12-27 10:01:25'
        }],
        waitToDelivery: 6,
        waitToReceive: 12,
        finishedOrder: 564,
        trendDate: '最近7天',
        options: [{
          value: 'select_order_num',
          label: '订单数'
        }, {
          value: 'select_prod_num',
          label: '成交商品数'
        }, {
          value: 'select_total_proice',
          label: '成交金额'
        }, {
          value: 'select_shop_views',
          label: '店铺浏览量'
        }, {
          value: 'select_shelve_views',
          label: '货架浏览量'
        }, {
          value: 'select_prod_views',
          label: '商品浏览量'
        }],
        value: 'select_order_num',
        options1: {
        	chart: {
		        type: 'area'
			    },
        	title: {
		        text: ''
			    },
			    xAxis: {
		        categories: ['12.21', '12.22', '12.23', '12.24', '12.25', '12.26', '12.27', ]
			    },
			    yAxis: {
		        title: {
	            text: ''
		        }
			    },
			    legend: {
			    	enabled: false,
			    },
			    plotOptions: {
			    	series: {
			    		fillColor: '#F9FCFD',
				    	lineColor: '#81CD86',
				    	lineWidth: 1,
		        	marker: {
		        		radius: 2,
		        		fillColor: '#81CD86'
		        	},
		        	states: {
		        		hover: {
		        			lineWidth: 1,
		        			lineWidthPlus: 0
		        		},
		        		marker: {
		        			radius: 3
		        		}
		        	}
			    	}
			    },
			    credits: {
					  enabled: false
					},
        	series: [{
		        name: 'views',
		        data: [0, 0, 10 ,12, 23, 4, 89],
			    }]
        },
			}
		},
		methods: {
      handleClickTab(tab, event) {
        //console.log(tab, event);
      },
      handleSearchProduct(){
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
      },

      handleSearchOrder(){
      	//
      },
      handleOrderSelectionChange(){
      	//
      },
      detailOrder(index, row){
      	//
      },
      filterState(state){
      	//
      },
      comfirmOrder(index, row){
      	console.log(index, row.no);
      },
      closeOrder(index, row){
      	console.log(index, row.no);
      },
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
	.orderTable{
		margin-top: 16px;
	}
	.banner{
		color: #fff;
		padding: 16px;
		background: #409EFF;
		margin-bottom: 20px;
	}
	.banner .el-col{
		padding: 16px;
		text-align: center;
	}
	.banner .el-col p{
		font-size: 24px;
	}
	.banner .el-col p i{
		margin-right: 10px;
	}
	.banner .el-col:not(:last-child){
		border-right: 1px solid #cecece;
	}

	/*indicator*/
	.indicator{
		font-size: 14px;
		margin-bottom: 20px;
		border: 1px solid #e1e1e1;
	}
	.indicator .ind-header{
		background: #f4f5f9;
		border-bottom: 1px solid #e1e1e1;
	}
	.indicator .ind-header.single,
	.indicator .ind-header .el-col{
		padding: 8px 16px;
	}
	.indicator .ind-header .el-col:last-child{
		text-align: right;
	}
	.indicator .ind-header .el-button{
		padding: 0;
		height: 100%;
		color: #666;
	}
	.indicator .ind-header .el-button.selected{
		color: #66b1ff;
	}
	.indicator .el-radio-button__inner{
		padding: 0 14px;
		display: inline-block;
		height: 100%;
		background: none;
		border: none;
	}
	.indicator .el-radio-button__orig-radio:checked+.el-radio-button__inner{
		background: none;
		color: #409EFF;
		border-left: none;
		-webkit-box-shadow: none;
	}
	.indicator .el-radio-button:first-child .el-radio-button__inner{
		border-left: none;
	}
	
	.indicator .ind-content{
		padding: 20px;
		text-align: center;
	}
	.indicator .ind-content .el-col:not(:last-child){
		border-right: 1px solid #cecece;
	}
	.indicator .ind-content .el-col p{
		color: #777;
		margin-bottom: 12px;
	}
	.indicator .ind-content .el-col span{
		color: #44b549;
		font-size: 20px;
	}
	.indicator .el-select .el-input__inner{
		height: none;
		border: none;
		background: none;
		width: 110px;
		font-family: '\5FAE\8F6F\96C5\9ED1','Avenir', Helvetica, Arial, sans-serif;
	}
</style>
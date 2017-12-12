<template>
	<el-row class="subcontent">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		 <el-tab-pane label="店铺管理" name="shopManage">店铺管理</el-tab-pane>
	    <el-tab-pane label="产品管理" name="prodManage">
	    	
	    </el-tab-pane>
	    <el-tab-pane label="订单管理" name="orderManage">订单管理</el-tab-pane>
	    <el-tab-pane label="结算管理" name="settleAccounts">结算管理</el-tab-pane>
	  </el-tabs>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'shopManage'
			}
		},
		methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      }
    }
	}
</script>

<style scoped>

</style>
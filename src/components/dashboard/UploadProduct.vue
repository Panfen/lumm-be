<template>
	<el-row class="subcontent">
		<!-- S topbar -->
		<el-row class="topbar">
			<el-col :span="18">
			</el-col>
			<el-col :span="6">
				<el-button type="success" class="el-icon-caret-left" @click="backProductList">返回列表</el-button>
			</el-col>
		</el-row>
		<!-- E topbar -->

		
		
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				//
			}
		},
		methods:{
			backProductList(){
				this.$router.push('/shop');
			}
		}
	}
</script>

<style scoped>

</style>
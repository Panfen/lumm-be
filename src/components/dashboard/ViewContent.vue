<template>
	<el-row class="subcontent">
		<el-row class="topbar view">
			<el-col	class="title">
				<h2>12种猫咪的叫声，最后一种居然是因为...</h2>
				<p>
					<span>2017-12-31</span> 
					千山慕雪 
					<i class="el-icon-view"></i>20
					<i class="el-icon-star-on"></i>18
				</p>				
			</el-col>
		</el-row>
		<el-row class="pessage">
			巴拉巴拉吧啦吧啦吧啦了喇叭
		</el-row>
	</el-row>
</template>

<script>
	import Lueditor from '../tools/Lueditor'
	export default{
		data(){
			return {

			}
		}
	}
</script>

<style scoped>
	.topbar{
		margin-bottom: 30px;
	}
	.topbar .el-col:last-child{
		text-align: center;
	}
	.topbar h2{
		padding-bottom: 12px;
		margin-bottom: 6px;
		border-bottom: 1px solid #e1e1e1;
		font-size: 20px;
		font-weight: bold;
	}
	.topbar p{
		margin-bottom: 4px;
	}
	.topbar p span{
		color: #666;
	}
	.topbar p i{
		margin: 0 4px 0 10px;
	}
</style>
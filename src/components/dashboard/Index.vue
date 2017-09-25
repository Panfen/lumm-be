<template>
	<el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">

    <el-tab-pane label="实时访问" name="first">
			<el-row class="chart">
				<highcharts :options="options1"></highcharts>
			</el-row>
    </el-tab-pane>

    <el-tab-pane label="昨日概况" name="second">
    	<el-row class="yesterday">
				<el-col :span="6">
					<span class="title">打开次数</span>
					<h3 class="count">7</h3>
					<p><label>日：</label><span class="negative">-12.50%</span></p>
					<p><label>周：</label><span class="positive">+75.50%</span></p>
					<p><label>月：</label><span class="negative">-12.50%</span></p>
				</el-col>
				<el-col :span="6">
					<span class="title">访问次数/人数</span>
					<h3 class="count">39/6</h3>
					<p><span class="negative">-11.36%</span>/<span>-</span></p>
					<p><span class="positive">+550.00%</span>/<span class="positive">+50.00%</span></p>
					<p><span class="positive">+85.71%</span>/<span class="negative">-14.29%</span></p>
				</el-col>
				<el-col :span="6">
					<span class="title">新用户数</span>
					<h3 class="count">4</h3>
					<p><span class="">-</span></p>
					<p><span class="positive">+33.33%</span></p>
					<p><span class="positive">+33.33%</span></p>
				</el-col>
				<el-col :span="6">
					<span class="title">分享次数/人数</span>
					<h3 class="count">0/0</h3>
					<p><span>-</span>/<span>-</span></p>
					<p><span>-</span>/<span>-</span></p>
					<p><span>-</span>/<span>-</span></p>
				</el-col>
			</el-row>
    </el-tab-pane>

    <el-tab-pane label="累计访问" name="third">
			<el-row class="chart">
				<highcharts :options="options2"></highcharts>
			</el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

	export default {
		data() {
			return {
				activeName: 'first',
        options1:{
        	chart: {
		        type: 'area'
			    },
        	title: {
		        text: ''
			    },
			    xAxis: {
		        categories: ['07:21', '07:51', '08:21', '08:51', '09:21', '09:51', '10:21', '10:51', '11:21', '11:51', '12:21', '12:51', '13:21', '13:51', '14:21']
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
		        data: [0, 0, 10 ,12, 23, 4, 89, 26, 36, 12, 34, 12, 18, 15,178],
			    }]
        },
        options2:{
        	chart: {
		        type: 'area'
			    },
        	title: {
		        text: ''
			    },
			    xAxis: {
		        categories: ['20170808', '20170809', '20170810', '20170811', '20170812', '20170813', '20170814', '20170815', '20170816', '20170817', '20170818', '20170819', '20170820', '20170821', '20170822'],
		        labels:{  
							step:2
						}
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
		        data: [76, 84, 95 ,112, 123, 144, 189, 226, 236, 252, 284, 312, 318, 335,378],
			    }]
        }
			}
		},
		methods: {
			handleClick(tab, event) {
        console.log(tab, event);
      }
		}
	}
</script>

<style scoped>
	.tabs{
		margin: 20px;
		padding: 20px;
		min-height: 500px;
		text-align: left;
		background: #fff;
		border: 1px solid #eee;
		font-family: '微软雅黑';
	}
	.chart{
		width: 95%;
		margin: 20px auto;
	}
	.yesterday{
		width: 95%;
		margin: 40px auto;
	}
	.yesterday .el-col{
		text-align: center;
	}
	.yesterday .el-col:nth-child(1),
	.yesterday .el-col:nth-child(2),
	.yesterday .el-col:nth-child(3){
		border-right: 1px solid #ccc
	}
	.yesterday .el-col .title{
		font-weight: 500;
		color: #333;
		display: inline-block;
		margin-bottom: 8px;
	}
	.yesterday .el-col p{
		color: #aaa;
		margin-top: 6px;
	}
	.yesterday .el-col:nth-child(1) p{
		position: relative;
	}
	.yesterday .el-col p label{
		position: absolute;
		top: 0;
		left: 0;
		color: #999;
		font-size: 14px;
	}
	.yesterday .el-col p span.positive{
		color: #7fba4f;
	}
	.yesterday .el-col p span.negative{
		color: #e15f63;
	}
	
</style>
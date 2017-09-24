<template>
	<el-row class="checkbox">
		<p v-on:click="checkboxAct">
			<i v-bind:class="{selected}"></i>
			<span>{{checkboxName}}</span>
		</p>
	</el-row>
</template>

<script>
	export default{
		data(){
			return {
				selected: ''
			}
		},
		props: {
			checkboxName: String
		},
		methods: {
			checkboxAct: function(){
				this.selected = this.selected === '' ? 'selected' : '';
			}
		}
	}
</script>

<style scope>
	.checkbox{
		height: 20px;
		line-height: 20px;
		position: relative;
		cursor: pointer;
		display: inline-block;
	}
	.checkbox p{
		display: inline-block;
	}
	.checkbox i{
		width: 16px;
		height: 16px;
		display: inline-block;
		border: 1px solid #ccc;
		margin-right: 10px;
		top: 2px;
		left: 0px;
		position: absolute;
	}
	.checkbox i.selected:after{
		content: " ";
		width: 6px;
		height: 2px; 
		background: #666;
		top: 9px;
		left: 1px;
		transform: rotate(45deg);
		position: absolute;
	}
	.checkbox i.selected:before{
		content: " ";
		width: 13px;
		height: 2px; 
		background: #666;
		top: 7px;
		left: 3px;
		transform: rotate(-45deg);
		position: absolute;
	}
	.checkbox span{
		margin-left: 30px;
	}
</style>
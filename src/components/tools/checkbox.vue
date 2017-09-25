<template>
	<el-row class="checkbox">
		<p v-on:click="checkboxAct">
			<i v-bind:class="selected"></i>
			<span>{{checkboxName}}</span>
		</p>
	</el-row>
</template>

<script>
	export default{
		data(){
			return {
				checked: ''
			}
		},
		props: {
			checkboxName: String,
			selectItem: Boolean,
		},
		computed: {
			selected: function(){
				if(this.selectItem || this.checked === 'checked'){
					return 'checked';
				}else{
					return '';
				}
			}
		},
		methods: {
			checkboxAct: function(){
				this.selectItem = false;
				this.checked = this.checked === '' ? 'checked' : '';
				this.$emit('selectedcheckbox', this.checked);
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
	.checkbox i.checked:after{
		content: " ";
		width: 6px;
		height: 2px; 
		background: #666;
		top: 9px;
		left: 1px;
		transform: rotate(45deg);
		position: absolute;
	}
	.checkbox i.checked:before{
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
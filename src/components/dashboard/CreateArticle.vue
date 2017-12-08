<template>
	<el-row class="subcontent">
		<el-row>
			<el-input class="title-input" v-model="title" placeholder="文章标题"></el-input>
			<el-select v-model="type" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
		</el-row>
		<el-row>
			<mavon-editor v-model="pessage" :ishljs="false"/>
		</el-row>
		<el-row class="control" type="flex" justify="end">
			<el-button type="primary" @click="weixinPreview">微信预览</el-button>
			<el-button type="success" @click="publicArticle">立即发布</el-button>
		</el-row>
	</el-row>

</template>

<script>
	export default{
		data(){
			return {
				title: '',
				options: [{
					value: 'option1',
					label: '原创'
				},{
					value: 'option2',
					label: '转载'
				}],
				type: '',
				pessage: ''
			}
		},
		methods: {
			weixinPreview(){
				console.log('微信预览');
			},
			publicArticle(){
				console.log('立即发布');
			}
		}
	}
</script>

<style scoped>
	.title-input{
		width: 30%;
		margin-bottom: 20px;
	}
	.v-note-wrapper{
		min-height: 406px;
	}
	.control{
		margin-top: 20px;
	}
</style>
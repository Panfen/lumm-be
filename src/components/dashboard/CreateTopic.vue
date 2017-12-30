<template>
	<el-row class="subcontent">
		<el-row class="topbar">
			<el-col :span="18">
				<el-input class="title-input" v-model="title" placeholder="话题名称"></el-input>
				<el-select v-model="type" placeholder="类型选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
			</el-col>
			<el-col :span="6">
				<el-button type="success" @click="backTopicList" icon="el-icon-caret-left">返回列表</el-button>
			</el-col>
		</el-row>
		<el-row>
			<mavon-editor v-model="pessage" :ishljs="false" :toolbars="toolbars"/>
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
					label: '找认领'
				},{
					value: 'option2',
					label: '找卖家'
				},{
					value: 'option3',
					label: '找猫猫'
				},{
					value: 'option4',
					label: '讨经验'
				},{
					value: 'option5',
					label: '爱分享'
				}],
				type: '',
				pessage: '',
				toolbars: {
					bold: true, // 粗体
		      italic: true, // 斜体
		      header: false, // 标题
		      underline: true, // 下划线
		      strikethrough: true, // 中划线
		      mark: true, // 标记
		      superscript: true, // 上角标
		      subscript: true, // 下角标
		      quote: true, // 引用
		      ol: true, // 有序列表
		      ul: true, // 无序列表
		      link: true, // 链接
		      imagelink: true, // 图片链接
		      code: true, // code
		      table: true, // 表格
		      fullscreen: true, // 全屏编辑
		      readmodel: true, // 沉浸式阅读
		      htmlcode: true, // 展示html源码
		      help: true, // 帮助
		      /* 1.3.5 */
		      undo: true, // 上一步
		      redo: true, // 下一步
		      trash: true, // 清空
		      save: true, // 保存（触发events中的save事件）
		      /* 1.4.2 */
		      navigation: true, // 导航目录
		      /* 2.1.8 */
		      alignleft: true, // 左对齐
		      aligncenter: true, // 居中
		      alignright: true, // 右对齐
		      /* 2.2.1 */
		      subfield: true, // 单双栏模式
		      preview: true, // 预览
				}
			}
		},
		methods: {
			weixinPreview(){
				//
			},
			publicArticle(){
				//
			},
			backTopicList(){
				this.$router.push('/topic');
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

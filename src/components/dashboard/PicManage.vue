<template>
	<el-row class="subcontent">
		<!-- S  topbar -->
		<el-row class="topbar">
			<el-col :span="18">
				<el-col :span="8">
					<el-input placeholder="图片名称" icon="search" v-model="picname" :on-icon-click="handleSearch"></el-input>
				</el-col>
				<el-button class="refresh-pic" icon="el-icon-refresh">换一批</el-button>
				<span class="pic-amount">共 125 张</span>
			</el-col>
			<el-col :span="6">
				<el-button type="success" id="upload-pic">上传图片</el-button>
				<el-button type="primary" id="manage-pic">批量管理</el-button>
			</el-col>
		</el-row>
		<!-- E topbar -->

		<!-- pic list -->
		<el-row class="piclist">
			<el-checkbox-group v-model="checkedPics" @change="handleCheckedPicsChange">
				<ul>
					<li v-for="(url,index) in urlList" class="pic-wrap">
						<img v-bind:src="url" width="200" height="120" @click="viewPicAct(index)"/>
						<el-checkbox :key="url" class="pic-checkbox"></el-checkbox>
					</li>
				</ul>
			</el-checkbox-group>
			<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
		</el-row>

		<!-- 弹出层 -->
		<el-dialog title="图片查看" :visible.sync="dialogVisible" width="30%" v-bind:showClose="false">
			<p>仙女布偶</p>
		  <img v-bind:src="currentUrl">
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible=false">取 消</el-button>
		    <el-button type="danger" @click="delePicAct">删 除</el-button>
		  </span>
		  <i class="el-icon-arrow-left prev" @click="prevPicAct"></i>
			<i class="el-icon-arrow-right next" @click="nextPicAct"></i>
		</el-dialog>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				picname: '',
				currentIndex: 0,
				currentUrl: '',
				checkAll: false,
				checkedPics: '',
				isIndeterminate: true,
				urlList: ['http://p3.so.qhimgs1.com/bdr/_240_/t01af075dc8036b8ad3.jpg',
									'http://p0.so.qhimgs1.com/bdr/_240_/t01979009503370fd70.jpg',
									'http://p1.so.qhimgs1.com/bdr/_240_/t01afb32fc2cfcdcedd.jpg',
									'http://p5.so.qhimgs1.com/bdr/_240_/t0112343dc49d5ee49b.jpg',
									'http://p1.so.qhimgs1.com/bdr/_240_/t0148896d9fe40741c1.jpg',
									'http://p5.so.qhimgs1.com/bdr/_240_/t01dd8b291e0798717b.jpg',
									'http://p3.so.qhimgs1.com/bdr/_240_/t0152e74cb98fec1b13.jpg',
									'http://p1.so.qhimgs1.com/bdr/_240_/t015dfce6549888df7d.jpg',
									'http://p1.so.qhimgs1.com/bdr/_240_/t01e0a34cdea51eca5d.jpg',
									'http://p0.so.qhimgs1.com/bdr/_240_/t01e7cce6ca35c5ac8a.jpg',
									'http://p0.so.qhimgs1.com/bdr/_240_/t01920928f47884b03a.jpg',
									'http://p0.so.qhimgs1.com/bdr/_240_/t01e33a5b3f61ec98e4.jpg',
									'http://p0.so.qhimgs1.com/bdr/_240_/t0136b18f5b94254eac.jpg',
									'http://p1.so.qhimgs1.com/bdr/_240_/t0161daa340ff02dd81.jpg',
									'http://p2.so.qhimgs1.com/bdr/_240_/t019d0aeac9b7fc1892.jpg'],
			}
		},
		methods: {
      handleSearch(){
      	//
      },
      viewPicAct(index){
      	this.currentIndex = index;
      	this.currentUrl = this.urlList[index];
      	this.dialogVisible = true;
      },
      delePicAct(){
      	//
      },
      prevPicAct(){
      	this.currentIndex = this.currentIndex-- <= 0 ? 0 : this.currentIndex--;
      	this.currentUrl = this.urlList[this.currentIndex];
      },
      nextPicAct(){
      	this.currentIndex = this.currentIndex++ >= this.urlList.length - 1 ? this.urlList.length - 1 : this.currentIndex++;
      	this.currentUrl = this.urlList[this.currentIndex];
      },
      handleCheckedPicsChange(value){
      	console.log(value)
      	var checkedCount = value.length;
        this.checkAll = checkedCount === this.urlList.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.urlList.length;
      },
      handleCheckAllChange(val) {
        this.checkedPics = val ? this.urlList : [];
        this.isIndeterminate = false;
      },
    }
	}
</script>

<style>
	.topbar .el-col:last-child{
		text-align: right;
	}
	.refresh-pic{
		margin: 0 6px;
	}
	.pic-amount{
		font-size: 12px;
	}
	#manage-pic{
		float: right;
	}
	#upload-pic{
		margin-left: 6px;
		float: right;
	}
	.piclist{
		margin-top: 20px;
	}
	.piclist ul li.pic-wrap{
		width: 200px;
		height: 120px;
		cursor: pointer;
		display: inline-block;
		margin: 0 6px 6px 0;
		position: relative;
	}
	.piclist ul li.pic-wrap .pic-checkbox{
		top: 4px;
		right: 4px;
		position: absolute;
	}
	.el-dialog__body{
		position: relative;
		text-align: center;
	}
	.el-dialog__body p{
		margin-bottom: 6px;
	}
	.el-dialog__body i{
		width: 60px;
		height: 100%;
		top:0;
		display: block;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.el-dialog__body i:hover{
		transform: scale(1.2);
	}
	.el-dialog__body i.prev{
		left: 10px;
	}
	.el-dialog__body i.next{
		right: 10px;
	}
</style>
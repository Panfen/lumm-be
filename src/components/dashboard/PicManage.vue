<template>
	<el-row class="subcontent">
		<!-- S  topbar -->
		<el-row class="topbar">
			<el-col :span="6">
				<el-input placeholder="图片名称" icon="search" v-model="picname" :on-icon-click="handleSearch"></el-input>
			</el-col>
			<el-col :span="6" :offset="12">
				<el-button type="success">上传图片</el-button>
			</el-col>
		</el-row>
		<!-- E topbar -->

		<!-- pic list -->
		<el-row class="piclist">
			<ul>
				<li v-for="(url,index) in urlList">
					<img v-bind:src="url" width="200" height="120" @click="viewPicAct(index)"/>
				</li>
			</ul>
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
				urlList: ['http://p3.so.qhimgs1.com/bdr/_240_/t01af075dc8036b8ad3.jpg',
									'http://p2.so.qhmsg.com/bdr/_240_/t011c1f798ef18a7027.jpg',
									'http://p1.so.qhimgs1.com/bdr/_240_/t01afb32fc2cfcdcedd.jpg',
									'http://p3.so.qhmsg.com/bdr/_240_/t0148ae67d964960498.jpg',
									'http://p1.so.qhmsg.com/bdr/_240_/t01449a7e508ef5e356.jpg',
									'http://p2.so.qhmsg.com/bdr/_240_/t017bce9f966c9fb257.jpg',
									'http://p0.so.qhimgs1.com/bdr/_240_/t01e7cce6ca35c5ac8a.jpg',
									'http://p5.so.qhimgs1.com/bdr/_240_/t01dd8b291e0798717b.jpg',],
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
      	console.log(this.currentIndex)
      	this.currentUrl = this.urlList[this.currentIndex];
      },
      nextPicAct(){
      	this.currentIndex = this.currentIndex++ >= this.urlList.length - 1 ? this.urlList.length - 1 : this.currentIndex++;
      	this.currentUrl = this.urlList[this.currentIndex];
      }
    }
	}
</script>

<style>
	.topbar .el-col:last-child{
		text-align: right;
	}
	.piclist{
		margin-top: 20px;
	}
	.piclist ul li{
		cursor: pointer;
		display: inline-block;
		margin: 0 10px 10px 0;
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
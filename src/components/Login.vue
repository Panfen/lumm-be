<template>
	<el-row class="content">
		<el-col :xs="24" :sm="{span:6,offset:9}" class="login-box">
			<img src="../assets/logo.png" width="140" height="140">
			<span class="title">撸猫猫管理后台</span>
			<el-row class="input-box">
				<el-input v-model="username" placeholder="用户名" type="text"></el-input>
				<el-input v-model="password" placeholder="密　码" type="password"></el-input>
				<el-button type="primary" v-on:click="loginAct">登录</el-button>
			</el-row>
		</el-col>
		<canvas id="canvas"></canvas>
	</el-row>
</template>

<script>
	export default {
		data(){
			return {
				username: '',
				password: ''
			}
		},
		mounted(){
			this.drawBackgound = new drawBackgound();
		},
		methods:{
			loginAct(){
				this.$router.push('/dashboard')
			}
		}
	}

	// canvas绘制动态背景
	function drawBackgound(){
	  var canvas = document.getElementById('canvas');
	  var ctx = canvas.getContext('2d');
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	  ctx.lineWidth = .3;
	  ctx.strokeStyle = (new Color(150)).style;

	  var mousePosition = {
	    x: 30 * canvas.width / 100,
	    y: 30 * canvas.height / 100
	  };

	  var dots = {
	    nb: 750,
	    distance: 50,
	    d_radius: 100,
	    array: []
	  };

	  function colorValue(min) {
	    return Math.floor(Math.random() * 255 + min);
	  }
  
	  function createColorStyle(r,g,b) {
	    return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
	  }
  
	  function mixComponents(comp1, weight1, comp2, weight2) {
	    return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
	  }
  
	  function averageColorStyles(dot1, dot2) {
	    var color1 = dot1.color,
	        color2 = dot2.color;
	    
	    var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
	        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
	        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
	    return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
	  }
  
	  function Color(min) {
	    min = min || 0;
	    this.r = colorValue(min);
	    this.g = colorValue(min);
	    this.b = colorValue(min);
	    this.style = createColorStyle(this.r, this.g, this.b);
	  }

	  function Dot(){
	    this.x = Math.random() * canvas.width;
	    this.y = Math.random() * canvas.height;

	    this.vx = -.5 + Math.random();
	    this.vy = -.5 + Math.random();

	    this.radius = Math.random() * 2;

	    this.color = new Color();
	  }

	  Dot.prototype = {
	    draw: function(){
	      ctx.beginPath();
	      ctx.fillStyle = this.color.style;
	      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
	      ctx.fill();
	    }
	  };

	  function createDots(){
	    for(var i = 0; i < dots.nb; i++){
	      dots.array.push(new Dot());
	    }
	  }

	  function moveDots() {
	    for(var i = 0; i < dots.nb; i++){
	      var dot = dots.array[i];
	      if(dot.y < 0 || dot.y > canvas.height){
	        dot.vx = dot.vx;
	        dot.vy = - dot.vy;
	      }
	      else if(dot.x < 0 || dot.x > canvas.width){
	        dot.vx = - dot.vx;
	        dot.vy = dot.vy;
	      }
	      dot.x += dot.vx;
	      dot.y += dot.vy;
	    }
	  }

	  function connectDots() {
	    for(var i = 0; i < dots.nb; i++){
	      for(var j = 0; j < dots.nb; j++){
	        var i_dot = dots.array[i];
	        var j_dot = dots.array[j];

	        if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
	          if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
	            ctx.beginPath();
	            ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
	            ctx.moveTo(i_dot.x, i_dot.y);
	            ctx.lineTo(j_dot.x, j_dot.y);
	            ctx.stroke();
	            ctx.closePath();
	          }
	        }
	      }
	    }
	  }

	  function drawDots() {
	    for(var i = 0; i < dots.nb; i++){
	      var dot = dots.array[i];
	      dot.draw();
	    }
	  }

	  function animateDots() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    moveDots();
	    connectDots();
	    drawDots();

	    requestAnimationFrame(animateDots);	
	  }

	  document.getElementById("canvas").onmousemove = function(e){
	    mousePosition.x = e.pageX;
	    mousePosition.y = e.pageY;
	  };

	  document.getElementById("canvas").onmouseleave = function(e){
	    mousePosition.x = canvas.width / 2;
	    mousePosition.y = canvas.height / 2;
	  };

	  createDots();
	  requestAnimationFrame(animateDots);	
	};

</script>

<style scoped>
	.el-row.content{
		width: 100%;
		height: 100%;
		position: relative;
		background: #000;
	}
	.title{
		color: #fff;
		font-size: 24px;
		display: block;
		margin: 12px 0;
	}
	.login-box{
		margin-top: 80px;
		padding:60px 30px;
		position: absolute;
		background: rgba(90, 90, 90, 0.6);
	/*	border:1px solid #999;*/
	}
	.el-row.input-box{
		width: 80%;
		margin: 0 auto;
	}
	
	.input-box .el-input{
		margin: 8px auto;
		background: rgba(90, 90, 90, 0.6);
	}
	.input-box .el-button{
		width: 100%;
		margin: 12px auto;
	}
	canvas{
		width: 100%;
		height: 100%;
	}
</style>
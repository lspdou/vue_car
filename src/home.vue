<template id="home">
	
	
	<div class="h_zong">
		
		<mt-header :title="str" fixed class="header">
			  <router-link to="/" slot="left" >
			    <mt-button icon="back" >返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		
		
		<div>
			<img src="./assets/file_58d22adc22538.png" style="width: 100vw;height: 200px;"/>
		</div>
		
		<div class="nav">
			<div class="nav_1">
				<router-link  to='/health'>
					<img src="./assets/file_58d22b9347eb5.png" />
					<p>预约检修</p>
				</router-link>
			</div>
			<div class="nav_1">
				<router-link  to='/health'>
					<img src="./assets/file_58d22a97dcec1.png" />
					<p>配件商城</p>
				</router-link>
			</div>
			<div class="nav_1">
				<router-link  to='/xincar' >
					<img src="./assets/file_58d22a98402d8.png" />
					<p>新车快讯</p>
				</router-link>
			</div>
			<div class="nav_1">
				<router-link  to='/health' >
					<img src="./assets/file_58ed90c5e0149.png" />
					<p>积分兑换</p>
				</router-link>
			</div>
		</div>
		
		<div class="navxia">
			<a style="display: block;">
				<img src="./assets/file_58e5b7ff8dbd8.png" height="30" style="float: left;"/>
				<a style="float: left;margin-top: 0.1rem;font-size: 0.3rem;color: #4d99eb;">热门配件</a>
			</a>
		</div>
		
		<div class="con">
			<div class="c_left">
				<img src="./assets/file_58d22a96ccca1.png"/>
			</div>
			<div class="c_right">
				<p><img src="./assets/file_58d230e51cea6.png"/></p>
				<p><img src="./assets/file_58d230e50e446.png"/></p>
			</div>
		</div>
		
		<div class="navxia">
			<a style="display: block;">
				<img src="./assets/file_58e5b7ff8dbd8.png" height="30" style="float: left;"/>
				<a style="float: left;margin-top: 0.1rem;font-size: 0.3rem;color: #4d99eb;">团购活动</a>
			</a>
		</div>
		
		<div class="h_list" v-for="item in list">
			<img :src="item.imgsrc" class="h_datu"/>
			<div class="h_detail">
				<div class="h_d_left">{{item.title}}</div>
				<div class="h_d_right">¥{{item.money}}</div>
			</div>
		</div>
		
		
		
		<footer class="footer">
			<div>
				<router-link  to='/home' >
					<i class="iconfont icon-caipu" style="color: #3e85e0;"></i>
					<div class="zi" style="color: #3e85e0;">首页</div>
				</router-link>
			</div>
			<div>
				<router-link  to='/cheyou' >
					<i class="iconfont icon-1"></i>
					<div class="zi">车友圈</div>
				</router-link>
			</div>
		
			<div>
				<router-link to='/my'  class='link' >
					<i class="iconfont icon-wode"></i>
					<div class="zi">我的</div>
				</router-link>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
    name: 'home',
    data() {
      	return {
	    	str: '首页',
	  		flag:true,
	      	list:[]
      	}
    },
  	mounted(){
		this.$emit("father",this.str)
		
		var _this=this;
		axios.get("js/qichetaocan.json").then(function(res){
			_this.list=res.data.list
	    	console.log(_this.list)
	    })
  	},
	  
}
</script>

<style>
	.h_zong{margin-bottom: 44px;}
	.nav{height: 1.4rem;overflow: hidden;}
	.nav_1{width: 25vw;text-align: center;float: left;}
	.nav_1 img{width: 0.85rem;height:  0.85rem ;}
	.navxia{height: 0.6rem;overflow: hidden;border-top: 0.1rem solid #eee;border-bottom: 1px #ccc solid;padding-top: 0.1rem;}
	.con{height: 2.6rem;overflow: hidden;}
	.c_left,.c_right{width: 50vw;float: left;}
	.c_left img{height: 2.6rem;width: 50vw;}
	.c_right p img{height: 1.3rem;width: 50vw;display: block;}
	.h_datu{width: 100vw;display: block;}
	.h_detail{height: 1rem;padding-left: 0.3rem;padding-right: 0.3rem;overflow: hidden;}
	.h_d_left{height: 1rem;color: #666;font-size: 0.18rem;line-height: 1rem;width: 40vw;float:left;}
	.h_d_right{width: 40vw;height: 1rem;float: right;line-height: 1rem;color: #f4af6d;font-size: 0.28rem;}
</style>
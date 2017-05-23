<template id="cheyou">
	<div class="h_zong">
		<mt-header :title="str" fixed class="header">
			  <router-link to="/" slot="left" >
			    <mt-button icon="back" >返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<mt-swipe :auto="4000" style="height:4rem;width:100vw; overflow: hidden;margin-top: 40px;">
		  <mt-swipe-item class='sl1' style="height:4rem;width: 100vw;"><img src="./assets/file_58d8770b76626.png"/></mt-swipe-item>
		  <mt-swipe-item class='sl1' style="height:4rem;width: 100vw;"><img src="./assets/file_58d8770b409f8.png"/></mt-swipe-item>
		  <mt-swipe-item class='sl1' style="height:4rem;width: 100vw;"><img src="./assets/368x184_0_autohomecar__wKgH1FkVbaOACtl5AAoD36twdhY951.jpg"/></mt-swipe-item>
		  <mt-swipe-item class='sl1' style="height:4rem;width: 100vw;"><img src="./assets/1024x0_1_q87_autohomecar__wKgFXFhaO_yAOmjFAAiiI5n6Juk650.jpg"/></mt-swipe-item>
		</mt-swipe>
		
		<div class="baoyang">
			<ul>
				<li class="c_tu"><img src="./assets/file_58d8761716f1d.png"/></li>
				<li class="c_tu"><img src="./assets/file_58d876223a6b4.png"/></li>
				<li class="c_tu"><img src="./assets/file_58d876224753c.png"/></li>
				<li class="c_tu"><img src="./assets/file_58d876223de27.png"/></li>
			</ul>
		</div>
		
		
		<div class="c_jing">
			<a style="display: block;">
				<span class="c_lan"></span>
				<a style="float: left;margin-top: 0.1rem;font-size: 0.3rem;color: #666;">精选</a>
			</a>
		</div>
		
		
		
		
		<div class="c_list" v-for="(item,i) in list">
			<router-link :to="'/chedetail/'+i">
				<img :src="'src/assets/'+item.imgsrc"/>
				<p>{{item.title}}</p>
			</router-link>
		</div>
		
		
		
		
		
		<footer class="footer">
			<div>
				<router-link  to='/home'>
					<i class="iconfont icon-caipu" ></i>
					<div class="zi">首页</div>
				</router-link>
			</div>
			<div>
				<router-link  to='/cheyou'>
					<i class="iconfont icon-1" style="color: #3e85e0;"></i>
					<div class="zi" style="color: #3e85e0;">车友圈</div>
				</router-link>
			</div>
		
			<div>
				<router-link to='/my'  class='link' >
					<i class="iconfont icon-wode" ></i>
					<div class="zi">我的</div>
				</router-link>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
	  name: 'cheyou',
	  data () {
	    return {
	    	str: '车友圈',
	  		flag:true,
	      	list:[]
      	}
	  },
	  mounted(){
	  	var _this=this;
		axios.get("js/che_list.json").then(function(res){
			_this.list=res.data.list
	    	console.log(_this.list)
	    })
	  	
	  	
		this.$emit("father",this.str)
  	  }
	}
</script>

<style>
	.sl1 img{height: 4rem;width: 100vw;}
	.baoyang{height: 3.65rem;padding: 0.2rem 0.25rem;border-bottom: 0.1rem #f2f2f2 solid;}
	.baoyang ul{overflow: hidden;width: 100vw;}
	.c_tu{height: 1.7rem;margin: 0 0.3rem 0.3rem 0;background: #ccc;width: 44vw;float: left;}
	.c_tu img{height: 1.7rem;width: 44vw;display: block;}
	.c_lan{float: left;height: 0.5rem;width: 0.15rem;background: #0086B3;margin-right: 0.2rem;}
	.c_jing{border-bottom: 1px #ccc solid;overflow: hidden;}
	.c_list{height: 2rem;padding: 0.3rem;border-bottom: 0.1rem #f2f2f2 solid;overflow: hidden;}
	.c_list img{height: 2rem;width: 3rem;float: left;}
	.c_list p{float: right;width: 2.4rem;}
</style>
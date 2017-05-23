<template id='my'>
	<div>
		<mt-header :title="str" fixed class="header">
			  <router-link to="/" slot="left" >
			    <mt-button icon="back" >返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		
		<div class="myTop">
			<img src="./assets/default_photo.png" alt="" />
			请先登录
			
			<router-link to='/login'  class='login'></router-link>
		</div>
		<div>
			<mt-cell title="收获地址" >
			  <img slot="icon" src="./assets/file_58e5b7ff8dbd8.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的订单" >
			  <img slot="icon" src="./assets/file_58e5b7ff8dbd8.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="购物车" >
			  <img slot="icon" src="./assets/file_58e5b7ff8dbd8.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="系统通知" >
			  <img slot="icon" src="./assets/file_58e5b7ff8dbd8.png" width="24" height="24">
			</mt-cell>
		</div>
		
		
		
		<footer class="footer">
			<div>
				<router-link  to='/home' >
					<i class="iconfont icon-caipu" ></i>
					<div class="zi" >首页</div>
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
					<i class="iconfont icon-wode" style="color: #3e85e0;"></i>
					<div class="zi" style="color: #3e85e0;">我的</div>
				</router-link>
			</div>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'my',
		data(){
			return{
				str:"我的"
			}
		}
	}
</script>

<style>
	*{
		margin:0;padding: 0;
	}
	.myTop{
		height: 2rem;background: url(./assets/top_bg.gif) no-repeat ;background-size:100% 2rem;
		line-height: 2rem;position: relative;font-size:0.48rem;color:#fff;text-align: center;
		margin-top: 40px;
	}
	.myTop img{
		border: 0;
		position: absolute;
	    width: 1.0rem;
	    height: 1rem;
	    margin-right: 0.5rem;
	    border-radius: 50%;
	   	top:0.5rem ;left: 0.4rem;float: left;
    }
    .myTop .login{
	    position: absolute;
	    right: 0.2rem;
	    top: 50%;
	    margin-top: -0.3rem;
	    width: 0.6rem;
	    height:0.6rem;
	    line-height: 0.6rem;
	    font-size: 0.4rem;
    }
    
</style>
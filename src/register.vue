<template id="register">
	<div>
		<mt-header :title="str" fixed class="header">
			  <router-link to="/login" slot="left" >
			    <mt-button icon="back" >返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<div class="register">
			<input type="text" placeholder="请输入手机号"  id="name"/>
			<input type="text" placeholder="请输入密码" id='pwd'/>
			<input type="text" placeholder="请输入密码" id='pwds'/>
			<div>
				<a class="btn"  @click="tap()">确认注册</a>
			    <!--<router-link class="btns"  to=""  >登录</router-link>-->	
			</div>
	          	      
		</div>
	</div>
	
</template>

<script>
	export default{
		name:'register',
		data(){
			return{
				str:"注册"
			}
		},
		methods:{
			tap(){
				var _this=this;
				var reg=/^1[34578]\d{9}$/g;
				if($("#pwd").val()==$("#pwds").val() && reg.test($("#name").val())){
					$.ajax({
						type:"get",
						url:"  http://datainfo.duapp.com/shopdata/userinfo.php",
						data:{
							status:'register',
							userID:$('#name').val(),
							password:$("#pwd").val()
							},
						dataType:'json',
						success:function(data){
							if(data==0){
								alert('该账号已注册');
							}else if(data==1){
								
								_this.$router.push('/login')
								
								alert('注册成功请前往登陆页面');
								$('#name')[0].value='';
								$("#pwd")[0].value='';
							}else if(data==2){
								alert('数据库错误');
								
							}
						}
					});
				}else{
					console.log('两次输入密码或不一致手机号不正确');
				}
			}
		},
		mounted(){
			this.$emit('to-parent',this.str)
		}
		
	}
</script>

<style>
	.register{margin-top: 50px;}
	.register input{
		margin:0 auto;
		margin-top: 0.4rem;width: 5.8rem;height: 0.86rem;
		border:none;background: #fff;color:#b4b4b4;
		text-indent: 0.3rem;font: 0.26rem/0.86rem "微软雅黑";
		border-radius: 0.1rem;display: block;border:1px solid #ccc
	}
	.btn,.btns{
		margin:0 auto;margin-top: 0.5rem;width: 5.49rem;
		height: 0.84rem;width: 5.47rem;color:#fff;
		text-align: center;border-radius: 0.1rem;
		font:0.36rem/0.84rem "微软雅黑";display: block;text-decoration: none;display: block;
		background: #55A532;border:1px solid #000;margin-top: 0.6rem;
	}
</style>
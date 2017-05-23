<template id="xincar">

	<div>
		<mt-header :title="str" fixed class="header">
			  <router-link to="/" slot="left" >
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<div class="d_con xin_c">
			<div v-for="item in list">
				<img :src="'src/assets/'+item.imgsrc"/>
				<h1>{{item.title}}</h1>
			</div>
		</div>
	</div>



</template>

<script>
	export default{
		name:'xincar',
		data(){
			return{
				str:"新车特讯",
				list:[]
			}
		},
		mounted(){
		  	var _this=this;
			axios.get("js/xincar.json").then(function(res){
				_this.list=res.data.list
		    })
		  }
	}
</script>

<style>
	.xin_c img{height: 4rem;}
</style>
<template id="chedetail">
	<div>
		
		<mt-header :title="str" fixed class="header">
			  <router-link to="/cheyou" slot="left" >
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<div class="d_con">
			<div v-for="item in list">
				<img :src="'src/assets/'+item.imgsrc"/>
				<h1>{{item.title}}</h1>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
	  name: 'chedetail',
	  data(){
	  	return{
	  		str:"详情",
	  		list:[]
	  	}
	  },
	  mounted(){
	  	var _this=this;
		axios.get("js/che_detail.json").then(function(res){
			_this.list=res.data[_this.$route.params.id]
	    })
	  }
	}
</script>

<style>
	.d_con{margin-top: 40px;}
	.d_con img{width: 100vw;height: 4rem;}
</style>
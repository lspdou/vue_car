<template>
  <div id="app">
    <router-view ></router-view>
	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	.header{background: #1c1b21;}
	.footer{border-top: 1px solid #ccc;height: 44px;position: fixed;bottom: 0;width: 100vw;background: #fff;}
	.footer>div{float: left;width: 33vw;text-align: center;}
	.footer .zi{font-size: 0.17rem;color: #666;}
	.iconfont{font-size: 0.46rem;}
</style>

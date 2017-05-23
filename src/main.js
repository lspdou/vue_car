import Vue from 'vue'
import App from './App.vue'
import a from './a.vue'
import Home from './home.vue'
import Cheyou from './cheyou.vue'
import Chedetail from './che_detail.vue'
import My from './my.vue'
import Login from './login.vue'
import Register from './register.vue'
import Xincar from './xincar.vue'


import Mint from 'mint-ui';
Vue.use(Mint);





import VueRouter from 'vue-router';
Vue.use(VueRouter);

var routes=[
		{path:"/",component:Home},
		{path:"/home",component:Home},
		{path:"/cheyou",component:Cheyou},
		{path:"/my",component:My},
		{path:"/login",component:Login},
		{path:"/register",component:Register},
		{path:"/xincar",component:Xincar},
		{path:"/chedetail/:id",component:Chedetail}
]

var router=new VueRouter({
	routes:routes
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})

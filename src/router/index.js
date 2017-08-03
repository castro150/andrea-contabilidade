import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

// Pointing routes to the components they should use
const routes = [{
	path: '/',
	name: 'home',
	component: Home
}, {
	// Any invalid route will redirect to home
	path: '*',
	redirect: '/'
}]

export default new Router({
	routes,
	mode: 'history'
})

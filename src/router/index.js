import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Utils from '@/components/pages/Utils'

Vue.use(Router)

// Pointing routes to the components they should use
const routes = [{
	path: '/',
	name: 'home',
	component: Home
}, {
	path: '/about',
	name: 'about',
	component: About
}, {
	path: '/utils',
	name: 'utils',
	component: Utils
}, {
	// Any invalid route will redirect to home
	path: '*',
	redirect: '/'
}]

export default new Router({
	routes,
	mode: 'history'
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Utils from '@/components/pages/Utils'
import Calculations from '@/components/pages/Calculations'

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
	path: '/calculations',
	name: 'calculations',
	component: Calculations
}, {
	// Any invalid route will redirect to home
	path: '*',
	redirect: '/'
}]

export default new Router({
	routes,
	mode: 'history'
})

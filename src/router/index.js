import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

// Pointing routes to the components they should use
const routes = [{
	path: '/',
	name: 'Hello',
	component: Hello
}, {
	// Any invalid route will redirect to home
	path: '*',
	redirect: '/'
}]

export default new Router({
	routes,
	mode: 'history'
})

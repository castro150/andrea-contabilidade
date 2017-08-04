// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import PageContent from './components/global/PageContent'

Vue.component('icon', Icon)
Vue.component('page-content', PageContent)

Vue.config.productionTip = false

window.$bus = new Vue()

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
}).$mount('#app')

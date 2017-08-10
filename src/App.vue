<template>
<div id="app">
  <page-header></page-header>

  <router-view></router-view>

  <page-footer></page-footer>
</div>
</template>

<script>
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="scss">
@import 'assets/css/main.scss';
</style>

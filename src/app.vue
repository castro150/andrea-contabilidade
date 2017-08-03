<template>
<div id="app">
  <page-header></page-header>

  <router-view></router-view>

  <page-footer></page-footer>
</div>
</template>

<script>
import PageHeader from './components/page-header'
import PageFooter from './components/page-footer'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="sass">
  $pink: #002E53
  // $pink: #78FFDE
  // $pink: #0069D2
  // $pink: #FFFFFF
  $pink-invert: #000000
  $pink-invert: #FFFFFF

  $primary: $pink
  // $primary-invert: $pink-invert

  @import "../node_modules/bulma/bulma"
</style>

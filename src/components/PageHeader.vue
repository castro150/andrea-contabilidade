<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="../assets/logo.png" class="logo" />
      </div>
    </div>
    <hr class="is-marginless" />
  </section>

  <nav-bar></nav-bar>
</div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'page-header',
  components: {
    NavBar
  }
}
</script>

<style lang="css" scoped>
.logo {
  width: 320px;
}
</style>

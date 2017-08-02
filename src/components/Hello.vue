<template>
<section class="section">
  <div class="container">
    <h1 class="title">
        Hello World
      </h1>
    <p class="subtitle">
      {{ msg }}, my first website with <strong>Bulma</strong>!
    </p>
    <button class="button is-info">Outlined</button>
    <button class="button is-info is-loading is-pulled-right">Outlined</button>
  </div>
</section>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

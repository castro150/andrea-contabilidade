<template>
<div class="card">
  <a :href="href" target="_blank"><img :src="'/static/links/' + img" /></a>
</div>
</template>

<script>
export default {
  name: 'card-link',
  props: ['href', 'img']
}
</script>

<style lang="css" scoped>
.card {
  padding: 5px;
  height: 145px;
}
</style>

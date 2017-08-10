<template>
<a :href="href" target="_blank">
  <div class="message">
    <div class="message-body has-text-centered">
      <div class="message-icon">
        <icon :name="icon" scale="4"></icon>
      </div>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</a>
</template>

<script>
export default {
  name: 'message-link',
  props: ['href', 'icon']
}
</script>

<style lang="css" scoped>
.message {
  height: 170px;
  width: 180px;
}

.message-icon {
  padding: 15px;
}

p {
  font-size: 12px;
}

a {
  padding: 12px;
}
</style>

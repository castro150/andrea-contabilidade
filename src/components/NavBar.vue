<template>
<nav class="navbar whitesmoke-bg">
  <div class="container">
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link :to="'/'" class="navbar-item">Home</router-link>

        <router-link :to="'/about'" class="navbar-item">Sobre Nós</router-link>

        <div class="navbar-item has-dropdown is-hoverable is-right">
          <a class="navbar-link">Links</a>
          <div class="navbar-dropdown">
            <router-link :to="'/utils'" class="navbar-item">Links Úteis</router-link>
            <router-link :to="'/calculations'" class="navbar-item">Cálculos</router-link>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable is-right">
          <a class="navbar-link">Consultas</a>
          <div class="navbar-dropdown">
            <router-link :to="'/'" class="navbar-item">Inscrições</router-link>
            <router-link :to="'/'" class="navbar-item">Documentos</router-link>
            <router-link :to="'/'" class="navbar-item">Atividades</router-link>
          </div>
        </div>

        <router-link :to="'/'" class="navbar-item">Contato</router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="css" scoped>
.whitesmoke-bg {
  background-color: whitesmoke;
}
</style>

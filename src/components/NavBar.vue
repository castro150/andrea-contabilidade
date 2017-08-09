<template>
<nav class="navbar whitesmoke-bg is-fex-top">
  <div class="container">
    <div class="navbar-menu">
      <div class="navbar-end">
        <a href="#home" class="navbar-item">Home</a>

        <a href="#about" class="navbar-item">Sobre Nós</a>

        <div class="navbar-item has-dropdown is-hoverable is-right">
          <a class="navbar-link">Links</a>
          <div class="navbar-dropdown">
            <a href="#utils" class="navbar-item">Links Úteis</a>
            <a href="#calculations" class="navbar-item">Cálculos</a>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable is-right">
          <a class="navbar-link">Consultas</a>
          <div class="navbar-dropdown">
            <a href="#registrations" class="navbar-item">Inscrições</a>
            <a href="#documents" class="navbar-item">Documentos</a>
            <a href="#activities" class="navbar-item">Atividades</a>
          </div>
        </div>

        <a href="#contact" class="navbar-item">Contato</a>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="css" scoped>
.whitesmoke-bg {
  background-color: whitesmoke;
}

nav {
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.4);
  -moz-box-shadow:    0 1px 3px rgba(0,0,0,0.4);
  box-shadow:         0 1px 3px rgba(0,0,0,0.4);
}
</style>

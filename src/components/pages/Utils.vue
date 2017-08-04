<template>
<page-content>
  <h1 class="title">Links Úteis</h1>
  <div class="content">
    <div class="columns">
      <div class="column is-3">
        <card-link href="http://www.caixa.gov.br/" img="cef.jpg"></card-link>
      </div>
      <div class="column is-3">
        <card-link href="http://www.buscacep.correios.com.br/servicos/dnec/index.do" img="correios.png"></card-link>
      </div>
      <div class="column is-3">
        <card-link href="http://cartorio24horas.com.br/index.php" img="c24hs.jpg"></card-link>
      </div>
      <div class="column is-3">
        <card-link href="https://www.jucemg.mg.gov.br/ibr/" img="jucemg.jpg"></card-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3">
        <card-link href="http://www.pgfn.fazenda.gov.br/" img="pgfn.jpg"></card-link>
      </div>
      <div class="column is-3">
        <card-link href="http://www.pbh.gov.br/bhissdigital/portal/index.php" img="pbh.jpg"></card-link>
      </div>
      <div class="column is-3">
        <card-link href="http://www.previdenciasocial.gov.br/" img="previdencia.jpg"></card-link>
      </div>
      <div class="column is-3">
        <card-link href="http://www.receita.fazenda.gov.br/" img="receita.png"></card-link>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3">
        <card-link href="http://www.sintegra.gov.br/" img="sintegra.jpg"></card-link>
      </div>
      <div class="column is-3">
        <card-link href="http://www.fazenda.mg.gov.br/index.html" img="sefaz.jpg"></card-link>
      </div>
      <div class="column is-3">
        <card-link href="http://www.nfe.fazenda.gov.br/portal/principal.aspx" img="nfe.png"></card-link>
      </div>
    </div>
  </div>
</page-content>
</template>

<script>
import CardLink from '../general/CardLink'

export default {
  name: 'utils',
  components: {
    CardLink
  }
}
</script>

<style lang="css" scoped>
.card {
  padding: 5px;
  height: 145px;
}
</style>

<template>
<page-content>
  <h1 class="title">Consulta de Documentos</h1>

  <div class="columns is-content-centered">
    <div class="columns">
      <message-link icon="book" href="https://www.sitecontabil.com.br/modelos_contrato.htm">
        <strong>Modelos</strong>
        <p>de Documentos</p>
      </message-link>

      <message-link icon="wpforms" href="http://idg.receita.fazenda.gov.br/formularios">
        Formulários da <strong>Receita Federal</strong>
      </message-link>

      <message-link icon="minus-square" href="https://www.sitecontabil.com.br/certidoes.htm">
        <strong>Certidões</strong>
        <p><strong>Negativas</strong></p>
      </message-link>
    </div>
  </div>
</page-content>
</template>

<script>
import MessageLink from '../general/MessageLink'

export default {
  name: 'documents',
  components: {
    MessageLink
  }
}
</script>

<template>
<page-content>
  <div class="columns">
    <div class="column is-offset-2 is-3">
      <message-link icon="book" href="https://www.sitecontabil.com.br/modelos_contrato.htm">
        <strong>Modelos</strong>
        <p>de Documentos</p>
      </message-link>
    </div>

    <div class="column is-3">
      <message-link icon="wpforms" href="http://idg.receita.fazenda.gov.br/formularios">
        Formulários da <strong>Receita Federal</strong>
      </message-link>
    </div>

    <div class="column is-3">
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

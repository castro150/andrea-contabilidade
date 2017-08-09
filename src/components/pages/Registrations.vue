<template>
<page-content>
  <h1 class="title">Consulta de Inscrições</h1>

  <div class="columns is-content-centered">
    <div class="columns">
      <message-link icon="building-o" href="http://www.receita.fazenda.gov.br/PessoaJuridica/CNPJ/cnpjreva/Cnpjreva_Solicitacao.asp">
        <strong>Comprovante de inscrição CNPJ</strong>
      </message-link>

      <message-link icon="address-book" href="https://mobiliarioonline.pbh.gov.br/mobiliario-cadastro-publico/f/t/emiteficwebsel">
        <strong>Ficha de Inscrição Cadastral</strong>
      </message-link>
    </div>
  </div>
</page-content>
</template>

<script>
import MessageLink from '../general/MessageLink'

export default {
  name: 'registrations',
  components: {
    MessageLink
  }
}
</script>

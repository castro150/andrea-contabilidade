<template>
<page-content>
  <div class="columns">
    <div class="column is-offset-3 is-3">
      <message-link icon="building-o" href="http://www.receita.fazenda.gov.br/PessoaJuridica/CNPJ/cnpjreva/Cnpjreva_Solicitacao.asp">
        <strong>Comprovante de inscrição CNPJ</strong>
      </message-link>
    </div>

    <div class="column is-3">
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

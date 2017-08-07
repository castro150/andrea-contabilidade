<template>
<page-content>
  <div class="columns">
    <div class="column is-3">
      <message-link icon="address-book" href="http://www.receita.fazenda.gov.br/Aplicacoes/ATRJO/Simulador/simulador.asp?tipoSimulador=M">
        <strong>Imposto de Renda</strong> Pessoa Física Mensal
      </message-link>
    </div>

    <div class="column is-3">
      <message-link icon="calendar-minus-o" href="https://www2.dataprev.gov.br/PortalSalInternet/faces/pages/calcContribuicoesCI/filiadosAntes/selecionarOpcoesCalculoAntes.xhtml">
        <strong>INSS Mensal</strong> - Filiados antes do dia 29/11/1999
      </message-link>
    </div>

    <div class="column is-3">
      <message-link icon="calendar-plus-o" href="https://www2.dataprev.gov.br/PortalSalInternet/faces/pages/calcContribuicoesCI/filiadosApos/selecionarOpcoesCalculoApos.xhtml">
        <strong>INSS Mensal</strong> - Filiados a partir do dia 29/11/1999
      </message-link>
    </div>

    <div class="column is-3">
      <message-link icon="table" href="http://www.debit.com.br/consulta10.php?opcao=diversos">
        <strong>Tabela Indexadora Variável</strong>
      </message-link>
    </div>
  </div>
</page-content>
</template>

<script>
import MessageLink from '../general/MessageLink'

export default {
  name: 'calculations',
  components: {
    MessageLink
  }
}
</script>

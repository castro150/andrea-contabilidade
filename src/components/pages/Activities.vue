<template>
<page-content>
  <h1 class="title">Consulta de Atividades</h1>

  <div class="columns is-content-centered p-b-15">
    <div class="columns">
      <message-link icon="copyright" href="http://www.cnae.ibge.gov.br/">
        <strong>Consulta</strong>
        <p>CNAE</p>
      </message-link>

      <message-link icon="truck" href="http://venus.maringa.pr.gov.br/laudosnew/arquivos/Atividades_permitidas_para_mei.pdf">
        <strong>Consulta</strong> de Atividades do MEI
      </message-link>

      <message-link icon="user-o" href="http://www.fazenda.pbh.gov.br/iss/cmc/cnae-aliquota.asp?atividade=A">
        Alíquota de <strong>ISSQN</strong> por Atividade
      </message-link>
    </div>
  </div>

  <div class="columns is-content-centered">
    <div class="columns">
      <message-link icon="ban" href="http://www.receita.fazenda.gov.br/publico/Legislacao/Resolucao/2011/ResolucaoCGSN/Anexo_VI_Resolucao_CGSN_94.doc">
        <strong>Simples Nacional</strong> - Atividades Impedidas
      </message-link>

      <message-link icon="asterisk" href="http://www.receita.fazenda.gov.br/publico/Legislacao/Resolucao/2011/ResolucaoCGSN/Anexo_VII_Resolucao_CGSN_94.doc">
        <strong>Simples Nacional</strong> - Concomitantes
      </message-link>
    </div>
  </div>
</page-content>
</template>

<script>
import MessageLink from '../general/MessageLink'

export default {
  name: 'activities',
  components: {
    MessageLink
  }
}
</script>

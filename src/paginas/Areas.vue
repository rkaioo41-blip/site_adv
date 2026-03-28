<template>
  <div class="pagina-areas">
    <BarraNavegacao />
    <main class="conteudo">
      <div class="container">
        <h1>Áreas de Atuação</h1>
        <p>Página em construção...</p>
      </div>
    </main>
  </div>
</template>

<script>
import BarraNavegacao from '../componentes/BarraNavegacao.vue'

export default {
  name: 'PaginaAreas',
  components: {
    BarraNavegacao,
  },
}
</script>

<style scoped>
.pagina-areas {
  background: #0a0a0a;
  min-height: 100vh;
}

.conteudo {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  color: #b0b0b0;
}
</style>

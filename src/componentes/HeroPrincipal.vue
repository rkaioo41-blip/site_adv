<template>
  <section class="hero-principal">
    <div class="overlay"></div>

    <div class="container conteudo">
      <span class="tag">DIREITO EMPRESARIAL E ESTRATÉGICO</span>

      <h1>
        Defesa jurídica de
        <span>alto nível</span>
      </h1>

      <p>
        Atendimento estratégico, sigiloso e eficiente para empresas e clientes
        que exigem excelência jurídica.
      </p>

      <div class="botoes">
        <router-link to="/contato" class="btn-primary">
          AGENDAR CONSULTA
        </router-link>

        <router-link to="/areas" class="btn-secondary">
          ÁREAS DE ATUAÇÃO
        </router-link>
      </div>

      <div class="infos">
        <span>✔ Atendimento Nacional</span>
        <span>✔ Resposta Rápida</span>
        <span>✔ Sigilo Absoluto</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroPrincipal'
}
</script>

<style scoped>
.hero-principal {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  background:
    linear-gradient(rgba(8,8,8,.78), rgba(8,8,8,.9)),
    url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80')
    center/cover no-repeat;
}

.overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top right, rgba(176,144,96,.10), transparent 35%);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.conteudo {
  position: relative;
  z-index: 2;
  max-width: 760px;
}

.tag {
  display: inline-block;
  color: #b09060;
  font-size: .75rem;
  letter-spacing: .18em;
  margin-bottom: 22px;
  font-weight: 700;
}

h1 {
  font-size: 4.4rem;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 24px;
  font-weight: 700;
}

h1 span {
  color: #b09060;
}

p {
  color: #d0d0d0;
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 620px;
}

.botoes {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 34px;
}

.btn-primary,
.btn-secondary {
  text-decoration: none;
  padding: 16px 26px;
  font-size: .82rem;
  font-weight: 700;
  letter-spacing: .08em;
  transition: .25s ease;
}

.btn-primary {
  background: #b09060;
  color: #080808;
}

.btn-primary:hover {
  transform: translateY(-3px);
}

.btn-secondary {
  border: 1px solid rgba(255,255,255,.18);
  color: #fff;
}

.btn-secondary:hover {
  border-color: #b09060;
  color: #b09060;
}

.infos {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.infos span {
  color: #cfcfcf;
  font-size: .92rem;
}

/* TABLET */
@media (max-width: 980px) {
  h1 {
    font-size: 3.4rem;
  }

  .hero-principal {
    min-height: 82vh;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .hero-principal {
    min-height: auto;
    padding: 70px 0;
    text-align: left;
  }

  h1 {
    font-size: 2.45rem;
  }

  p {
    font-size: 1rem;
  }

  .botoes {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
  }

  .infos {
    flex-direction: column;
    gap: 10px;
  }
}

/* MOBILE PEQUENO */
@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  h1 {
    font-size: 2rem;
  }

  .tag {
    font-size: .68rem;
  }
}
</style>

<template>
  <div class="pagina-sobre">
    <BarraNavegacao />

    <main class="conteudo">

      <!-- HERO -->
      <section class="hero-sobre">
        <div class="hero-bg-lines" aria-hidden="true">
          <span v-for="n in 6" :key="n" class="linha-bg"></span>
        </div>
        <div class="container">
          <div class="hero-inner">
            <span class="tag-topo">O Escritório</span>
            <h1 class="titulo-hero">
              Advocacia estratégica<br />
              <em>no mais alto nível</em>
            </h1>
            <div class="linha-titulo" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <!-- PERFIL -->
      <section class="secao-perfil">
        <div class="container">
          <div class="perfil-grid">

            <!-- Foto -->
            <div class="perfil-visual">
              <div class="avatar-wrapper">
                <img
                  src="@/assets/fotoreal.jpeg"
                  alt="Jorge Luis Ferreira dos Santos"
                  class="foto-perfil"
                />
                <div class="avatar-glow" aria-hidden="true"></div>
              </div>
              <div class="nome-cargo">
                <h2>Jorge Luis Ferreira dos Santos</h2>
                <span class="oab-label">Advogado</span>
              </div>
            </div>

            <!-- Texto principal -->
            <div class="perfil-texto">
              <p class="paragrafo-destaque">
                À frente do escritório está <strong>Jorge Luis Ferreira dos Santos</strong>,
                advogado com atuação focada em
                <mark>advocacia estratégica</mark>,
                <mark>personalizada</mark> e
                <mark>orientada a resultados</mark>.
              </p>
              <p>
                A estrutura enxuta do escritório permite atuação direta e criteriosa
                em cada demanda, garantindo controle técnico integral do processo e
                desenvolvimento de soluções jurídicas sob medida para cada cliente.
              </p>
              <p>
                O trabalho é pautado na combinação entre técnica jurídica, análise
                estratégica e posicionamento firme — elementos essenciais para uma
                atuação eficiente e de alto nível em todas as esferas do direito.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CITAÇÃO -->
      <section class="secao-citacao">
        <div class="container">
          <blockquote>
            <div class="aspas" aria-hidden="true">"</div>
            <p>
              Mais do que prestar serviços jurídicos, o escritório busca entregar
              segurança, clareza e confiança em todas as etapas da atuação.
            </p>
          </blockquote>
        </div>
      </section>

      <!-- PILARES -->
      <section class="secao-pilares">
        <div class="container">
          <h3 class="titulo-secao">Pilares de atuação</h3>
          <div class="grid-pilares">

            <div class="pilar">
              <div class="pilar-icone" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>Técnica jurídica</h4>
              <p>Profundo conhecimento das normas, jurisprudência e doutrina aplicadas a cada caso.</p>
            </div>

            <div class="pilar">
              <div class="pilar-icone" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="currentColor" d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
                </svg>
              </div>
              <h4>Análise estratégica</h4>
              <p>Leitura apurada do contexto para identificar o melhor caminho antes de agir.</p>
            </div>

            <div class="pilar">
              <div class="pilar-icone" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="currentColor" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Posicionamento firme</h4>
              <p>Defesa intransigente dos interesses do cliente em todas as esferas.</p>
            </div>

            <div class="pilar">
              <div class="pilar-icone" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="currentColor" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                </svg>
              </div>
              <h4>Atenção personalizada</h4>
              <p>Cada cliente recebe dedicação exclusiva e estratégia construída sob medida.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- ESTATÍSTICAS -->
      <section class="secao-stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat">
              <span class="stat-numero">15<span class="stat-plus">+</span></span>
              <span class="stat-label">Anos de experiência</span>
            </div>
            <div class="stat-divider" aria-hidden="true"></div>
            <div class="stat">
              <span class="stat-numero">500<span class="stat-plus">+</span></span>
              <span class="stat-label">Casos resolvidos</span>
            </div>
            <div class="stat-divider" aria-hidden="true"></div>
            <div class="stat">
              <span class="stat-numero">100<span class="stat-plus">%</span></span>
              <span class="stat-label">Dedicação</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="secao-cta">
        <div class="container">
          <div class="cta-box">
            <div class="cta-glow" aria-hidden="true"></div>
            <h3>Pronto para defender seus interesses?</h3>
            <p>Entre em contato e agende uma consulta inicial.</p>
            <router-link to="/contato" class="botao-cta">
              Agendar consulta
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script>
import BarraNavegacao from '../componentes/BarraNavegacao.vue'
export default {
  name: 'PaginaSobre',
  components: { BarraNavegacao },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

/* ===== VARIÁVEIS ===== */
.pagina-sobre {
  --azul: #4F8EF7;
  --azul-escuro: #1A3FAA;
  --azul-claro: #93C5FD;
  --gradiente: linear-gradient(135deg, #1A3FAA 0%, #4F8EF7 55%, #93C5FD 100%);
  --gradiente-texto: linear-gradient(135deg, #4F8EF7, #93C5FD);
  --bg: #030303;
  --bg-2: #0a0a0a;
  --bg-3: #111111;
  --texto: #F0F0F0;
  --texto-mutado: #909090;
  --borda: rgba(79, 142, 247, 0.14);

  background: var(--bg);
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ===== HERO ===== */
.hero-sobre {
  position: relative;
  padding: 110px 0 80px;
  overflow: hidden;
  border-bottom: 1px solid var(--borda);
}

.hero-bg-lines {
  position: absolute;
  inset: 0;
  display: flex;
  gap: clamp(60px, 8vw, 120px);
  padding: 0 32px;
  pointer-events: none;
  opacity: 0.06;
}

.linha-bg {
  flex: 1;
  background: linear-gradient(180deg, transparent, #4F8EF7, transparent);
}

.hero-inner {
  position: relative;
  z-index: 2;
}

.tag-topo {
  display: inline-block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: var(--azul);
  border-left: 2px solid var(--azul);
  padding-left: 14px;
  margin-bottom: 28px;
  font-weight: 500;
}

.titulo-hero {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  font-weight: 500;
  color: var(--texto);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 28px;
}

.titulo-hero em {
  font-style: italic;
  background: var(--gradiente-texto);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.linha-titulo {
  width: 80px;
  height: 2px;
  background: var(--gradiente);
  border-radius: 2px;
}

/* ===== PERFIL ===== */
.secao-perfil {
  padding: 90px 0 80px;
  border-bottom: 1px solid var(--borda);
}

.perfil-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 70px;
  align-items: start;
}

.perfil-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: sticky;
  top: 120px;
}

/* ===== FOTO REAL ===== */
.avatar-wrapper {
  position: relative;
  width: 220px;
  height: 280px;
}

.foto-perfil {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  border-radius: 4px;
  border: 1px solid rgba(79, 142, 247, 0.2);
  filter: grayscale(10%);
  transition: filter 0.3s ease;
}

.foto-perfil:hover {
  filter: grayscale(0%);
}

.avatar-glow {
  position: absolute;
  inset: -16px;
  border-radius: 8px;
  background: radial-gradient(ellipse at center bottom, rgba(79,142,247,0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

/* ===== NOME / CARGO ===== */
.nome-cargo {
  text-align: center;
}

.nome-cargo h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--texto);
  margin: 0 0 8px;
  line-height: 1.3;
}

.oab-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--azul);
  font-weight: 500;
}

/* ===== TEXTO ===== */
.perfil-texto {
  padding-top: 6px;
}

.perfil-texto p {
  color: var(--texto-mutado);
  line-height: 1.85;
  font-size: 1.05rem;
  margin-bottom: 22px;
  font-weight: 300;
}

.paragrafo-destaque {
  font-size: 1.15rem !important;
  color: rgba(240, 240, 240, 0.85) !important;
}

.perfil-texto strong {
  color: var(--texto);
  font-weight: 500;
}

.perfil-texto mark {
  background: none;
  color: var(--azul-claro);
  font-weight: 500;
}

/* ===== CITAÇÃO ===== */
.secao-citacao {
  padding: 80px 0;
  background: var(--bg-2);
  border-top: 1px solid var(--borda);
  border-bottom: 1px solid var(--borda);
}

blockquote {
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  padding: 0 40px;
}

.aspas {
  font-family: 'Cormorant Garamond', serif;
  font-size: 8rem;
  line-height: 0.5;
  background: var(--gradiente-texto);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 16px;
  opacity: 0.6;
}

blockquote p {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 400;
  font-style: italic;
  color: var(--texto);
  line-height: 1.5;
  margin: 0;
}

/* ===== PILARES ===== */
.secao-pilares {
  padding: 90px 0;
  border-bottom: 1px solid var(--borda);
}

.titulo-secao {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 500;
  color: var(--texto);
  text-align: center;
  margin-bottom: 56px;
  letter-spacing: -0.01em;
}

.grid-pilares {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: var(--borda);
  border: 1px solid var(--borda);
  border-radius: 12px;
  overflow: hidden;
}

.pilar {
  background: var(--bg-2);
  padding: 40px 28px;
  transition: background 0.3s ease;
}

.pilar:hover { background: var(--bg-3); }

.pilar-icone {
  color: var(--azul);
  margin-bottom: 20px;
  opacity: 0.9;
}

.pilar h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--texto);
  margin-bottom: 12px;
}

.pilar p {
  font-size: 0.88rem;
  color: var(--texto-mutado);
  line-height: 1.7;
  font-weight: 300;
}

/* ===== STATS ===== */
.secao-stats {
  padding: 80px 0;
  border-bottom: 1px solid var(--borda);
}

.stats-grid {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat {
  flex: 1;
  text-align: center;
  padding: 20px;
}

.stat-numero {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 500;
  background: var(--gradiente-texto);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 12px;
}

.stat-plus {
  font-size: 0.55em;
  vertical-align: super;
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--texto-mutado);
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 60px;
  background: var(--borda);
  flex-shrink: 0;
}

/* ===== CTA ===== */
.secao-cta {
  padding: 90px 0 100px;
}

.cta-box {
  position: relative;
  text-align: center;
  padding: 70px 40px;
  border: 1px solid var(--borda);
  border-radius: 16px;
  background: var(--bg-2);
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 200px;
  background: radial-gradient(ellipse, rgba(79,142,247,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.cta-box h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 500;
  color: var(--texto);
  margin-bottom: 14px;
  letter-spacing: -0.01em;
}

.cta-box p {
  color: var(--texto-mutado);
  font-size: 1.05rem;
  margin-bottom: 36px;
  font-weight: 300;
}

.botao-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  background: var(--gradiente);
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  border-radius: 6px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 24px rgba(79, 142, 247, 0.35);
}

.botao-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(79, 142, 247, 0.5);
  background: linear-gradient(135deg, #4F8EF7 0%, #93C5FD 100%);
}

/* ===== RESPONSIVO ===== */
@media (max-width: 900px) {
  .perfil-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .perfil-visual {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 28px;
  }
  .avatar-wrapper {
    width: 130px;
    height: 165px;
    flex-shrink: 0;
  }
  .nome-cargo { text-align: left; }
  .grid-pilares { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .hero-sobre { padding: 80px 0 60px; }
  .secao-perfil, .secao-pilares, .secao-cta { padding: 60px 0; }
  .secao-citacao, .secao-stats { padding: 60px 0; }
  .grid-pilares { grid-template-columns: 1fr; }
  .stats-grid { flex-direction: column; gap: 36px; }
  .stat-divider { width: 60px; height: 1px; }
  blockquote { padding: 0 16px; }
  .perfil-visual {
    flex-direction: column;
    align-items: center;
  }
  .avatar-wrapper { width: 180px; height: 230px; }
  .nome-cargo { text-align: center; }
  .cta-box { padding: 48px 24px; }
}
</style>

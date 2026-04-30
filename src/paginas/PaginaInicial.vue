<template>
  <div class="pagina-inicial">
    <BarraNavegacao />

    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-conteudo">
          <span class="hero-tagline">Direito Empresarial e Estratégico</span>
          <h1 class="hero-titulo">
            Defesa jurídica e estratégia
            <span class="texto-dourado">no mais alto nível</span>
          </h1>
          <p class="hero-descricao">
            Comprometimento, excelência e discrição em cada caso. Sua defesa é minha prioridade absoluta.
          </p>
          <div class="hero-botoes">
            <router-link to="/contato" class="botao-primario">
              AGENDAR CONSULTA
              <span class="seta">→</span>
            </router-link>
            <router-link to="/areas" class="botao-secundario">
              Conheça nossas áreas de atuação
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO SOBRE -->
    <section class="sobre">
      <div class="container">
        <div class="sobre-conteudo">
          <div class="sobre-texto">
            <span class="tag-secao">O Escritório</span>
            <h2>Excelência e tradição no direito empresarial</h2>
            <div class="linha-decorativa esquerda"></div>
            <p>
              O advogado Jorge Luis Ferreira dos Santos se destaca pela abordagem objetiva,
              moderna e eficaz na solução de conflitos empresariais. E está preparado
              para atuar em todo o território nacional.
            </p>
            <p>
              Acreditamos que cada caso exige uma estratégia única e personalizada. Por isso,
              dedicamos atenção exclusiva a cada cliente, buscando sempre as melhores soluções
              jurídicas com discrição, agilidade e excelência.
            </p>
            <router-link to="/sobre" class="botao-sobre">Conheça sobre nós</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="diferenciais">
      <div class="container">
        <div class="cabecalho-secao">
          <span class="tag-secao">Diferenciais</span>
          <h2>Por que nos escolher</h2>
          <div class="linha-decorativa"></div>
        </div>

        <div class="grade-diferenciais">
          <div class="card-diferencial">
            <div class="icone-diferencial">🎯</div>
            <h3>Estratégia Personalizada</h3>
            <p>Cada caso é único e merece uma estratégia sob medida, desenvolvida especialmente para suas necessidades.</p>
          </div>

          <div class="card-diferencial">
            <div class="icone-diferencial">⚡</div>
            <h3>Agilidade e Eficiência</h3>
            <p>Processos otimizados e equipe dedicada para garantir respostas rápidas e soluções eficazes.</p>
          </div>

          <div class="card-diferencial">
            <div class="icone-diferencial">🔒</div>
            <h3>Sigilo e Discrição</h3>
            <p>Compromisso absoluto com a confidencialidade e a proteção das informações de nossos clientes.</p>
          </div>

          <div class="card-diferencial">
            <div class="icone-diferencial">🌐</div>
            <h3>Atuação Nacional</h3>
            <p>Presença em todo o território brasileiro, com parceiros estratégicos nos principais estados.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-final">
      <div class="cta-overlay"></div>
      <div class="container relative">
        <div class="cta-conteudo">
          <h2>Pronto para resolver seu caso?</h2>
          <p>Entre em contato e agende uma consulta inicial.</p>
          <router-link to="/contato" class="botao-cta">
            Fale com um especialista
          </router-link>
        </div>
      </div>
    </section>

    <footer class="rodape">
      <div class="container">
        <div class="rodape-grade">
          <div class="rodape-info">
            <h4>Jorge Luis Ferreira dos Santos</h4>
            <p class="subtitulo-rodape">Assessoria e consultoria jurídica</p>
            <div class="contato-lista">
              <p><span>Telefone:</span> (62) 98158 - 6468</p>
              <p><span>E-mail:</span> advgjorgeluis@gmail.com</p>
              <p><span>Endereço:</span> Av. T-4, 619 - Setor Bueno<br />Goiânia - GO, 74230-035</p>
            </div>
          </div>

          <div class="rodape-links">
            <h4>Navegação</h4>
            <ul>
              <li><router-link to="/">Início</router-link></li>
              <li><router-link to="/sobre">Sobre</router-link></li>
              <li><router-link to="/areas">Áreas de atuação</router-link></li>
              <li><router-link to="/duvidas">Dúvidas</router-link></li>
              <li><router-link to="/contato">Contato</router-link></li>
            </ul>
          </div>

          <div class="rodape-redes">
            <h4>Redes sociais</h4>
            <div class="icones-redes">
              <a
                href="https://linkedin.com/in/jorge-luis-6913721a8"
                target="_blank"
                rel="noopener noreferrer"
                class="icone-rede"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://instagram.com/jorgeluisdir"
                target="_blank"
                rel="noopener noreferrer"
                class="icone-rede"
                aria-label="Instagram"
                title="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                href="https://wa.me/5562981586468"
                target="_blank"
                rel="noopener noreferrer"
                class="icone-rede"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="rodape-bottom">
          <p>© 2026 Jorge Luis Ferreira dos Santos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BarraNavegacao from '../componentes/BarraNavegacao.vue'

export default {
  name: 'PaginaInicial',
  components: {
    BarraNavegacao,
  },
  mounted() {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
      document.head.appendChild(link)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

/* ===== VARIÁVEIS ===== */
.pagina-inicial {
  --bg: #080808;
  --bg2: #0f0f0f;
  --bg3: #161616;
  --texto: #e8e6e1;
  --texto-mutado: #888;
  --borda: rgba(255, 255, 255, 0.08);
  --accent: #b09060;
  --accent-hover: #c9a86b;

  background: var(--bg);
  color: var(--texto);
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  /* background-attachment: scroll em vez de fixed — fixed quebra no iOS */
  background:
    linear-gradient(135deg, rgba(8, 8, 8, 0.95) 0%, rgba(8, 8, 8, 0.7) 100%),
    url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')
      center/cover scroll;
  padding: 120px 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(176, 144, 96, 0.08) 0%, transparent 60%);
  pointer-events: none;
}

.hero-conteudo {
  max-width: 800px;
  position: relative;
  z-index: 2;
}

.hero-tagline {
  display: inline-block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 30px;
  font-weight: 500;
  border-left: 2px solid var(--accent);
  padding-left: 16px;
}

.hero-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 30px;
  color: var(--texto);
  letter-spacing: -0.02em;
}

.texto-dourado {
  color: var(--accent);
  font-style: italic;
  font-weight: 500;
}

.hero-descricao {
  font-size: 1.05rem;
  color: var(--texto-mutado);
  margin-bottom: 50px;
  max-width: 600px;
  line-height: 1.7;
  font-weight: 300;
}

.hero-botoes {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.botao-primario {
  padding: 16px 36px;
  background: var(--accent);
  border: none;
  color: #080808;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  text-transform: uppercase;
}

.botao-primario:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

.botao-secundario {
  padding: 16px 36px;
  background: transparent;
  border: 1px solid var(--borda);
  color: var(--texto);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  text-transform: uppercase;
}

.botao-secundario:hover {
  border-color: var(--accent);
  background: rgba(176, 144, 96, 0.08);
  color: var(--accent);
}

.seta {
  font-size: 1rem;
  transition: transform 0.2s ease;
}

.botao-primario:hover .seta {
  transform: translateX(4px);
}

/* ===== SEÇÕES GERAIS ===== */
.sobre,
.diferenciais {
  padding: 120px 0;
}

.diferenciais {
  background: var(--bg2);
  border-top: 1px solid var(--borda);
  border-bottom: 1px solid var(--borda);
}

.cabecalho-secao {
  text-align: center;
  margin-bottom: 70px;
}

.tag-secao {
  color: var(--accent);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;
}

.cabecalho-secao h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 400;
  color: var(--texto);
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.linha-decorativa {
  width: 60px;
  height: 2px;
  background: var(--accent);
  margin: 0 auto 24px auto;
}

.linha-decorativa.esquerda {
  margin: 0 0 30px 0;
}

/* ===== SOBRE ===== */
.sobre-conteudo {
  display: block;
  max-width: 800px;
  margin: 0 auto;
}

.sobre-texto h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 24px;
  color: var(--texto);
}

.sobre-texto p {
  color: var(--texto-mutado);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 24px;
  font-weight: 300;
}

.botao-sobre {
  display: inline-block;
  padding: 14px 32px;
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.botao-sobre:hover {
  background: var(--accent);
  border-color: transparent;
  color: #080808;
}

/* ===== DIFERENCIAIS ===== */
.grade-diferenciais {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.card-diferencial {
  padding: 0;
  background: transparent;
  border: none;
  transition: all 0.3s ease;
}

.icone-diferencial {
  font-size: 2rem;
  margin-bottom: 24px;
}

.card-diferencial h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  margin-bottom: 16px;
  color: var(--texto);
  font-weight: 400;
}

.card-diferencial p {
  color: var(--texto-mutado);
  font-size: 0.9rem;
  line-height: 1.7;
  font-weight: 300;
}

/* ===== CTA FINAL ===== */
.cta-final {
  position: relative;
  padding: 120px 0;
  /* background-attachment: scroll em vez de fixed — fixed quebra no iOS */
  background: url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80') center/cover scroll;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(8, 8, 8, 0.92);
}

.relative {
  position: relative;
  z-index: 2;
}

.cta-conteudo {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-conteudo h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: var(--texto);
}

.cta-conteudo p {
  color: var(--texto-mutado);
  font-size: 1.05rem;
  margin-bottom: 40px;
  font-weight: 300;
}

.botao-cta {
  display: inline-block;
  padding: 16px 40px;
  background: var(--accent);
  color: #080808;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.12em;
  transition: all 0.2s ease;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.botao-cta:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

/* ===== RODAPÉ ===== */
.rodape {
  background: #000000;
  padding: 80px 0 40px;
  border-top: 1px solid var(--borda);
}

.rodape-grade {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.rodape-info h4 {
  color: var(--accent);
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: 500;
}

.subtitulo-rodape {
  color: var(--texto-mutado);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 30px;
}

.contato-lista p {
  color: var(--texto);
  margin-bottom: 16px;
  font-size: 0.9rem;
  line-height: 1.6;
  font-weight: 300;
}

.contato-lista span {
  color: var(--accent);
  font-weight: 500;
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}

.rodape-links h4,
.rodape-redes h4 {
  color: var(--texto);
  font-size: 0.8rem;
  margin-bottom: 24px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.rodape-links ul {
  list-style: none;
  padding: 0;
}

.rodape-links li {
  margin-bottom: 14px;
}

.rodape-links a {
  color: var(--texto-mutado);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
  font-weight: 300;
}

.rodape-links a:hover {
  color: var(--accent);
}

.icones-redes {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.icone-rede {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  color: var(--texto);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  border: 1px solid var(--borda);
}

.icone-rede i {
  font-size: 1.2rem;
}

.icone-rede:hover {
  background: var(--accent);
  color: #080808;
  border-color: transparent;
  transform: translateY(-2px);
}

.rodape-bottom {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid var(--borda);
}

.rodape-bottom p {
  color: var(--texto-mutado);
  font-size: 0.8rem;
  font-weight: 300;
}

/* ===== RESPONSIVIDADE ===== */

/* TABLET */
@media (max-width: 980px) {
  .hero-titulo {
    font-size: 3.4rem;
  }

  .hero {
    min-height: 82vh;
    padding: 100px 0;
  }

  .sobre,
  .diferenciais {
    padding: 80px 0;
  }

  .cta-final {
    padding: 80px 0;
  }

  .grade-diferenciais {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .cabecalho-secao h2 {
    font-size: 2.6rem;
  }

  .sobre-texto h2 {
    font-size: 2.4rem;
  }

  .cta-conteudo h2 {
    font-size: 2.6rem;
  }

  .rodape-grade {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .rodape-info {
    grid-column: 1 / -1;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }

  .hero {
    min-height: auto;
    padding: 100px 0 70px;
    text-align: left;
  }

  .hero-titulo {
    font-size: 2.6rem;
  }

  .hero-descricao {
    font-size: 1rem;
    margin-bottom: 36px;
  }

  .sobre,
  .diferenciais {
    padding: 64px 0;
  }

  .cta-final {
    padding: 64px 0;
  }

  .cabecalho-secao {
    margin-bottom: 48px;
  }

  .cabecalho-secao h2 {
    font-size: 2.2rem;
  }

  .sobre-texto h2 {
    font-size: 2rem;
  }

  .cta-conteudo h2 {
    font-size: 2.2rem;
  }

  .grade-diferenciais {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .rodape {
    padding: 60px 0 32px;
  }

  .rodape-grade {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  .rodape-info {
    grid-column: auto;
  }
}

/* MOBILE PEQUENO */
@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .hero-titulo {
    font-size: 2rem;
  }

  .hero-tagline {
    font-size: 0.62rem;
  }

  .hero-botoes {
    flex-direction: column;
    gap: 14px;
  }

  .botao-primario,
  .botao-secundario {
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 15px 20px;
  }

  .cabecalho-secao h2 {
    font-size: 1.9rem;
  }

  .sobre-texto h2 {
    font-size: 1.8rem;
  }

  .cta-conteudo h2 {
    font-size: 1.9rem;
  }

  .cta-conteudo p {
    font-size: 0.95rem;
  }

  .botao-cta {
    width: 100%;
    text-align: center;
    padding: 15px 20px;
  }

  .rodape-bottom p {
    font-size: 0.72rem;
  }
}
</style>

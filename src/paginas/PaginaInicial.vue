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
            Comprometimento, excelência e discrição em cada caso. Sua defesa é nossa prioridade absoluta.
          </p>
          <div class="hero-botoes">
            <router-link to="/contato" class="botao-primario">
              AGENDAR CONSULTA
              <span class="seta">→</span>
            </router-link>
            <router-link to="/areas" class="botao-secundario">
              Conheça nossas áreas
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="areas">
      <div class="container">
        <div class="cabecalho-secao">
          <span class="tag-secao">Expertise</span>
          <h2>Áreas de atuação</h2>
          <div class="linha-decorativa"></div>
          <p>Atuação estratégica em todas as esferas do direito empresarial</p>
        </div>

        <div class="grade-areas">
          <div class="card-area">
            <div class="icone-area">⚖️</div>
            <h3>Direito Civil</h3>
            <p>Atuação completa na defesa de direitos patrimoniais e pessoais, com foco em soluções eficazes e seguras.</p>
            <router-link to="/areas/penal" class="link-area">Saiba mais <span class="seta-pequena">→</span></router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">📊</div>
            <h3>Direito Penal</h3>
            <p>Defesa técnica estratégica em todas as fases da persecução penal, com atuação firme na proteção dos direitos fundamentais.</p>
            <router-link to="/areas/litigios" class="link-area">Saiba mais <span class="seta-pequena">→</span></router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">📝</div>
            <h3>Direito Administrativo</h3>
            <p>Elaboração, revisão e negociação de contratos nacionais e internacionais com o setor público.</p>
            <router-link to="/areas/contratual" class="link-area">Saiba mais <span class="seta-pequena">→</span></router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">📈</div>
            <h3>Direito Empresarial</h3>
            <p>Planejamento tributário preventivo, contencioso administrativo e judicial para corporações.</p>
            <router-link to="/areas/tributario" class="link-area">Saiba mais <span class="seta-pequena">→</span></router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">🏢</div>
            <h3>Direito do Trabalho</h3>
            <p>Estruturação de empresas, governança corporativa, passivos trabalhistas e compliance.</p>
            <router-link to="/areas/societario" class="link-area">Saiba mais <span class="seta-pequena">→</span></router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">🔒</div>
            <h3>Compliance</h3>
            <p>Implementação de programas de integridade, gestão de riscos e due diligence.</p>
            <router-link to="/areas/compliance" class="link-area">Saiba mais <span class="seta-pequena">→</span></router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="sobre">
      <div class="container">
        <div class="sobre-conteudo">
          <div class="sobre-texto">
            <span class="tag-secao">O Escritório</span>
            <h2>Excelência e tradição no direito empresarial</h2>
            <div class="linha-decorativa esquerda"></div>
            <p>
              Com mais de 15 anos de atuação, o escritório Jorge Luis Ferreira dos Santos se destaca
              pela abordagem objetiva, moderna e eficaz na solução de conflitos empresariais. Nossa
              equipe está preparada para atuar em todo o território nacional.
            </p>
            <p>
              Acreditamos que cada caso exige uma estratégia única e personalizada. Por isso,
              dedicamos atenção exclusiva a cada cliente, buscando sempre as melhores soluções
              jurídicas com discrição, agilidade e excelência.
            </p>
            <div class="sobre-estatisticas">
              <div class="estatistica">
                <span class="numero">15+</span>
                <span class="rotulo">Anos de experiência</span>
              </div>
              <div class="estatistica">
                <span class="numero">500+</span>
                <span class="rotulo">Casos resolvidos</span>
              </div>
              <div class="estatistica">
                <span class="numero">100%</span>
                <span class="rotulo">Dedicação</span>
              </div>
            </div>
            <router-link to="/sobre" class="botao-sobre"> Conheça nossa história </router-link>
          </div>
          <div class="sobre-imagem">
            <div class="placeholder-imagem">
              <div class="imagem-overlay"></div>
              </div>
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
          <p>Entre em contato e agende uma consulta inicial com nossa equipe de especialistas.</p>
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
              <p><span>E-mail:</span> contato@jorgeluis.adv.br</p>
              <p><span>Endereço:</span> Av. T-4, 619 - Setor Bueno<br />Goiânia - GO, 74230-035</p>
            </div>
          </div>

          <div class="rodape-links">
            <h4>Navegação</h4>
            <ul>
              <li><router-link to="/">Início</router-link></li>
              <li><router-link to="/sobre">Sobre</router-link></li>
              <li><router-link to="/areas">Áreas de atuação</router-link></li>
              <li><router-link to="/equipe">Equipe</router-link></li>
              <li><router-link to="/contato">Contato</router-link></li>
            </ul>
          </div>

          <div class="rodape-redes">
            <h4>Redes sociais</h4>
            <div class="icones-redes">
              <a href="#" class="icone-rede" aria-label="LinkedIn">in</a>
              <a href="#" class="icone-rede" aria-label="Instagram">ig</a>
              <a href="#" class="icone-rede" aria-label="Facebook">fb</a>
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
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

/* ===== VARIÁVEIS PREMIUM ===== */
* {
  box-sizing: border-box;
}

.pagina-inicial {
  --cor-fundo: #030303;
  --cor-superficie: #0a0a0a;
  --cor-superficie-hover: #121212;
  --cor-dourado: #4F8EF7;                /* Azul safira vibrante */
  --cor-dourado-escuro: #1A3FAA;         /* Azul marinho profundo */
  --cor-dourado-claro: #93C5FD;          /* Azul celeste claro */
  --cor-gradiente: linear-gradient(135deg, #1A3FAA 0%, #4F8EF7 55%, #93C5FD 100%);
  --cor-texto-principal: #F4F4F4;
  --cor-texto-secundario: #A3A3A3;
  --cor-borda: rgba(79, 142, 247, 0.18);
  --fonte-titulo: 'Playfair Display', serif;
  --fonte-texto: 'Inter', sans-serif;

  background: var(--cor-fundo);
  color: var(--cor-texto-principal);
  font-family: var(--fonte-texto);
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ===== HERO SECTION ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background:
    linear-gradient(135deg, rgba(3, 3, 3, 0.95) 0%, rgba(3, 3, 3, 0.7) 100%),
    url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')
      center/cover fixed;
  padding: 120px 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(79, 142, 247, 0.1) 0%, transparent 60%);
  pointer-events: none;
}

.hero-conteudo {
  max-width: 800px;
  position: relative;
  z-index: 2;
}

.hero-tagline {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--cor-dourado);
  margin-bottom: 30px;
  font-weight: 500;
  border-left: 1px solid var(--cor-dourado);
  padding-left: 16px;
}

.hero-titulo {
  font-family: var(--fonte-titulo);
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 30px;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.texto-dourado {
  background: var(--cor-gradiente);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-style: italic;
  font-weight: 500;
}

.hero-descricao {
  font-size: 1.15rem;
  color: var(--cor-texto-secundario);
  margin-bottom: 50px;
  max-width: 600px;
  line-height: 1.8;
  font-weight: 300;
}

.hero-botoes {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.botao-primario {
  padding: 18px 42px;
  background: var(--cor-gradiente);
  border: none;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 10px 30px -10px rgba(79, 142, 247, 0.55);
}

.botao-primario:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px -10px rgba(79, 142, 247, 0.75);
  background: linear-gradient(135deg, #7BB8F8, #2979D9);
}

.botao-secundario {
  padding: 18px 42px;
  background: transparent;
  border: 1px solid var(--cor-borda);
  color: var(--cor-texto-principal);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.4s ease;
  text-decoration: none;
  text-transform: uppercase;
}

.botao-secundario:hover {
  border-color: var(--cor-dourado);
  background: rgba(79, 142, 247, 0.08);
  color: var(--cor-dourado-claro);
}

.seta {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.botao-primario:hover .seta {
  transform: translateX(5px);
}

/* ===== SEÇÕES GERAIS ===== */
.areas,
.sobre,
.diferenciais {
  padding: 140px 0;
}

.areas {
  background: var(--cor-fundo);
}

.diferenciais {
  background: var(--cor-superficie);
  border-top: 1px solid var(--cor-borda);
  border-bottom: 1px solid var(--cor-borda);
}

.cabecalho-secao {
  text-align: center;
  margin-bottom: 80px;
}

.tag-secao {
  color: var(--cor-dourado);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;
}

.cabecalho-secao h2 {
  font-family: var(--fonte-titulo);
  font-size: 3rem;
  font-weight: 400;
  color: var(--cor-texto-principal);
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.linha-decorativa {
  width: 60px;
  height: 1px;
  background: var(--cor-gradiente);
  margin: 0 auto 24px auto;
}

.linha-decorativa.esquerda {
  margin: 0 0 30px 0;
}

.cabecalho-secao p {
  color: var(--cor-texto-secundario);
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
}

/* ===== ÁREAS ===== */
.grade-areas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.card-area {
  background: var(--cor-superficie);
  padding: 50px 40px;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(255, 255, 255, 0.03);
  position: relative;
  overflow: hidden;
}

.card-area::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--cor-gradiente);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease;
}

.card-area:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.card-area:hover {
  transform: translateY(-8px);
  background: var(--cor-superficie-hover);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8);
}

.icone-area {
  font-size: 2.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.card-area h3 {
  font-family: var(--fonte-titulo);
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 18px;
  color: var(--cor-texto-principal);
}

.card-area p {
  color: var(--cor-texto-secundario);
  margin-bottom: 35px;
  font-size: 0.95rem;
  line-height: 1.7;
  font-weight: 300;
}

.link-area {
  color: var(--cor-dourado);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
}

.link-area:hover {
  color: var(--cor-dourado-claro);
  gap: 14px;
}

.seta-pequena {
  transition: transform 0.3s;
}

/* ===== SOBRE ===== */
.sobre-conteudo {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: center;
}

.sobre-texto h2 {
  font-family: var(--fonte-titulo);
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 24px;
  color: var(--cor-texto-principal);
}

.sobre-texto p {
  color: var(--cor-texto-secundario);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 24px;
  font-weight: 300;
}

.sobre-estatisticas {
  display: flex;
  gap: 50px;
  margin: 50px 0;
  padding-top: 40px;
  border-top: 1px solid var(--cor-borda);
}

.estatistica {
  display: flex;
  flex-direction: column;
}

.numero {
  font-family: var(--fonte-titulo);
  font-size: 3rem;
  font-weight: 400;
  background: var(--cor-gradiente);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 12px;
}

.rotulo {
  font-size: 0.75rem;
  color: var(--cor-texto-secundario);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.botao-sobre {
  display: inline-block;
  padding: 16px 36px;
  background: transparent;
  border: 1px solid var(--cor-dourado);
  color: var(--cor-dourado);
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.1em;
  transition: all 0.4s ease;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.botao-sobre:hover {
  background: var(--cor-gradiente);
  border-color: transparent;
  color: #fff;
}

.sobre-imagem {
  position: relative;
  height: 100%;
  min-height: 600px;
}

.placeholder-imagem {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1505664177922-9860b7eb5fb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80') center/cover;
  border: 1px solid var(--cor-borda);
  filter: grayscale(30%);
}

.imagem-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, var(--cor-fundo) 0%, transparent 100%);
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
  font-family: var(--fonte-titulo);
  font-size: 1.3rem;
  margin-bottom: 16px;
  color: var(--cor-texto-principal);
  font-weight: 400;
}

.card-diferencial p {
  color: var(--cor-texto-secundario);
  font-size: 0.95rem;
  line-height: 1.7;
  font-weight: 300;
}

/* ===== CTA FINAL ===== */
.cta-final {
  position: relative;
  padding: 120px 0;
  background: url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80') center/cover fixed;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(3, 3, 3, 0.92);
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
  font-family: var(--fonte-titulo);
  font-size: 3.2rem;
  font-weight: 400;
  margin-bottom: 24px;
  color: var(--cor-texto-principal);
}

.cta-conteudo p {
  color: var(--cor-texto-secundario);
  font-size: 1.15rem;
  margin-bottom: 45px;
  font-weight: 300;
}

.botao-cta {
  display: inline-block;
  padding: 20px 48px;
  background: var(--cor-gradiente);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.1em;
  transition: all 0.4s ease;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.botao-cta:hover {
  background: linear-gradient(135deg, #7BB8F8, #2979D9);
  transform: translateY(-3px);
  box-shadow: 0 15px 30px -10px rgba(79, 142, 247, 0.55);
}

/* ===== RODAPÉ ===== */
.rodape {
  background: #000000;
  padding: 100px 0 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.rodape-grade {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
}

.rodape-info h4 {
  background: var(--cor-gradiente);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: var(--fonte-titulo);
  font-size: 1.4rem;
  margin-bottom: 8px;
  font-weight: 400;
}

.subtitulo-rodape {
  color: var(--cor-texto-secundario);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 30px;
}

.contato-lista p {
  color: var(--cor-texto-principal);
  margin-bottom: 16px;
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 300;
}

.contato-lista span {
  color: var(--cor-dourado);
  font-weight: 500;
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}

.rodape-links h4,
.rodape-redes h4 {
  color: var(--cor-texto-principal);
  font-size: 0.85rem;
  margin-bottom: 30px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.rodape-links ul {
  list-style: none;
  padding: 0;
}

.rodape-links li {
  margin-bottom: 16px;
}

.rodape-links a {
  color: var(--cor-texto-secundario);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;
  font-weight: 300;
}

.rodape-links a:hover {
  color: var(--cor-dourado-claro);
}

.icones-redes {
  display: flex;
  gap: 16px;
}

.icone-rede {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  color: var(--cor-texto-principal);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 400;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
}

.icone-rede:hover {
  background: var(--cor-gradiente);
  color: #fff;
  border-color: transparent;
  transform: translateY(-4px);
}

.rodape-bottom {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.rodape-bottom p {
  color: var(--cor-texto-secundario);
  font-size: 0.85rem;
  font-weight: 300;
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 1024px) {
  .hero-titulo {
    font-size: 3.8rem;
  }
  .grade-areas,
  .grade-diferenciais {
    grid-template-columns: repeat(2, 1fr);
  }
  .sobre-conteudo {
    gap: 50px;
  }
  .placeholder-imagem {
    min-height: 500px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
  .hero {
    text-align: left;
    min-height: auto;
    padding: 160px 0 100px;
  }
  .hero-titulo {
    font-size: 2.8rem;
  }
  .cabecalho-secao h2 {
    font-size: 2.4rem;
  }
  .grade-areas {
    grid-template-columns: 1fr;
  }
  .sobre-conteudo {
    grid-template-columns: 1fr;
  }
  .sobre-imagem {
    order: -1;
    min-height: 400px;
  }
  .grade-diferenciais {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .rodape-grade {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .sobre-estatisticas {
    flex-direction: column;
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .hero-titulo {
    font-size: 2.2rem;
  }
  .hero-botoes {
    flex-direction: column;
  }
  .botao-primario,
  .botao-secundario {
    width: 100%;
    justify-content: center;
  }
  .card-area {
    padding: 40px 24px;
  }
}
</style>

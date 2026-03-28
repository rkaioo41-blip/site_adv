<template>
  <div class="pagina-inicial">
    <BarraNavegacao />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-conteudo">
          <span class="hero-tagline">DIREITO EMPRESARIAL E ESTRATÉGICO</span>
          <h1 class="hero-titulo">
            Defesa jurídica e estratégia
            <span class="texto-dourado">no mais alto nível</span>
          </h1>
          <p class="hero-descricao">
            Comprometimento, excelência e discrição em cada caso. Sua defesa é nossa prioridade
            absoluta.
          </p>
          <div class="hero-botoes">
            <router-link to="/contato" class="botao-primario">
              AGENDAR CONSULTA
              <span class="seta">→</span>
            </router-link>
            <router-link to="/areas" class="botao-secundario"> CONHEÇA NOSSAS ÁREAS </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Áreas de Atuação -->
    <section class="areas">
      <div class="container">
        <div class="cabecalho-secao">
          <span class="tag-secao">EXPERTISE</span>
          <h2>Áreas de atuação</h2>
          <p>Atuação estratégica em todas as esferas do direito empresarial</p>
        </div>

        <div class="grade-areas">
          <div class="card-area">
            <div class="icone-area">⚖️</div>
            <h3>Direito Civil</h3>
            <p>
              Atuação completa na defesa de direitos patrimoniais e pessoais, com foco em soluções
              eficazes e seguras.
            </p>
            <router-link to="/areas/penal" class="link-area">Saiba mais →</router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">📊</div>
            <h3>Direito Penal</h3>
            <p>
              Defesa técnica estratégica em todas as fases da persecução penal, com atuação firme na
              proteção dos direitos fundamentais.
            </p>
            <router-link to="/areas/litigios" class="link-area">Saiba mais →</router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">📝</div>
            <h3>Direito Administrativo</h3>
            <p>Elaboração, revisão e negociação de contratos nacionais e internacionais.</p>
            <router-link to="/areas/contratual" class="link-area">Saiba mais →</router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">📈</div>
            <h3>Direito Empresarial</h3>
            <p>Planejamento tributário preventivo, contencioso administrativo e judicial.</p>
            <router-link to="/areas/tributario" class="link-area">Saiba mais →</router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">🏢</div>
            <h3>Direito do Trabalho</h3>
            <p>Estruturação de empresas, governança corporativa e compliance.</p>
            <router-link to="/areas/societario" class="link-area">Saiba mais →</router-link>
          </div>

          <div class="card-area">
            <div class="icone-area">🔒</div>
            <h3>Compliance</h3>
            <p>Implementação de programas de integridade e due diligence.</p>
            <router-link to="/areas/compliance" class="link-area">Saiba mais →</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre o Escritório -->
    <section class="sobre">
      <div class="container">
        <div class="sobre-conteudo">
          <div class="sobre-texto">
            <span class="tag-secao">O ESCRITÓRIO</span>
            <h2>Excelência e tradição no direito empresarial</h2>
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
              <!-- Espaço para foto do escritório ou equipe -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais -->
    <section class="diferenciais">
      <div class="container">
        <div class="cabecalho-secao">
          <span class="tag-secao">DIFERENCIAIS</span>
          <h2>Por que nos escolher</h2>
        </div>

        <div class="grade-diferenciais">
          <div class="card-diferencial">
            <div class="icone-diferencial">🎯</div>
            <h3>Estratégia Personalizada</h3>
            <p>
              Cada caso é único e merece uma estratégia sob medida, desenvolvida especialmente para
              suas necessidades.
            </p>
          </div>

          <div class="card-diferencial">
            <div class="icone-diferencial">⚡</div>
            <h3>Agilidade e Eficiência</h3>
            <p>
              Processos otimizados e equipe dedicada para garantir respostas rápidas e soluções
              eficazes.
            </p>
          </div>

          <div class="card-diferencial">
            <div class="icone-diferencial">🔒</div>
            <h3>Sigilo e Discrição</h3>
            <p>
              Compromisso absoluto com a confidencialidade e a proteção das informações de nossos
              clientes.
            </p>
          </div>

          <div class="card-diferencial">
            <div class="icone-diferencial">🌐</div>
            <h3>Atuação Nacional</h3>
            <p>
              Presença em todo o território brasileiro, com parceiros estratégicos nos principais
              estados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-final">
      <div class="container">
        <div class="cta-conteudo">
          <h2>Pronto para resolver seu caso?</h2>
          <p>Entre em contato e agende uma consulta inicial com nossa equipe.</p>
          <router-link to="/contato" class="botao-cta"> FALE COM UM ESPECIALISTA </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="rodape">
      <div class="container">
        <div class="rodape-grade">
          <div class="rodape-info">
            <h4>JORGE LUIS FERREIRA DOS SANTOS</h4>
            <p>Acessoria e consultoria juridica</p>
            <p class="rodape-contato">📞 (62) 98158 - 6468</p>
            <p class="rodape-contato">✉️ contato@jorgeluis.adv.br</p>
            <p class="rodape-endereco">
              Av. T-4, 619 - Setor Bueno<br />
              Goiânia - GO, 74230-035
            </p>
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
              <a href="#" class="icone-rede" aria-label="n">in</a>
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
.pagina-inicial {
  background: #0a0a0a;
  color: #ffffff;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===== HERO SECTION ===== */
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background:
    linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(10, 10, 10, 0.8)),
    url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')
      center/cover fixed;
  padding: 80px 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
  z-index: 1;
}

.hero .container {
  position: relative;
  z-index: 2;
}

.hero-conteudo {
  max-width: 700px;
}

.hero-tagline {
  display: inline-block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #d4af37;
  margin-bottom: 20px;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-titulo {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 25px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.texto-dourado {
  color: #d4af37;
  font-weight: 500;
}

.hero-descricao {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 35px;
  max-width: 600px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-botoes {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.botao-primario {
  padding: 15px 35px;
  background: #d4af37;
  border: none;
  color: #0a0a0a;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
}

.botao-primario:hover {
  background: #e5c05c;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.botao-secundario {
  padding: 15px 35px;
  background: transparent;
  border: 2px solid #d4af37;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border-radius: 4px;
}

.botao-secundario:hover {
  background: rgba(212, 175, 55, 0.1);
  transform: translateY(-2px);
  border-color: #e5c05c;
}

.seta {
  font-size: 1.2rem;
  transition: transform 0.2s;
}

.botao-primario:hover .seta {
  transform: translateX(5px);
}

/* ===== SEÇÕES ===== */
.areas,
.sobre,
.diferenciais {
  padding: 100px 0;
}

.areas {
  background: #0f0f0f;
}

.diferenciais {
  background: #0f0f0f;
}

.cabecalho-secao {
  text-align: center;
  margin-bottom: 60px;
}

.tag-secao {
  color: #d4af37;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  display: block;
  margin-bottom: 15px;
}

.cabecalho-secao h2 {
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 15px;
}

.cabecalho-secao p {
  color: #b0b0b0;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* ===== ÁREAS ===== */
.grade-areas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.card-area {
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.card-area:hover {
  transform: translateY(-5px);
  border-color: rgba(212, 175, 55, 0.3);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.1);
  background: rgba(30, 30, 30, 0.8);
}

.icone-area {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #d4af37;
}

.card-area h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #ffffff;
}

.card-area p {
  color: #b0b0b0;
  margin-bottom: 25px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.link-area {
  color: #d4af37;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
}

.link-area:hover {
  color: #e5c05c;
  transform: translateX(5px);
}

/* ===== SOBRE ===== */
.sobre-conteudo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.sobre-texto h2 {
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.3;
  margin-bottom: 25px;
  color: #ffffff;
}

.sobre-texto p {
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
}

.sobre-estatisticas {
  display: flex;
  gap: 50px;
  margin-bottom: 40px;
}

.estatistica {
  display: flex;
  flex-direction: column;
}

.numero {
  font-size: 2.5rem;
  font-weight: 300;
  color: #d4af37;
  line-height: 1.2;
}

.rotulo {
  font-size: 0.9rem;
  color: #b0b0b0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.botao-sobre {
  display: inline-block;
  padding: 12px 30px;
  background: transparent;
  border: 2px solid #d4af37;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s;
  border-radius: 4px;
}

.botao-sobre:hover {
  background: #d4af37;
  color: #0a0a0a;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
}

.sobre-imagem {
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.placeholder-imagem {
  width: 100%;
  height: 450px;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

.placeholder-imagem::after {
  content: 'ESCRITÓRIO';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(212, 175, 55, 0.1);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 5px;
  white-space: nowrap;
}

/* ===== DIFERENCIAIS ===== */
.grade-diferenciais {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.card-diferencial {
  text-align: center;
  padding: 30px;
  background: rgba(20, 20, 20, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.card-diferencial:hover {
  transform: translateY(-5px);
  border-color: rgba(212, 175, 55, 0.3);
}

.icone-diferencial {
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 20px;
}

.card-diferencial h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #ffffff;
}

.card-diferencial p {
  color: #b0b0b0;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ===== CTA FINAL ===== */
.cta-final {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
}

.cta-conteudo {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-conteudo h2 {
  font-size: 2.2rem;
  font-weight: 300;
  margin-bottom: 15px;
  color: #ffffff;
}

.cta-conteudo p {
  color: #b0b0b0;
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.botao-cta {
  display: inline-block;
  padding: 15px 40px;
  background: #d4af37;
  color: #0a0a0a;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: all 0.3s;
  box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
}

.botao-cta:hover {
  background: #e5c05c;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

/* ===== RODAPÉ ===== */
.rodape {
  background: #050505;
  padding: 60px 0 20px;
}

.rodape-grade {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.rodape-info h4 {
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 1px;
}

.rodape-info p {
  color: #999;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.rodape-contato {
  color: #d4af37 !important;
  font-weight: 500;
}

.rodape-endereco {
  margin-top: 15px;
  line-height: 1.6;
}

.rodape-links h4,
.rodape-redes h4 {
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 20px;
  font-weight: 500;
}

.rodape-links ul {
  list-style: none;
}

.rodape-links li {
  margin-bottom: 12px;
}

.rodape-links a {
  color: #999;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.rodape-links a:hover {
  color: #d4af37;
}

.icones-redes {
  display: flex;
  gap: 15px;
}

.icone-rede {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #1a1a1a;
  color: #ffffff;
  text-decoration: none;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.icone-rede:hover {
  background: #d4af37;
  color: #0a0a0a;
  transform: translateY(-2px);
  border-color: #d4af37;
}

.rodape-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #1a1a1a;
}

.rodape-bottom p {
  color: #666;
  font-size: 0.9rem;
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 968px) {
  .hero-titulo {
    font-size: 2.5rem;
  }

  .grade-areas {
    grid-template-columns: repeat(2, 1fr);
  }

  .sobre-conteudo {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .grade-diferenciais {
    grid-template-columns: repeat(2, 1fr);
  }

  .rodape-grade {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
    text-align: center;
  }

  .hero-conteudo {
    margin: 0 auto;
  }

  .hero-titulo {
    font-size: 2rem;
  }

  .hero-descricao {
    font-size: 1rem;
  }

  .hero-botoes {
    justify-content: center;
  }

  .grade-areas {
    grid-template-columns: 1fr;
  }

  .sobre-estatisticas {
    flex-direction: column;
    gap: 20px;
  }

  .grade-diferenciais {
    grid-template-columns: 1fr;
  }

  .rodape-grade {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .placeholder-imagem {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero-titulo {
    font-size: 1.8rem;
  }

  .hero-botoes {
    flex-direction: column;
    width: 100%;
  }

  .botao-primario,
  .botao-secundario {
    width: 100%;
    justify-content: center;
  }
}
</style>

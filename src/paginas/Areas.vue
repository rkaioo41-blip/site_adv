<template>
  <div class="pagina-areas">
    <BarraNavegacao />

    <!-- HERO -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="container">
        <div class="conteudo" data-aos="fade-up">
          <span class="tag">Especialidades Jurídicas</span>
          <h1>Áreas de Atuação</h1>
          <p class="hero-description">
            Conheça nossas principais áreas de atuação e entenda como podemos
            proteger seus interesses com estratégia, segurança e excelência.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">6+</span>
              <span class="stat-label">Áreas Especializadas</span>
            </div>
            <div class="stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Foco no Cliente</span>
            </div>
            <div class="stat">
              <span class="stat-number">24/7</span>
              <span class="stat-label">Suporte Jurídico</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="intro">
      <div class="container">
        <div class="intro-content" data-aos="fade-up">
          <div class="intro-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="intro-text">
            Nosso escritório atua de forma estratégica nas principais áreas do direito,
            oferecendo soluções jurídicas personalizadas para empresas e indivíduos.
            Cada atuação é conduzida com rigor técnico, visão de negócio e total discrição.
          </p>
          <div class="intro-badges">
            <span class="badge">Excelência Técnica</span>
            <span class="badge">Atendimento Personalizado</span>
            <span class="badge">Ética e Transparência</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ÁREAS -->
    <section class="areas">
      <div class="container">
        <div class="areas-header" data-aos="fade-up">
          <h2>Nossas Especialidades</h2>
          <p>Soluções jurídicas completas para cada necessidade</p>
        </div>

        <div class="areas-grid">
          <!-- CIVIL -->
          <div class="area-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V8H4V12M20 12L12 18L4 12M20 12L12 16L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 4H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Direito Civil</h3>
            <p class="area-description">
              O Direito Civil regula as relações entre pessoas físicas e jurídicas,
              envolvendo questões patrimoniais, contratuais e de responsabilidade.
            </p>
            <p class="area-details">
              Atuamos na defesa de direitos em casos de indenizações, disputas contratuais,
              responsabilidade civil e conflitos diversos, sempre buscando soluções eficazes
              e juridicamente seguras.
            </p>
            <div class="area-tags">
              <span class="tag">Contratos</span>
              <span class="tag">Indenizações</span>
              <span class="tag">Danos Morais</span>
            </div>
            <button class="saiba-mais" @click="showModal('civil')">
              Saiba mais <span>→</span>
            </button>
          </div>

          <!-- PENAL -->
          <div class="area-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 11L5 16L12 21L19 16L19 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 16L12 21L19 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Direito Penal</h3>
            <p class="area-description">
              O Direito Penal trata da defesa de indivíduos e empresas em investigações
              e processos criminais.
            </p>
            <p class="area-details">
              Atuamos desde a fase investigativa até o julgamento final, garantindo uma
              defesa técnica rigorosa, estratégica e alinhada à proteção dos direitos fundamentais.
            </p>
            <div class="area-tags">
              <span class="tag">Defesa Criminal</span>
              <span class="tag">Investigação</span>
              <span class="tag">Habeas Corpus</span>
            </div>
            <button class="saiba-mais" @click="showModal('penal')">
              Saiba mais <span>→</span>
            </button>
          </div>

          <!-- ADMINISTRATIVO -->
          <div class="area-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M8 6V4H16V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M5 10H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M7 15H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M9 20H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Direito Administrativo</h3>
            <p class="area-description">
              Regula a relação entre empresas e o poder público, incluindo contratos,
              licitações e processos administrativos.
            </p>
            <p class="area-details">
              Prestamos assessoria completa para participação em licitações, defesa em
              processos administrativos e estruturação de contratos com o setor público.
            </p>
            <div class="area-tags">
              <span class="tag">Licitações</span>
              <span class="tag">Contratos Públicos</span>
              <span class="tag">Defesa Administrativa</span>
            </div>
            <button class="saiba-mais" @click="showModal('administrativo')">
              Saiba mais <span>→</span>
            </button>
          </div>

          <!-- EMPRESARIAL -->
          <div class="area-card" data-aos="fade-up" data-aos-delay="400">
            <div class="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 3L21 9L12 15L3 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 15L5 20H19L19 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11L12 13L15 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Direito Empresarial</h3>
            <p class="area-description">
              Focado na estrutura e funcionamento das empresas, o Direito Empresarial
              garante segurança jurídica nas atividades corporativas.
            </p>
            <p class="area-details">
              Atuamos na estruturação societária, planejamento estratégico e resolução
              de conflitos empresariais, sempre alinhados aos objetivos do negócio.
            </p>
            <div class="area-tags">
              <span class="tag">Sociedades</span>
              <span class="tag">Planejamento</span>
              <span class="tag">Conflitos Corporativos</span>
            </div>
            <button class="saiba-mais" @click="showModal('empresarial')">
              Saiba mais <span>→</span>
            </button>
          </div>

          <!-- TRABALHO -->
          <div class="area-card" data-aos="fade-up" data-aos-delay="500">
            <div class="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Direito do Trabalho</h3>
            <p class="area-description">
              O Direito do Trabalho regula as relações entre empregadores e empregados,
              prevenindo riscos e solucionando conflitos.
            </p>
            <p class="area-details">
              Atuamos tanto na prevenção de passivos trabalhistas quanto na defesa em
              ações judiciais, garantindo segurança e estabilidade para empresas.
            </p>
            <div class="area-tags">
              <span class="tag">Ações Trabalhistas</span>
              <span class="tag">Consultoria</span>
              <span class="tag">Gestão de Riscos</span>
            </div>
            <button class="saiba-mais" @click="showModal('trabalho')">
              Saiba mais <span>→</span>
            </button>
          </div>

          <!-- COMPLIANCE -->
          <div class="area-card" data-aos="fade-up" data-aos-delay="600">
            <div class="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 3V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M12 17V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M5 11H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M21 11H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M7.05 7.05L5.636 5.636" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M18.364 18.364L16.95 16.95" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M7.05 16.95L5.636 18.364" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M18.364 5.636L16.95 7.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Compliance</h3>
            <p class="area-description">
              Compliance envolve a criação de mecanismos internos para garantir que
              empresas atuem em conformidade com leis e regulamentos.
            </p>
            <p class="area-details">
              Desenvolvemos programas de integridade, gestão de riscos e políticas internas
              para prevenir problemas legais e fortalecer a governança corporativa.
            </p>
            <div class="area-tags">
              <span class="tag">Prevenção de Riscos</span>
              <span class="tag">Governança</span>
              <span class="tag">Integridade</span>
            </div>
            <button class="saiba-mais" @click="showModal('compliance')">
              Saiba mais <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- MODAL -->
    <div v-if="modalActive" class="modal" @click.self="closeModal">
      <div class="modal-content" data-aos="zoom-in">
        <button class="modal-close" @click="closeModal">×</button>
        <h2>{{ modalData.title }}</h2>
        <p>{{ modalData.description }}</p>
        <div class="modal-features">
          <div class="feature" v-for="feature in modalData.features" :key="feature">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{ feature }}</span>
          </div>
        </div>
        <router-link to="/contato" class="modal-button">Solicitar Consulta</router-link>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta">
      <div class="overlay"></div>
      <div class="container">
        <div class="cta-content" data-aos="fade-up">
          <h2>Precisa de orientação jurídica?</h2>
          <p>Entre em contato e fale com um especialista.</p>
          <router-link to="/contato" class="botao">
            Agendar consulta
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BarraNavegacao from '../componentes/BarraNavegacao.vue'

export default {
  name: 'PaginaAreas',
  components: {
    BarraNavegacao,
  },
  data() {
    return {
      modalActive: false,
      modalData: {
        title: '',
        description: '',
        features: []
      }
    }
  },
  methods: {
    showModal(area) {
      const modalInfo = {
        civil: {
          title: 'Direito Civil',
          description: 'Atuamos com excelência em direito civil, oferecendo soluções personalizadas e estrategicamente elaboradas para cada caso, sempre priorizando a melhor abordagem legal para seus interesses.',
          features: ['Contratos e Obrigações', 'Responsabilidade Civil', 'Indenizações', 'Direito das Coisas', 'Direito de Família']
        },
        penal: {
          title: 'Direito Penal',
          description: 'Defesa criminal estratégica com foco na proteção dos direitos fundamentais. Nossa equipe atua com técnicas avançadas de investigação defensiva e recursos judiciais.',
          features: ['Defesa Criminal', 'Habeas Corpus', 'Investigação Defensiva', 'Recursos Criminais', 'Tribunal do Júri']
        },
        administrativo: {
          title: 'Direito Administrativo',
          description: 'Assessoria completa em licitações e contratos públicos. Garantimos a conformidade legal e a maximização das oportunidades no setor público.',
          features: ['Licitações', 'Contratos Administrativos', 'Processos Administrativos', 'Improbidade Administrativa', 'Concessões e Permissões']
        },
        empresarial: {
          title: 'Direito Empresarial',
          description: 'Soluções jurídicas integradas para empresas de todos os portes. Do planejamento estratégico à resolução de conflitos societários.',
          features: ['Estruturação Societária', 'Contratos Empresariais', 'Fusões e Aquisições', 'Recuperação Judicial', 'Planejamento Tributário']
        },
        trabalho: {
          title: 'Direito do Trabalho',
          description: 'Prevenção e solução de conflitos trabalhistas com visão estratégica. Reduzimos riscos e garantimos segurança jurídica nas relações de trabalho.',
          features: ['Ações Trabalhistas', 'Consultoria Preventiva', 'Gestão de Riscos', 'Negociações Coletivas', 'Compliance Trabalhista']
        },
        compliance: {
          title: 'Compliance',
          description: 'Implementação de programas de integridade robustos para prevenir riscos e garantir a conformidade regulatória da sua empresa.',
          features: ['Programas de Integridade', 'Gestão de Riscos', 'Políticas Internas', 'Treinamentos', 'Auditoria e Monitoramento']
        }
      }

      this.modalData = modalInfo[area]
      this.modalActive = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.modalActive = false
      document.body.style.overflow = 'auto'
    }
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.pagina-areas {
  --azul: #4F8EF7;
  --azul-escuro: #1A3FAA;
  --azul-claro: #93C5FD;
  --gradiente: linear-gradient(135deg, #1A3FAA, #4F8EF7, #93C5FD);
  --gradiente-hover: linear-gradient(135deg, #4F8EF7, #1A3FAA);
  --bg: #030303;
  --bg-card: rgba(15, 15, 15, 0.95);
  --text: #f4f4f4;
  --sub: #a3a3a3;
  --border: rgba(79, 142, 247, 0.2);

  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

/* HERO */
.hero {
  position: relative;
  padding: 160px 0 120px;
  background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)),
              url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f') center/cover fixed;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(79,142,247,0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.85);
}

.conteudo {
  position: relative;
  max-width: 800px;
}

.hero h1 {
  font-size: 4rem;
  margin: 20px 0;
  background: var(--gradiente);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fadeInUp 0.8s ease;
}

.hero-description {
  color: var(--sub);
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: var(--azul);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--sub);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* INTRO */
.intro {
  padding: 100px 0;
  background: linear-gradient(180deg, var(--bg) 0%, rgba(79,142,247,0.05) 100%);
}

.intro-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.intro-icon {
  color: var(--azul);
  margin-bottom: 30px;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--sub);
  margin-bottom: 30px;
}

.intro-badges {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.badge {
  padding: 8px 20px;
  background: rgba(79, 142, 247, 0.1);
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--azul);
}

/* ÁREAS */
.areas {
  padding: 100px 0;
}

.areas-header {
  text-align: center;
  margin-bottom: 60px;
}

.areas-header h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  background: var(--gradiente);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.areas-header p {
  color: var(--sub);
  font-size: 1.1rem;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.area-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 35px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.area-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradiente);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.area-card:hover {
  transform: translateY(-5px);
  border-color: var(--azul);
  box-shadow: 0 20px 40px rgba(79, 142, 247, 0.1);
}

.area-card:hover::before {
  transform: scaleX(1);
}

.card-icon {
  color: var(--azul);
  margin-bottom: 25px;
}

.area-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.area-description {
  color: var(--sub);
  line-height: 1.6;
  margin-bottom: 15px;
}

.area-details {
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.8;
}

.area-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
}

.area-tags .tag {
  padding: 4px 12px;
  background: rgba(79, 142, 247, 0.1);
  border-radius: 12px;
  font-size: 0.75rem;
  color: var(--azul);
}

.saiba-mais {
  background: none;
  border: none;
  color: var(--azul);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;
}

.saiba-mais:hover {
  gap: 12px;
}

/* MODAL */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 50px;
  max-width: 600px;
  width: 100%;
  position: relative;
  animation: fadeInUp 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: var(--sub);
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: var(--azul);
}

.modal-content h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  background: var(--gradiente);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.modal-content p {
  color: var(--sub);
  line-height: 1.6;
  margin-bottom: 30px;
}

.modal-features {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
}

.feature svg {
  color: var(--azul);
  flex-shrink: 0;
}

.modal-button {
  display: inline-block;
  padding: 14px 28px;
  background: var(--gradiente);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  text-align: center;
  transition: transform 0.3s ease;
}

.modal-button:hover {
  transform: translateY(-2px);
}

/* CTA */
.cta {
  position: relative;
  padding: 120px 0;
  text-align: center;
  background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7)),
              url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64') center/cover fixed;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta p {
  color: var(--sub);
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.botao {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: var(--gradiente);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.botao:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(79, 142, 247, 0.3);
  gap: 16px;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 24px;
}

.tag {
  color: var(--azul);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }

  .areas-grid {
    grid-template-columns: 1fr;
  }

  .modal-content {
    padding: 30px 20px;
  }

  .modal-content h2 {
    font-size: 1.5rem;
  }

  .cta h2 {
    font-size: 1.8rem;
  }

  .intro-badges {
    flex-direction: column;
    align-items: center;
  }
}
</style>

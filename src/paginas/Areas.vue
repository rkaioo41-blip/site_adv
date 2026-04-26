<template>
  <div class="pagina">
    <BarraNavegacao />

    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <span class="tag">Especialidades Jurídicas</span>
        <h1>Áreas de<br><em>Atuação</em></h1>
        <p>Soluções jurídicas completas, construídas com estratégia e excelência para cada necessidade.</p>
      </div>
    </section>

    <!-- ÁREAS -->
    <section class="areas">
      <div class="container">
        <div class="areas-grid">
          <div
            v-for="area in areas"
            :key="area.id"
            class="area-card"
            @click="abrirModal(area)"
          >
            <span class="numero">{{ area.numero }}</span>
            <h3>{{ area.titulo }}</h3>
            <p>{{ area.descricao }}</p>
            <ul>
              <li v-for="item in area.itens" :key="item">{{ item }}</li>
            </ul>
            <span class="link">Ver mais →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- MODAL -->
    <transition name="fade">
      <div v-if="modalAtivo" class="modal-fundo" @click.self="fecharModal">
        <div class="modal-caixa">
          <button class="fechar" @click="fecharModal">×</button>
          <span class="tag">{{ modalDado.titulo }}</span>
          <p class="modal-desc">{{ modalDado.descricaoCompleta }}</p>
          <ul class="modal-lista">
            <li v-for="item in modalDado.itens" :key="item">{{ item }}</li>
          </ul>
          <router-link to="/contato" class="btn">Solicitar Consulta</router-link>
        </div>
      </div>
    </transition>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <h2>Precisa de orientação jurídica?</h2>
        <p>Agende uma consulta e encontremos juntos a melhor solução.</p>
        <router-link to="/contato" class="btn">Agendar consulta →</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import BarraNavegacao from '../componentes/BarraNavegacao.vue'

const AREAS = [
  {
    id: 'civil',
    numero: '01',
    titulo: 'Direito Civil',
    descricao: 'Defesa de direitos patrimoniais e pessoais com foco em soluções eficazes.',
    descricaoCompleta: 'Atuação completa em direito civil, com soluções personalizadas para cada caso — de contratos a responsabilidade civil.',
    itens: ['Contratos e obrigações', 'Responsabilidade civil', 'Indenizações', 'Direito das Coisas', 'Direito de Família']
  },
  {
    id: 'penal',
    numero: '02',
    titulo: 'Direito Penal',
    descricao: 'Defesa técnica em todas as fases da persecução penal.',
    descricaoCompleta: 'Defesa criminal estratégica com foco na proteção dos direitos fundamentais e técnicas avançadas de investigação.',
    itens: ['Defesa criminal', 'Habeas corpus', 'Investigação defensiva', 'Recursos criminais', 'Tribunal do Júri']
  },
  {
    id: 'administrativo',
    numero: '03',
    titulo: 'Direito Administrativo',
    descricao: 'Assessoria em licitações, contratos públicos e processos administrativos.',
    descricaoCompleta: 'Assessoria completa em licitações e contratos públicos, garantindo conformidade legal e segurança jurídica.',
    itens: ['Licitações públicas', 'Contratos administrativos', 'Processos disciplinares', 'Improbidade administrativa', 'Concessões']
  },
  {
    id: 'empresarial',
    numero: '04',
    titulo: 'Direito Empresarial',
    descricao: 'Estruturação societária e resolução de conflitos corporativos.',
    descricaoCompleta: 'Soluções jurídicas integradas para empresas, do planejamento estratégico à resolução de conflitos.',
    itens: ['Estruturação societária', 'Contratos empresariais', 'Fusões e aquisições', 'Recuperação judicial', 'Planejamento sucessório']
  },
  {
    id: 'trabalho',
    numero: '05',
    titulo: 'Direito do Trabalho',
    descricao: 'Prevenção de passivos trabalhistas e defesa em ações judiciais.',
    descricaoCompleta: 'Prevenção e solução de conflitos trabalhistas com visão estratégica e foco em resultados.',
    itens: ['Defesa em ações trabalhistas', 'Consultoria preventiva', 'Gestão de passivos', 'Negociações coletivas', 'Compliance trabalhista']
  },
  {
    id: 'compliance',
    numero: '06',
    titulo: 'Compliance',
    descricao: 'Programas de integridade e gestão de riscos corporativos.',
    descricaoCompleta: 'Implementação de programas de integridade para prevenir riscos e garantir conformidade regulatória.',
    itens: ['Programas de integridade', 'Due diligence', 'Políticas internas', 'Treinamentos corporativos', 'Monitoramento']
  }
]

export default {
  name: 'PaginaAreas',
  components: { BarraNavegacao },
  data() {
    return {
      areas: AREAS,
      modalAtivo: false,
      modalDado: {}
    }
  },
  methods: {
    abrirModal(area) {
      this.modalDado = area
      this.modalAtivo = true
      document.body.style.overflow = 'hidden'
    },
    fecharModal() {
      this.modalAtivo = false
      document.body.style.overflow = ''
    }
  },
  // Garante limpeza caso o usuário navegue com o modal aberto
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');

/* VARIÁVEIS */
.pagina {
  --bg: #080808;
  --bg2: #0f0f0f;
  --texto: #e8e6e1;
  --sub: #888;
  --borda: rgba(255,255,255,0.08);
  --accent: #b09060;

  background: var(--bg);
  color: var(--texto);
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
}

/* HERO */
.hero {
  padding: 180px 0 100px;
  border-bottom: 1px solid var(--borda);
}

.tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 28px;
}

.hero h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 400;
  line-height: 1;
  margin: 0 0 28px;
  color: var(--texto);
}

.hero h1 em {
  font-style: italic;
  color: var(--accent);
}

.hero p {
  font-size: 1.05rem;
  color: var(--sub);
  font-weight: 300;
  max-width: 480px;
  line-height: 1.7;
  margin: 0;
}

/* ÁREAS GRID */
.areas {
  padding: 80px 0;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--borda);
  border: 1px solid var(--borda);
}

.area-card {
  background: var(--bg);
  padding: 40px 36px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.area-card:hover {
  background: var(--bg2);
}

.numero {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.85rem;
  color: var(--accent);
  letter-spacing: 0.1em;
}

.area-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.55rem;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
}

.area-card p {
  font-size: 0.88rem;
  color: var(--sub);
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
}

.area-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.area-card li {
  font-size: 0.8rem;
  color: var(--sub);
  padding-left: 14px;
  position: relative;
}

.area-card li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
  opacity: 0.6;
}

.link {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-top: 8px;
}

/* MODAL */
.modal-fundo {
  position: fixed;
  inset: 0;
  background: rgba(8, 8, 8, 0.92);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
}

.modal-caixa {
  background: var(--bg2);
  border: 1px solid var(--borda);
  border-radius: 4px;
  padding: 48px;
  max-width: 500px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.fechar {
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: none;
  color: var(--sub);
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  padding: 0;
}

.fechar:hover { color: var(--texto); }

.modal-desc {
  font-size: 0.95rem;
  color: var(--sub);
  line-height: 1.7;
  font-weight: 300;
  margin: 0;
}

.modal-lista {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modal-lista li {
  font-size: 0.9rem;
  color: var(--texto);
  padding-left: 18px;
  position: relative;
}

.modal-lista li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
}

/* BOTÃO */
.btn {
  display: inline-block;
  padding: 13px 28px;
  background: var(--accent);
  color: #080808;
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: opacity 0.2s;
  text-align: center;
}

.btn:hover { opacity: 0.85; }

/* CTA */
.cta {
  padding: 100px 0;
  border-top: 1px solid var(--borda);
  text-align: center;
}

.cta h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  margin: 0 0 16px;
}

.cta p {
  color: var(--sub);
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 36px;
}

/* TRANSIÇÃO */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter, .fade-leave-to { opacity: 0; }

/* RESPONSIVO */
@media (max-width: 900px) {
  .areas-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .hero { padding: 130px 0 70px; }
  .areas-grid { grid-template-columns: 1fr; }
  .area-card { padding: 28px 24px; }
  .modal-caixa { padding: 36px 28px; }
}
</style>

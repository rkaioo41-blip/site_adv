<template>
  <div class="pagina-faq">
    <BarraNavegacao />

    <!-- HERO -->
    <section class="hero-faq">
      <div class="overlay"></div>

      <div class="container">
        <div class="hero-conteudo">
          <span class="tag-topo">DÚVIDAS FREQUENTES</span>

          <h1>
            Perguntas e respostas
            <span class="texto-dourado">sobre nosso atendimento</span>
          </h1>

          <p>
            Reunimos as principais informações para esclarecer dúvidas sobre
            consultas, atuação jurídica, sigilo profissional e formas de
            atendimento.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="secao-faq">
      <div class="container">
        <div class="faq-lista">
          <div
            class="faq-item"
            v-for="(item, index) in perguntas"
            :key="index"
          >
            <button
              class="faq-pergunta"
              @click="toggle(index)"
              :aria-expanded="aberto === index"
            >
              <span>{{ item.pergunta }}</span>
              <span class="icone" aria-hidden="true">
                {{ aberto === index ? '−' : '+' }}
              </span>
            </button>

            <transition name="fade">
              <div v-if="aberto === index" class="faq-resposta">
                {{ item.resposta }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-final">
      <div class="overlay"></div>

      <div class="container relative">
        <div class="cta-conteudo">
          <h2>Ainda possui dúvidas?</h2>
          <p>
            Entre em contato e receba orientação jurídica personalizada.
          </p>

          <router-link to="/contato" class="botao-cta">
            AGENDAR CONSULTA
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BarraNavegacao from '../componentes/BarraNavegacao.vue'

export default {
  name: 'FAQSecao',

  components: {
    BarraNavegacao
  },

  data() {
    return {
      aberto: null,

      perguntas: [
        {
          pergunta: 'Como funciona a primeira consulta jurídica?',
          resposta:
            'A consulta inicial permite compreender a situação apresentada, analisar documentos disponíveis e indicar os caminhos jurídicos adequados ao caso.'
        },
        {
          pergunta: 'O atendimento pode ser realizado online?',
          resposta:
            'Sim. O atendimento online oferece praticidade, agilidade e total confidencialidade.'
        },
        {
          pergunta: 'O escritório atende empresas e pessoas físicas?',
          resposta:
            'Sim. O atendimento é realizado conforme a natureza da demanda jurídica apresentada.'
        },
        {
          pergunta: 'Quais áreas do direito são atendidas?',
          resposta:
            'Atuamos em demandas empresariais, estratégicas, contratuais, consultivas e demais áreas informadas no site.'
        },
        {
          pergunta: 'As informações enviadas são sigilosas?',
          resposta:
            'Sim. Todo contato é tratado com ética profissional, discrição e respeito à privacidade.'
        },
        {
          pergunta: 'Como entrar em contato rapidamente?',
          resposta:
            'Você pode utilizar o formulário do site, WhatsApp, e-mail ou demais canais oficiais disponíveis.'
        }
      ]
    }
  },

  mounted() {
    this.inserirSchemaFAQ()
  },

  beforeUnmount() {
    const antigo = document.getElementById('faq-schema')
    if (antigo) antigo.remove()
  },

  methods: {
    toggle(index) {
      this.aberto = this.aberto === index ? null : index
    },

    inserirSchemaFAQ() {
      const antigo = document.getElementById('faq-schema')
      if (antigo) antigo.remove()

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: this.perguntas.map((item) => ({
          '@type': 'Question',
          name: item.pergunta,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.resposta
          }
        }))
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'faq-schema'
      script.text = JSON.stringify(schema)

      document.head.appendChild(script)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500;700&display=swap');

/* ===== VARIÁVEIS ===== */
.pagina-faq {
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
}

/* ===== CONTAINER ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ===== HERO ===== */
.hero-faq {
  position: relative;
  padding: 140px 0 110px;
  /* background-attachment: scroll — fixed quebra no iOS/Android */
  background:
    linear-gradient(135deg, rgba(8, 8, 8, .92), rgba(8, 8, 8, .82)),
    url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80')
    center/cover scroll;
}

.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(176, 144, 96, .08), transparent 60%);
  pointer-events: none;
}

.hero-conteudo {
  position: relative;
  z-index: 2;
  max-width: 780px;
}

.tag-topo {
  display: inline-block;
  color: var(--accent);
  font-size: .72rem;
  letter-spacing: .22em;
  margin-bottom: 26px;
  border-left: 2px solid var(--accent);
  padding-left: 14px;
  font-weight: 500;
}

.hero-conteudo h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.08;
  margin-bottom: 24px;
}

.texto-dourado {
  color: var(--accent);
  font-style: italic;
}

.hero-conteudo p {
  color: var(--texto-mutado);
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 650px;
}

/* ===== FAQ ===== */
.secao-faq {
  padding: 100px 0;
}

.faq-lista {
  display: grid;
  gap: 16px;
  max-width: 860px;
  margin: 0 auto;
}

.faq-item {
  background: var(--bg3);
  border: 1px solid var(--borda);
  transition: border-color .25s ease;
}

.faq-item:hover {
  border-color: rgba(176, 144, 96, .35);
}

.faq-pergunta {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--texto);
  padding: 22px 28px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  /* Altura mínima tocável em mobile */
  min-height: 60px;
  line-height: 1.4;
}

.faq-pergunta:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -2px;
}

.icone {
  color: var(--accent);
  font-size: 1.4rem;
  flex-shrink: 0;
  line-height: 1;
  /* Evita que o ícone "pule" ao alternar */
  width: 22px;
  text-align: center;
}

.faq-resposta {
  padding: 0 28px 24px;
  color: var(--texto-mutado);
  line-height: 1.8;
  font-size: .96rem;
}

/* ===== CTA FINAL ===== */
.cta-final {
  position: relative;
  padding: 110px 0;
  /* background-attachment: scroll — fixed quebra no iOS/Android */
  background:
    linear-gradient(rgba(8, 8, 8, .9), rgba(8, 8, 8, .9)),
    url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80')
    center/cover scroll;
}

.relative {
  position: relative;
  z-index: 2;
}

.cta-conteudo {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.cta-conteudo h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 18px;
}

.cta-conteudo p {
  color: var(--texto-mutado);
  font-size: 1.05rem;
  margin-bottom: 36px;
  font-weight: 300;
}

.botao-cta {
  display: inline-block;
  padding: 16px 36px;
  text-decoration: none;
  background: var(--accent);
  color: #080808;
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
  transition: .25s ease;
}

.botao-cta:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

/* ===== ANIMAÇÃO ===== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .22s ease, transform .22s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ===== RESPONSIVIDADE ===== */

/* TABLET */
@media (max-width: 980px) {
  .container {
    padding: 0 28px;
  }

  .hero-faq {
    padding: 100px 0 80px;
  }

  .hero-conteudo h1 {
    font-size: 3.2rem;
  }

  .secao-faq {
    padding: 72px 0;
  }

  .cta-final {
    padding: 80px 0;
  }

  .cta-conteudo h2 {
    font-size: 2.6rem;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .hero-faq {
    padding: 88px 0 64px;
  }

  .hero-conteudo h1 {
    font-size: 2.5rem;
  }

  .hero-conteudo p {
    font-size: 0.97rem;
  }

  .secao-faq {
    padding: 56px 0;
  }

  .faq-pergunta {
    padding: 18px 20px;
    font-size: .94rem;
  }

  .faq-resposta {
    padding: 0 20px 20px;
    font-size: .92rem;
  }

  .cta-final {
    padding: 64px 0;
  }

  .cta-conteudo h2 {
    font-size: 2.2rem;
  }

  .cta-conteudo p {
    font-size: 0.97rem;
    margin-bottom: 28px;
  }
}

/* MOBILE PEQUENO */
@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .hero-faq {
    padding: 78px 0 56px;
  }

  .tag-topo {
    font-size: .62rem;
    letter-spacing: .16em;
  }

  .hero-conteudo h1 {
    font-size: 2rem;
    line-height: 1.12;
  }

  .hero-conteudo p {
    font-size: 0.92rem;
    line-height: 1.7;
  }

  .secao-faq {
    padding: 48px 0;
  }

  .faq-pergunta {
    padding: 16px;
    font-size: .9rem;
    min-height: 54px;
  }

  .faq-resposta {
    padding: 0 16px 18px;
  }

  .cta-final {
    padding: 56px 0;
  }

  .cta-conteudo h2 {
    font-size: 1.85rem;
  }

  .botao-cta {
    width: 100%;
    text-align: center;
    padding: 15px 20px;
  }
}
</style>

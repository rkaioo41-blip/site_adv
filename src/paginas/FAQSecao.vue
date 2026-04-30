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
            <button class="faq-pergunta" @click="toggle(index)">
              <span>{{ item.pergunta }}</span>
              <span class="icone">
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

/* container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

/* hero */
.hero-faq {
  position: relative;
  padding: 140px 0 110px;
  background:
    linear-gradient(135deg, rgba(8,8,8,.92), rgba(8,8,8,.82)),
    url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80')
    center/cover fixed;
}

.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(176,144,96,.08), transparent 60%);
}

.hero-conteudo {
  position: relative;
  z-index: 2;
  max-width: 780px;
}

.tag-topo {
  display: inline-block;
  color: var(--accent);
  font-size: .75rem;
  letter-spacing: .22em;
  margin-bottom: 26px;
  border-left: 2px solid var(--accent);
  padding-left: 14px;
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

/* faq */
.secao-faq {
  padding: 100px 0;
}

.faq-lista {
  display: grid;
  gap: 18px;
}

.faq-item {
  background: var(--bg3);
  border: 1px solid var(--borda);
  transition: .25s ease;
}

.faq-item:hover {
  border-color: rgba(176,144,96,.35);
}

.faq-pergunta {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--texto);
  padding: 24px 28px;
  cursor: pointer;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;
}

.icone {
  color: var(--accent);
  font-size: 1.4rem;
  margin-left: 20px;
}

.faq-resposta {
  padding: 0 28px 26px;
  color: var(--texto-mutado);
  line-height: 1.8;
  font-size: .96rem;
}

/* cta */
.cta-final {
  position: relative;
  padding: 110px 0;
  background:
    linear-gradient(rgba(8,8,8,.9), rgba(8,8,8,.9)),
    url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80')
    center/cover fixed;
}

.relative {
  position: relative;
  z-index: 2;
}

.cta-conteudo {
  max-width: 760px;
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
  margin-bottom: 34px;
}

.botao-cta {
  display: inline-block;
  padding: 16px 34px;
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

/* animação */
.fade-enter-active,
.fade-leave-active {
  transition: all .22s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* responsivo */
@media (max-width: 768px) {
  .container {
    padding: 0 22px;
  }

  .hero-faq {
    padding: 120px 0 80px;
  }

  .hero-conteudo h1 {
    font-size: 2.6rem;
  }

  .cta-conteudo h2 {
    font-size: 2.2rem;
  }

  .faq-pergunta {
    padding: 20px;
    font-size: .95rem;
  }

  .faq-resposta {
    padding: 0 20px 20px;
  }
}

@media (max-width: 480px) {
  .hero-conteudo h1 {
    font-size: 2.15rem;
  }
}
</style>

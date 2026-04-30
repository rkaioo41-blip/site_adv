<template>
  <div class="pagina-contato">
    <BarraNavegacao />

    <main class="conteudo">
      <div class="container">
        <header class="cabecalho-pagina">
          <h1>Contato</h1>
          <p>Entre em contato através das nossas redes sociais ou envie uma mensagem</p>
        </header>

        <section class="grade-cards" aria-label="Nossos canais de contato">
          <a
            href="https://wa.me/5562981586468"
            target="_blank"
            rel="noopener noreferrer"
            class="card-contato whatsapp"
            aria-label="Entrar em contato via WhatsApp"
          >
            <div class="icone-card" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28z" />
              </svg>
            </div>
            <h3>WhatsApp</h3>
            <p>Atendimento rápido e direto</p>
            <span class="info-card">(62) 98158-6468</span>
            <div class="acao-card">
              <span>Enviar mensagem</span>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </a>

          <a
            href="https://instagram.com/jorgeluisdir"
            target="_blank"
            rel="noopener noreferrer"
            class="card-contato instagram"
            aria-label="Acessar nosso perfil no Instagram"
          >
            <div class="icone-card" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
            </div>
            <h3>Instagram</h3>
            <p>Acompanhe nosso conteúdo</p>
            <span class="info-card">@jorgeluisdir</span>
            <div class="acao-card">
              <span>Seguir</span>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/jorge-luis-6913721a8"
            target="_blank"
            rel="noopener noreferrer"
            class="card-contato linkedin"
            aria-label="Conectar-se no LinkedIn"
          >
            <div class="icone-card" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>Conecte-se profissionalmente</p>
            <span class="info-card">/in/jorge-luis-6913721a8</span>
            <div class="acao-card">
              <span>Conectar</span>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </a>
        </section>

        <section class="info-adicional" aria-label="Informações de endereço e horário">
          <div class="item-info">
            <h4>📍 Endereço</h4>
            <address>
              Av. T-4, 619 - Setor Bueno<br />
              Goiânia - GO, 74230-035
            </address>
          </div>
          <div class="item-info">
            <h4>📧 E-mail</h4>
            <p><a href="mailto:advgjorgeluis@gmail.com" class="link-texto">advgjorgeluis@gmail.com</a></p>
          </div>
          <div class="item-info">
            <h4>🕒 Horário</h4>
            <p>Segunda a Sexta, 9h às 18h</p>
          </div>
        </section>

        <section class="container-formulario" aria-labelledby="titulo-form">
          <h3 id="titulo-form">Ou envie uma mensagem</h3>

          <Transition name="fade">
            <div v-if="mensagemSucesso" class="feedback sucesso" role="alert">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <div>
                <strong>{{ mensagemSucesso.titulo }}</strong>
                <p>{{ mensagemSucesso.texto }}</p>
              </div>
            </div>
          </Transition>

          <Transition name="fade">
            <div v-if="mensagemErro" class="feedback erro" role="alert">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
              </svg>
              <div>
                <strong>Erro ao enviar</strong>
                <p>{{ mensagemErro }}</p>
              </div>
            </div>
          </Transition>

          <form @submit.prevent="enviarContato" class="formulario-contato" novalidate>
            <div class="grade-formulario">
              <div class="grupo-form">
                <label for="nome">Nome *</label>
                <input
                  type="text"
                  id="nome"
                  v-model.trim="form.nome"
                  required
                  placeholder="Seu nome completo"
                  :disabled="enviando"
                />
              </div>
              <div class="grupo-form">
                <label for="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  v-model.trim="form.email"
                  required
                  placeholder="seu@email.com"
                  :disabled="enviando"
                />
              </div>
            </div>

            <div class="grade-formulario">
              <div class="grupo-form">
                <label for="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  v-model="form.telefone"
                  @input="aplicarMascaraTelefone"
                  placeholder="(62) 99999-9999"
                  maxlength="15"
                  :disabled="enviando"
                />
              </div>
              <div class="grupo-form">
                <label for="area">Área de Interesse *</label>
                <select id="area" v-model="form.area" required :disabled="enviando">
                  <option value="" disabled>Selecione uma área</option>
                  <option value="Direito Civil">Direito Civil</option>
                  <option value="Direito Penal">Direito Penal</option>
                  <option value="Direito Administrativo">Direito Administrativo</option>
                  <option value="Direito Empresarial">Direito Empresarial</option>
                  <option value="Direito do Trabalho">Direito do Trabalho</option>
                  <option value="Compliance">Compliance</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
            </div>

            <div class="grupo-form">
              <label for="assunto">Assunto</label>
              <input
                type="text"
                id="assunto"
                v-model.trim="form.assunto"
                placeholder="Resumo do assunto"
                :disabled="enviando"
              />
            </div>

            <div class="grupo-form">
              <label for="mensagem">Mensagem *</label>
              <textarea
                id="mensagem"
                v-model.trim="form.mensagem"
                rows="5"
                required
                placeholder="Descreva sua situação ou dúvida detalhadamente..."
                :disabled="enviando"
              ></textarea>
            </div>

            <div class="grupo-form lgpd">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="form.aceiteLGPD"
                  required
                  :disabled="enviando"
                />
                <span>
                  Concordo com a <a href="#" @click.prevent="mostrarPolitica = true">Política de Privacidade</a> e autorizo o tratamento dos meus dados para contato.
                </span>
              </label>
            </div>

            <button
              type="submit"
              class="botao-enviar"
              :disabled="enviando || !form.aceiteLGPD"
            >
              <span v-if="!enviando">Enviar mensagem</span>
              <span v-else class="spinner-container">
                Enviando... <i class="spinner"></i>
              </span>
              <svg v-if="!enviando" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </svg>
            </button>
          </form>
        </section>
      </div>
    </main>

    <Transition name="fade">
      <div v-if="mostrarPolitica" class="modal" @click.self="mostrarPolitica = false" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        <div class="modal-conteudo">
          <header class="modal-header">
            <h3 id="modal-titulo">Política de Privacidade</h3>
            <button class="fechar" @click="mostrarPolitica = false" aria-label="Fechar modal">&times;</button>
          </header>
          <div class="modal-body">
            <p><strong>Compromisso com sua privacidade</strong></p>
            <p>Seus dados pessoais serão utilizados exclusivamente para:</p>
            <ul>
              <li>Atendimento da sua solicitação;</li>
              <li>Envio de informações sobre o andamento do seu caso;</li>
              <li>Contato direto referente à sua mensagem.</li>
            </ul>
            <p><strong>Proteção de dados</strong></p>
            <p>Não compartilhamos seus dados com terceiros sem sua autorização expressa. Seus dados são armazenados de forma segura e protegidos conforme a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).</p>
            <p><strong>Seus direitos</strong></p>
            <p>Você pode solicitar a exclusão, correção ou acesso aos seus dados a qualquer momento através do e-mail: <a href="mailto:advgjorgeluis@gmail.com">advgjorgeluis@gmail.com</a>.</p>
            <p>Ao clicar em "Concordo", você aceita nossa política de privacidade e autoriza o tratamento dos seus dados para os fins descritos acima.</p>
          </div>
          <footer class="modal-footer">
            <button class="botao-fechar" @click="mostrarPolitica = false">Concordo</button>
          </footer>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import BarraNavegacao from '../componentes/BarraNavegacao.vue'
import api from '../services/api'

export default {
  name: 'PaginaContato',
  components: {
    BarraNavegacao,
  },
  data() {
    return {
      form: {
        nome: '',
        email: '',
        telefone: '',
        area: '',
        assunto: '',
        mensagem: '',
        aceiteLGPD: false
      },
      enviando: false,
      mensagemSucesso: null,
      mensagemErro: null,
      mostrarPolitica: false,
      timeoutId: null
    }
  },
  beforeUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  },
  methods: {
    aplicarMascaraTelefone(event) {
      let v = event.target.value.replace(/\D/g, '');
      v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
      v = v.replace(/(\d)(\d{4})$/, '$1-$2');
      this.form.telefone = v;
    },
    limparAlertas() {
      this.mensagemSucesso = null;
      this.mensagemErro = null;
      if (this.timeoutId) clearTimeout(this.timeoutId);
    },
    validarFormulario() {
      if (!this.form.nome || !this.form.email || !this.form.mensagem || !this.form.area) {
        this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios (*).';
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        this.mensagemErro = 'Por favor, insira um e-mail válido.';
        return false;
      }
      if (!this.form.aceiteLGPD) {
        this.mensagemErro = 'Você precisa aceitar a Política de Privacidade para enviar a mensagem.';
        return false;
      }
      return true;
    },
    async enviarContato() {
      this.limparAlertas();
      if (!this.validarFormulario()) {
        this.rolarParaTopo();
        return;
      }
      this.enviando = true;
      try {
        await api.post('/contatos', {
          contato: {
            nome: this.form.nome,
            email: this.form.email,
            telefone: this.form.telefone,
            area: this.form.area,
            assunto: this.form.assunto || 'Não informado',
            mensagem: this.form.mensagem
          }
        });
        this.mensagemSucesso = {
          titulo: '✓ Mensagem enviada com sucesso!',
          texto: `Olá ${this.form.nome}, recebemos sua mensagem sobre ${this.form.area}. Um de nossos advogados entrará em contato em breve pelo e-mail ${this.form.email}. Agradecemos o contato!`
        };
        this.resetarFormulario();
        this.rolarParaTopo();
        this.timeoutId = setTimeout(() => { this.mensagemSucesso = null; }, 8000);
      } catch (error) {
        console.error('Erro ao enviar contato:', error);
        if (error.response?.data?.errors) {
          this.mensagemErro = error.response.data.errors.join(', ');
        } else if (error.request) {
          this.mensagemErro = 'Erro de conexão. Verifique sua internet ou tente novamente mais tarde.';
        } else {
          this.mensagemErro = 'Ocorreu um erro inesperado. Tente novamente.';
        }
        this.rolarParaTopo();
        this.timeoutId = setTimeout(() => { this.mensagemErro = null; }, 6000);
      } finally {
        this.enviando = false;
      }
    },
    resetarFormulario() {
      this.form = { nome: '', email: '', telefone: '', area: '', assunto: '', mensagem: '', aceiteLGPD: false };
    },
    rolarParaTopo() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
/* =========================================
   VARIÁVEIS GLOBAIS - CINZA E AMARELO (padronizado com Areas.vue)
   ========================================= */
.pagina-contato {
  --bg: #080808;
  --bg2: #0f0f0f;
  --texto: #e8e6e1;
  --sub: #888;
  --borda: rgba(255, 255, 255, 0.08);
  --accent: #b09060;      /* amarelo/dourado */
  --accent-hover: #c9a86b;

  background: var(--bg);
  color: var(--texto);
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
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

/* =========================================
   CABEÇALHO DA PÁGINA
   ========================================= */
.cabecalho-pagina {
  text-align: center;
  margin-bottom: 60px;
}

.cabecalho-pagina h1 {
  color: var(--texto);
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 15px;
}

.cabecalho-pagina p {
  color: var(--sub);
  font-size: 1.1rem;
}

/* =========================================
   CARDS DE CONTATO (REDES SOCIAIS)
   ========================================= */
.grade-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.card-contato {
  background: var(--bg2);
  border: 1px solid var(--borda);
  border-radius: 4px;
  padding: 40px 30px;
  text-decoration: none;
  color: var(--texto);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-contato::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.card-contato:hover {
  transform: translateY(-5px);
  border-color: rgba(176, 144, 96, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.card-contato:hover::before {
  transform: translateX(0);
}

.icone-card {
  margin-bottom: 25px;
  color: var(--accent);
  transition: transform 0.3s ease;
}

.card-contato:hover .icone-card {
  transform: scale(1.05);
}

.card-contato h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 500;
}

.card-contato p {
  color: var(--sub);
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.info-card {
  color: var(--accent);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.acao-card {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-weight: 500;
  margin-top: auto;
  transition: color 0.3s ease;
}

.card-contato:hover .acao-card {
  color: var(--texto);
}

/* =========================================
   INFORMAÇÕES ADICIONAIS
   ========================================= */
.info-adicional {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  padding: 40px;
  background: var(--bg2);
  border-radius: 4px;
  border: 1px solid var(--borda);
}

.item-info {
  text-align: center;
}

.item-info h4 {
  color: var(--accent);
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.item-info p, .item-info address {
  color: var(--sub);
  line-height: 1.6;
  font-style: normal;
}

.link-texto {
  color: var(--sub);
  text-decoration: none;
  transition: color 0.3s;
}
.link-texto:hover {
  color: var(--accent);
}

/* =========================================
   FORMULÁRIO DE CONTATO
   ========================================= */
.container-formulario {
  background: var(--bg2);
  border-radius: 4px;
  padding: 50px;
  border: 1px solid var(--borda);
}

.container-formulario h3 {
  color: var(--texto);
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 40px;
}

.formulario-contato {
  max-width: 800px;
  margin: 0 auto;
}

.grade-formulario {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.grupo-form {
  margin-bottom: 20px;
}

.grupo-form label {
  display: block;
  color: var(--accent);
  margin-bottom: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.03em;
}

.grupo-form input,
.grupo-form textarea,
.grupo-form select {
  width: 100%;
  padding: 12px 15px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--borda);
  border-radius: 2px;
  color: var(--texto);
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.grupo-form input:focus,
.grupo-form textarea:focus,
.grupo-form select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 8px rgba(176, 144, 96, 0.2);
}

.grupo-form input:disabled,
.grupo-form textarea:disabled,
.grupo-form select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.grupo-form input::placeholder,
.grupo-form textarea::placeholder {
  color: #555;
}

.grupo-form select option {
  background: var(--bg2);
  color: var(--texto);
}

/* CHECKBOX LGPD */
.lgpd {
  margin: 20px 0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin-top: 3px;
  cursor: pointer;
  accent-color: var(--accent);
}

.checkbox-label span {
  color: var(--sub);
  font-size: 0.85rem;
  line-height: 1.4;
}

.checkbox-label a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s;
}

.checkbox-label a:hover {
  color: var(--accent-hover);
  text-decoration: underline;
}

/* BOTÃO ENVIAR */
.botao-enviar {
  width: 100%;
  padding: 14px 30px;
  background: var(--accent);
  border: none;
  border-radius: 2px;
  color: #080808;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.botao-enviar:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.botao-enviar:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* FEEDBACKS (sucesso/erro) */
.feedback {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 20px;
  border-radius: 4px;
  margin-bottom: 30px;
}

.feedback.sucesso {
  background: rgba(176, 144, 96, 0.08);
  border: 1px solid var(--accent);
  border-left: 3px solid var(--accent);
  color: var(--accent);
}

.feedback.erro {
  background: rgba(255, 70, 70, 0.08);
  border: 1px solid #e5484d;
  border-left: 3px solid #e5484d;
  color: #e5484d;
}

.feedback svg { flex-shrink: 0; }
.feedback strong { display: block; margin-bottom: 5px; font-size: 0.9rem; }
.feedback p { margin: 0; font-size: 0.85rem; line-height: 1.4; }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.spinner-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.spinner {
  border: 2px solid rgba(8, 8, 8, 0.2);
  border-left-color: #080808;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* MODAL DE POLÍTICA DE PRIVACIDADE */
.modal {
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

.modal-conteudo {
  background: var(--bg2);
  border: 1px solid var(--borda);
  border-radius: 4px;
  max-width: 550px;
  width: 90%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 1px solid var(--borda);
}

.modal-header h3 {
  color: var(--accent);
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
}

.modal-header .fechar {
  background: none;
  border: none;
  color: var(--sub);
  font-size: 28px;
  cursor: pointer;
  transition: color 0.2s;
}
.modal-header .fechar:hover { color: var(--accent); }

.modal-body {
  padding: 25px;
  overflow-y: auto;
  color: var(--sub);
  line-height: 1.6;
  font-size: 0.9rem;
}

.modal-body p { margin-bottom: 15px; }
.modal-body ul { margin: 10px 0 20px 20px; }
.modal-body li { margin-bottom: 6px; }
.modal-body a { color: var(--accent); }

.modal-footer {
  padding: 20px 25px;
  border-top: 1px solid var(--borda);
  text-align: center;
}

.botao-fechar {
  background: var(--accent);
  color: #080808;
  border: none;
  padding: 10px 30px;
  border-radius: 2px;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}
.botao-fechar:hover {
  background: var(--accent-hover);
}

/* RESPONSIVIDADE */
@media (max-width: 768px) {
  .cabecalho-pagina h1 { font-size: 2rem; }
  .grade-formulario {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .container-formulario,
  .info-adicional {
    padding: 30px 20px;
  }
  .container-formulario h3 { font-size: 1.5rem; }
  .modal-conteudo { width: 95%; margin: 20px; }
}

@media (max-width: 480px) {
  .conteudo { padding: 40px 0; }
  .cabecalho-pagina h1 { font-size: 1.8rem; }
  .card-contato { padding: 30px 20px; }
}
</style>

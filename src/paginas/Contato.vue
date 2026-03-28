<template>
  <div class="pagina-contato">
    <!-- Barra de navegação -->
    <BarraNavegacao />

    <!-- Conteúdo da página -->
    <main class="conteudo">
      <div class="container">
        <!-- Cabeçalho da página -->
        <div class="cabecalho-pagina">
          <h1>Contato</h1>
          <p>Entre em contato através de nossas redes sociais ou envie uma mensagem</p>
        </div>

        <!-- Cards de contato -->
        <div class="grade-cards">
          <!-- Card WhatsApp -->
          <a
            href="https://wa.me/5562981586468"
            target="_blank"
            rel="noopener noreferrer"
            class="card-contato whatsapp"
          >
            <div class="icone-card">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28z"
                />
              </svg>
            </div>
            <h3>WhatsApp</h3>
            <p>Atendimento rápido e direto</p>
            <span class="info-card">(62) 98158 - 6468</span>
            <div class="acao-card">
              <span>Enviar mensagem</span>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </a>

          <!-- Card Instagram -->
          <a
            href="https://instagram.com/jorgeluisdir"
            target="_blank"
            rel="noopener noreferrer"
            class="card-contato instagram"
          >
            <div class="icone-card">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                />
              </svg>
            </div>
            <h3>Instagram</h3>
            <p>Acompanhe nosso conteúdo</p>
            <span class="info-card">@jorgeluisdir</span>
            <div class="acao-card">
              <span>Seguir</span>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </a>

          <!-- Card LinkedIn -->
          <a
            href="https://linkedin.com/in/jorge-luis-6913721a8"
            target="_blank"
            rel="noopener noreferrer"
            class="card-contato linkedin"
          >
            <div class="icone-card">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                />
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>Conecte-se profissionalmente</p>
            <span class="info-card">/in/jorge-luis-6913721a8/</span>
            <div class="acao-card">
              <span>Conectar</span>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </a>
        </div>

        <!-- Informações adicionais -->
        <div class="info-adicional">
          <div class="item-info">
            <h4>📍 Endereço</h4>
            <p>Av. T-4, 619 - Setor Bueno<br />Goiânia - GO, 74230-035</p>
          </div>
          <div class="item-info">
            <h4>📧 E-mail</h4>
            <p>advgjorgeluis@gmail.com</p>
          </div>
          <div class="item-info">
            <h4>🕒 Horário</h4>
            <p>Segunda a Sexta, 9h às 18h</p>
          </div>
        </div>

        <!-- Formulário de contato -->
        <div class="container-formulario">
          <h3>Ou envie uma mensagem</h3>
          <form class="formulario-contato">
            <div class="grade-formulario">
              <div class="grupo-form">
                <label for="nome">Nome</label>
                <input type="text" id="nome" placeholder="Seu nome completo" />
              </div>
              <div class="grupo-form">
                <label for="email">E-mail</label>
                <input type="email" id="email" placeholder="seu@email.com" />
              </div>
            </div>
            <div class="grupo-form">
              <label for="assunto">Assunto</label>
              <input type="text" id="assunto" placeholder="Assunto da mensagem" />
            </div>
            <div class="grupo-form">
              <label for="mensagem">Mensagem</label>
              <textarea id="mensagem" rows="5" placeholder="Digite sua mensagem..."></textarea>
            </div>
            <button type="submit" class="botao-enviar">
              Enviar mensagem
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BarraNavegacao from '../componentes/BarraNavegacao.vue'

export default {
  name: 'PaginaContato',
  components: {
    BarraNavegacao,
  },
}
</script>

<style scoped>
.pagina-contato {
  background: #0a0a0a;
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

/* Cabeçalho */
.cabecalho-pagina {
  text-align: center;
  margin-bottom: 60px;
}

.cabecalho-pagina h1 {
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 15px;
}

.cabecalho-pagina p {
  color: #b0b0b0;
  font-size: 1.1rem;
}

/* Grade de cards */
.grade-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.card-contato {
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border: 1px solid rgba(212, 175, 55, 0.1);
  border-radius: 12px;
  padding: 40px 30px;
  text-decoration: none;
  color: #ffffff;
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
  height: 3px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.card-contato:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-color: rgba(212, 175, 55, 0.3);
}

.card-contato:hover::before {
  transform: translateX(100%);
}

/* Cores específicas para cada card */
.card-contato.whatsapp:hover {
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.15);
}

.card-contato.instagram:hover {
  box-shadow: 0 10px 30px rgba(225, 48, 108, 0.15);
}

.card-contato.linkedin:hover {
  box-shadow: 0 10px 30px rgba(10, 102, 194, 0.15);
}

.icone-card {
  margin-bottom: 25px;
  color: #d4af37;
  transition: all 0.3s ease;
}

.card-contato:hover .icone-card {
  transform: scale(1.1);
}

.card-contato h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ffffff;
}

.card-contato p {
  color: #b0b0b0;
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.info-card {
  color: #d4af37;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.acao-card {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #d4af37;
  font-weight: 500;
  margin-top: auto;
  transition: all 0.3s ease;
}

.card-contato:hover .acao-card {
  color: #ffffff;
}

/* Informações adicionais */
.info-adicional {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  padding: 40px;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.item-info {
  text-align: center;
}

.item-info h4 {
  color: #d4af37;
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.item-info p {
  color: #b0b0b0;
  line-height: 1.6;
}

/* Formulário */
.container-formulario {
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 12px;
  padding: 50px;
  border: 1px solid rgba(212, 175, 55, 0.1);
}

.container-formulario h3 {
  color: #ffffff;
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
  color: #d4af37;
  margin-bottom: 8px;
  font-size: 0.95rem;
  font-weight: 500;
}

.grupo-form input,
.grupo-form textarea {
  width: 100%;
  padding: 12px 15px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 6px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.grupo-form input:focus,
.grupo-form textarea:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
}

.grupo-form input::placeholder,
.grupo-form textarea::placeholder {
  color: #666;
}

.botao-enviar {
  width: 100%;
  padding: 15px 30px;
  background: #d4af37;
  border: none;
  border-radius: 6px;
  color: #0a0a0a;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.botao-enviar:hover {
  background: #e5c05c;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
}

/* Responsividade */
@media (max-width: 968px) {
  .grade-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-adicional {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cabecalho-pagina h1 {
    font-size: 2rem;
  }

  .grade-cards {
    grid-template-columns: 1fr;
  }

  .info-adicional {
    grid-template-columns: 1fr;
    padding: 30px;
  }

  .container-formulario {
    padding: 30px;
  }

  .container-formulario h3 {
    font-size: 1.5rem;
  }

  .grade-formulario {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 480px) {
  .conteudo {
    padding: 40px 0;
  }

  .cabecalho-pagina h1 {
    font-size: 1.8rem;
  }

  .card-contato {
    padding: 30px 20px;
  }

  .container-formulario {
    padding: 20px;
  }
}
</style>

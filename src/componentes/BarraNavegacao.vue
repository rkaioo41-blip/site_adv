<template>
  <header class="cabecalho">
    <div class="container">
      <!-- Logo maior e separada -->
      <div class="area-logo">
        <img src="@/assets/logo.jpg" alt="Jorge Luis Ferreira dos Santos" class="logo" />
        <div class="texto-logo">
          <h1>JORGE LUIS</h1>
          <h2>FERREIRA DOS SANTOS</h2>
        </div>
      </div>
    </div>

    <!-- Barra de navegação inferior -->
    <div class="nav-container">
      <nav class="barra-nav">
        <ul class="menu-nav">
          <li><router-link to="/" class="link-nav" active-class="ativo">INÍCIO</router-link></li>
          <li>
            <router-link to="/sobre" class="link-nav" active-class="ativo">SOBRE NÓS</router-link>
          </li>
          <li>
            <router-link to="/areas" class="link-nav" active-class="ativo"
              >ÁREAS DE ATUAÇÃO</router-link
            >
          </li>
          <li>
            <router-link to="/contato" class="link-nav" active-class="ativo">CONTATO</router-link>
          </li>
        </ul>

        <router-link to="/contato" class="botao-contato">
          <span>AGENDAR CONSULTA INICIAL</span>
          <svg class="icone-whatsapp" viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="currentColor"
              d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28z"
            />
          </svg>
        </router-link>
      </nav>
    </div>

    <!-- Linha decorativa -->
    <div class="linha"></div>
  </header>
</template>

<script>
export default {
  name: 'BarraNavegacao',
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== VARIÁVEIS ===== */
:root {
  --cor-azul: #4F8EF7;
  --cor-azul-escuro: #1A3FAA;
  --cor-azul-claro: #93C5FD;
  --cor-gradiente: linear-gradient(135deg, #1A3FAA 0%, #4F8EF7 55%, #93C5FD 100%);
}

.cabecalho {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(79, 142, 247, 0.18);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: flex-start;
}

/* Logo Area */
.area-logo {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  width: 90px;
  height: 90px;
  border-radius: 0;
  object-fit: cover;
  border: 2px solid #000000;
  box-shadow: 0 0 20px rgba(79, 142, 247, 0.3);
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px rgba(79, 142, 247, 0.55);
  border-color: #4F8EF7;
}

.texto-logo {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.texto-logo h1 {
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.texto-logo h2 {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.texto-logo .advogado {
  background: var(--cor-gradiente);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 4px;
  text-transform: uppercase;
}

/* Container da navegação */
.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 15px 40px;
  width: 100%;
}

.barra-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  border-top: 1px solid rgba(79, 142, 247, 0.25);
}

.menu-nav {
  display: flex;
  gap: 35px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.link-nav {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 8px 0;
  position: relative;
  transition: all 0.2s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
}

.link-nav::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--cor-gradiente);
  box-shadow: 0 0 10px rgba(79, 142, 247, 0.6);
  transition: width 0.25s ease;
}

.link-nav:hover {
  color: #93C5FD;
}

.link-nav:hover::after {
  width: 100%;
}

.link-nav.ativo {
  color: #4F8EF7;
  font-weight: 600;
}

.link-nav.ativo::after {
  width: 100%;
  background: var(--cor-gradiente);
  box-shadow: 0 0 10px rgba(79, 142, 247, 0.6);
}

/* Botão de contato */
.botao-contato {
  background: transparent;
  border: 2px solid #4F8EF7;
  color: #4F8EF7;
  padding: 10px 25px;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  box-shadow: 0 0 15px rgba(79, 142, 247, 0.2);
  text-transform: uppercase;
}

.botao-contato:hover {
  background: var(--cor-gradiente);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 5px 25px rgba(79, 142, 247, 0.5);
  border-color: transparent;
}

.icone-whatsapp {
  transition: transform 0.2s ease;
}

.botao-contato:hover .icone-whatsapp {
  transform: scale(1.1);
}

/* Linha decorativa */
.linha {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(79, 142, 247, 0.3),
    #4F8EF7,
    rgba(79, 142, 247, 0.3),
    transparent
  );
  box-shadow: 0 0 15px rgba(79, 142, 247, 0.4);
  opacity: 0.9;
}

/* Responsividade */
@media (max-width: 968px) {
  .container {
    padding: 15px 20px;
    justify-content: center;
  }

  .area-logo {
    justify-content: center;
  }

  .nav-container {
    padding: 0 20px 15px 20px;
  }

  .barra-nav {
    flex-direction: column;
    gap: 20px;
  }

  .menu-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 70px;
    height: 70px;
  }

  .texto-logo h1 {
    font-size: 1.3rem;
  }

  .texto-logo h2 {
    font-size: 1.1rem;
  }

  .texto-logo .advogado {
    font-size: 0.85rem;
  }

  .menu-nav {
    gap: 15px;
  }

  .link-nav {
    font-size: 0.8rem;
  }

  .botao-contato {
    padding: 8px 18px;
    font-size: 0.85rem;
  }
}
</style>

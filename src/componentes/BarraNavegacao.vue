<template>
  <header class="cabecalho">
    <!-- TOPO -->
    <div class="container topo">
      <router-link to="/" class="marca">
        <img
          src="@/assets/logo.jpeg"
          alt="Jorge Luis Ferreira dos Santos"
          class="logo"
        />

        <div class="texto-logo">
          <h1>JORGE LUIS</h1>
          <h2>FERREIRA DOS SANTOS</h2>
        </div>
      </router-link>

      <!-- MENU DESKTOP -->
      <nav class="menu-desktop">
        <router-link to="/" class="link-nav">INÍCIO</router-link>
        <router-link to="/sobre" class="link-nav">SOBRE</router-link>
        <router-link to="/areas" class="link-nav">ÁREAS DE ATUAÇÃO</router-link>
        <router-link to="/duvidas" class="link-nav">DÚVIDAS</router-link>
        <router-link to="/contato" class="link-nav">CONTATO</router-link>
      </nav>

      <router-link to="/contato" class="botao-desktop">
        AGENDAR CONSULTA
      </router-link>

      <!-- BOTÃO MOBILE -->
      <button
        class="menu-mobile-btn"
        @click="menuAberto = !menuAberto"
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- MENU MOBILE -->
    <transition name="fade">
      <div v-if="menuAberto" class="painel-mobile">
        <router-link @click="fecharMenu" to="/">INÍCIO</router-link>
        <router-link @click="fecharMenu" to="/sobre">SOBRE</router-link>
        <router-link @click="fecharMenu" to="/areas">ÁREAS</router-link>
        <router-link @click="fecharMenu" to="/faq">FAQ</router-link>
        <router-link @click="fecharMenu" to="/contato">CONTATO</router-link>

        <router-link
          @click="fecharMenu"
          to="/contato"
          class="botao-mobile"
        >
          AGENDAR CONSULTA
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'BarraNavegacao',

  data() {
    return {
      menuAberto: false
    }
  },

  methods: {
    fecharMenu() {
      this.menuAberto = false
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* HEADER */
.cabecalho {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(8, 8, 8, 0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 8px 24px rgba(0,0,0,.28);
}

/* CONTAINER */
.container {
  max-width: 1420px;
  margin: 0 auto;
  padding: 0 32px;
}

/* TOPO */
.topo {
  min-height: 108px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
}

/* MARCA */
.marca {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo {
  width: 82px;
  height: 82px;
  object-fit: contain;
  background: #111;
  padding: 6px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.06);
}

.texto-logo {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.texto-logo h1 {
  color: #fff;
  font-size: 1.28rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.05;
}

.texto-logo h2 {
  color: #cfcfcf;
  font-size: 0.98rem;
  font-weight: 400;
  line-height: 1.05;
}

/* MENU DESKTOP */
.menu-desktop {
  display: flex;
  align-items: center;
  gap: 34px;
}

.link-nav {
  position: relative;
  color: #d5d5d5;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 1px;
  transition: .25s ease;
  padding: 6px 0;
}

.link-nav:hover,
.router-link-active {
  color: #b09060;
}

.link-nav::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: #b09060;
  transition: .25s ease;
}

.link-nav:hover::after,
.router-link-active::after {
  width: 100%;
}

/* BOTÃO DESKTOP */
.botao-desktop {
  padding: 15px 26px;
  background: #b09060;
  color: #080808;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 1px;
  transition: .25s ease;
  white-space: nowrap;
}

.botao-desktop:hover {
  transform: translateY(-2px);
  background: #c7a56a;
}

/* BOTÃO MOBILE */
.menu-mobile-btn {
  display: none;
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.menu-mobile-btn span {
  display: block;
  width: 26px;
  height: 2px;
  background: #fff;
  margin: 5px auto;
}

/* PAINEL MOBILE */
.painel-mobile {
  display: none;
}

/* ANIMAÇÃO */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* TABLET */
@media (max-width: 1180px) {
  .menu-desktop {
    gap: 22px;
  }

  .link-nav {
    font-size: 0.84rem;
  }

  .botao-desktop {
    padding: 14px 20px;
  }
}

/* MOBILE */
@media (max-width: 980px) {
  .menu-desktop,
  .botao-desktop {
    display: none;
  }

  .menu-mobile-btn {
    display: block;
  }

  .topo {
    min-height: 84px;
  }

  .logo {
    width: 58px;
    height: 58px;
  }

  .texto-logo h1 {
    font-size: 0.95rem;
  }

  .texto-logo h2 {
    font-size: 0.75rem;
  }

  .painel-mobile {
    display: flex;
    flex-direction: column;
    gap: 14px;

    padding: 20px 24px 28px;
    background: #0d0d0d;
    border-top: 1px solid rgba(255,255,255,.06);
  }

  .painel-mobile a {
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;
    padding: 8px 0;
    letter-spacing: 1px;
  }

  .botao-mobile {
    margin-top: 10px;
    background: #b09060;
    color: #080808 !important;
    text-align: center;
    padding: 14px;
    font-weight: 700;
  }
}

/* CELULAR */
@media (max-width: 600px) {
  .container {
    padding: 0 16px;
  }

  .topo {
    min-height: 78px;
  }

  .logo {
    width: 52px;
    height: 52px;
  }

  .texto-logo h1 {
    font-size: 0.82rem;
  }

  .texto-logo h2 {
    font-size: 0.68rem;
  }
}
</style>

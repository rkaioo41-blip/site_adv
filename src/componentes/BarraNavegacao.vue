<template>
  <header class="cabecalho">
    <div class="container">
      <!-- LOGO -->
      <div class="area-logo">
        <img
          src="@/assets/logo.jpeg"
          alt="Jorge Luis Ferreira dos Santos"
          class="logo"
        />

        <div class="texto-logo">
          <h1>JORGE LUIS</h1>
          <h2>FERREIRA DOS SANTOS</h2>
          <span class="oab">OAB/GO 77292 • Advogado</span>
        </div>
      </div>
    </div>

    <!-- NAVEGAÇÃO -->
    <div class="nav-container">
      <nav class="barra-nav">
        <ul class="menu-nav">
          <li>
            <router-link
              to="/"
              class="link-nav"
              active-class="ativo"
              exact-active-class="ativo"
            >
              INÍCIO
            </router-link>
          </li>

          <li>
            <router-link to="/sobre" class="link-nav" active-class="ativo">
              SOBRE
            </router-link>
          </li>

          <li>
            <router-link to="/areas" class="link-nav" active-class="ativo">
              ÁREAS DE ATUAÇÃO
            </router-link>
          </li>

          <li>
            <router-link to="/contato" class="link-nav" active-class="ativo">
              CONTATO
            </router-link>
          </li>
        </ul>

        <router-link to="/contato" class="botao-contato">
          <span>AGENDAR CONSULTA</span>

          <svg
            class="icone-whatsapp"
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path
              fill="currentColor"
              d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91
              0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74
              1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01z"
            />
          </svg>
        </router-link>
      </nav>
    </div>

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

/* =====================================
   PALETA NAVBAR
===================================== */
:root {
  --nav-bg-1: #050505;
  --nav-bg-2: #111111;
  --nav-bg-3: #1a1a1a;

  --prata: #d7d7d7;
  --prata-2: #a6a6a6;
  --branco: #ffffff;

  --borda: rgba(255, 255, 255, 0.08);
}

/* HEADER */
.cabecalho {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: linear-gradient(
    135deg,
    var(--nav-bg-1),
    var(--nav-bg-2),
    var(--nav-bg-3)
  );

  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--borda);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
}

/* CONTAINERS */
.container,
.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.container {
  padding-top: 18px;
  padding-bottom: 18px;
}

/* =====================================
   LOGO AJUSTADA
===================================== */
.area-logo {
  display: flex;
  align-items: center;
  gap: 18px;
}

/* principal ajuste */
.logo {
  width: 88px;
  height: 88px;
  object-fit: contain; /* mostra inteira */
  object-position: center;
  background: #0d0d0d;
  padding: 6px;
  border-radius: 10px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 8px 18px rgba(0, 0, 0, 0.45),
    inset 0 0 0 1px rgba(255,255,255,0.03);

  transition: all 0.3s ease;
}

.logo:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow:
    0 12px 25px rgba(0, 0, 0, 0.55),
    0 0 14px rgba(176, 144, 96, 0.18);
}

.texto-logo {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.texto-logo h1,
.texto-logo h2 {
  color: var(--branco);
  line-height: 1.05;
}

.texto-logo h1 {
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.texto-logo h2 {
  font-size: 1.16rem;
  font-weight: 500;
}

.oab {
  margin-top: 6px;
  color: var(--prata-2);
  font-size: 0.76rem;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

/* =====================================
   NAV
===================================== */
.nav-container {
  padding-bottom: 14px;
}

.barra-nav {
  border-top: 1px solid var(--borda);
  padding-top: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.menu-nav {
  display: flex;
  list-style: none;
  gap: 34px;
  flex-wrap: wrap;
}

.link-nav {
  position: relative;
  color: var(--prata);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 1.3px;
  padding-bottom: 8px;
  transition: 0.25s ease;
}

.link-nav:hover,
.link-nav.ativo {
  color: var(--branco);
}

.link-nav::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;

  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ffffff, #9f9f9f);
  transition: 0.25s ease;
}

.link-nav:hover::after,
.link-nav.ativo::after {
  width: 100%;
}

/* BOTÃO */
.botao-contato {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 12px 24px;
  text-decoration: none;

  border: 1px solid rgba(255, 255, 255, 0.14);
  color: var(--branco);
  background: linear-gradient(135deg, #222, #3a3a3a);

  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  transition: 0.25s ease;
}

.botao-contato:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #3b3b3b, #575757);
}

.icone-whatsapp {
  transition: 0.25s ease;
}

.botao-contato:hover .icone-whatsapp {
  transform: scale(1.08);
}

.linha {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.15),
    transparent
  );
}

/* =====================================
   RESPONSIVO
===================================== */
@media (max-width: 980px) {
  .barra-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .botao-contato {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .container,
  .nav-container {
    padding: 0 20px;
  }

  .logo {
    width: 72px;
    height: 72px;
    padding: 5px;
  }

  .texto-logo h1 {
    font-size: 1.08rem;
  }

  .texto-logo h2 {
    font-size: 0.92rem;
  }

  .oab {
    font-size: 0.68rem;
  }

  .menu-nav {
    flex-direction: column;
    gap: 14px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 62px;
    height: 62px;
  }

  .texto-logo h1 {
    font-size: 0.95rem;
  }

  .texto-logo h2 {
    font-size: 0.8rem;
  }

  .oab {
    font-size: 0.62rem;
  }
}
</style>

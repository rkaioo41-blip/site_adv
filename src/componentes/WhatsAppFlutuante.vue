<template>
  <a
    href="https://wa.me/5562981586468?text=Olá,%20gostaria%20de%20falar%20com%20um%20advogado."
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp"
    aria-label="Falar no WhatsApp"
    title="Falar no WhatsApp"
  >
    <span class="tooltip">Fale conosco</span>

    <svg
      class="icone"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.16 1.6 5.98L0 24l6.28-1.65a11.88 11.88 0 0 0 5.79 1.48h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.16-3.47-8.44zM12.08 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9zm5.43-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-.03 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.85.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35z"
      />
    </svg>
  </a>
</template>

<script>
export default {
  name: 'WhatsAppFlutuante'
}
</script>

<style scoped>
.whatsapp {
  position: fixed;
  right: 22px;
  bottom: 22px;
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  text-decoration: none;

  background: linear-gradient(135deg, #128c7e, #25d366);
  color: #ffffff;

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255,255,255,0.08);

  z-index: 9999;
  transition: all 0.25s ease;
}

.whatsapp:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255,255,255,0.12);
}

.icone {
  width: 30px;
  height: 30px;
}

.tooltip {
  position: absolute;
  right: 78px;

  background: #111111;
  color: #ffffff;

  font-size: 0.78rem;
  font-weight: 500;
  white-space: nowrap;

  padding: 10px 14px;
  border-radius: 8px;

  opacity: 0;
  visibility: hidden;
  transform: translateX(8px);

  transition: all 0.25s ease;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -5px;

  width: 10px;
  height: 10px;

  background: #111111;
  transform: translateY(-50%) rotate(45deg);
}

.whatsapp:hover .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .whatsapp {
    width: 58px;
    height: 58px;
    right: 16px;
    bottom: 16px;
  }

  .icone {
    width: 26px;
    height: 26px;
  }

  .tooltip {
    display: none;
  }
}
</style>

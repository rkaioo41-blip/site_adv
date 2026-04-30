<template>
  <div id="app">
    <router-view />
    <WhatsAppFlutuante />
  </div>
</template>

<script>
import WhatsAppFlutuante from './componentes/WhatsAppFlutuante.vue'

export default {
  name: 'App',
  components: {
    WhatsAppFlutuante
  }
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  min-height: 100%;
}
</style>

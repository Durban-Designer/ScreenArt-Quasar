<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style></style>

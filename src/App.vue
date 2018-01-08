<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <navbar :loggedIn="loggedIn"></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/elements/Navbar'
export default {
  name: 'app',
  components: {
    'navbar': Navbar
  },
  data: function () {
    return {
      loggedIn: false
    }
  }
}
</script>

<style scoped lang="less">
</style>

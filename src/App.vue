<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <navbar :loggedIn="loggedIn" :user="user"></navbar>
    <transition name="fade">
      <router-view v-on:login="login" v-on:logOut="logOut" :user="user" :loggedIn="loggedIn"/>
    </transition>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './components/elements/Navbar'
import Foot from './components/elements/Foot'
export default {
  name: 'app',
  components: {
    'navbar': Navbar,
    'foot': Foot
  },
  data: function () {
    return {
      loggedIn: false,
      user: {
        id: '',
        token: '',
        admin: false,
        employee: false
      }
    }
  },
  methods: {
    login: function (user) {
      let vue = this
      vue.user.token = user.token
      vue.user.id = user.id
      vue.user.admin = user.admin
      vue.user.employee = user.employee
      vue.loggedIn = true
      if (vue.user.employee === true) {
        vue.$router.push('/crm')
      }
      else {
        vue.$router.push('/customeraccount')
      }
    },
    logOut: function () {
      let vue = this
      vue.user.token = ''
      vue.user.id = ''
      vue.loggedIn = false
      vue.$router.push('/')
    }
  }
}
</script>

<style scoped lang="less">

.fade-enter-active, .fade-leave-active {
  transition: all .25s ease;
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
</style>

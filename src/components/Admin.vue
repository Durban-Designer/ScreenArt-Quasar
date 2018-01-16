<template>
  <div class="main">
    <users v-if="viewUsers" v-on:back="viewUsers = false" :user="user"></users>
    <div class="settings" v-else-if="settings"></div>
    <div v-else>
      <button v-on:click="viewUsers = true; buttons = false">User Manifest</button>
      <button>Settings</button>
      <button class="back" v-on:click="$router.push('/crm')">Back</button>
    </div>
  </div>
</template>

<script>
import Users from './elements/Users'
export default {
  name: 'Admin',
  props: ['user', 'loggedIn'],
  created () {
    let vue = this
    if (vue.loggedIn === false || vue.user.admin === false) {
      vue.$router.push('/login')
    }
  },
  components: {
    'users': Users
  },
  data () {
    return {
      buttons: true,
      addUser: false,
      editUser: false,
      viewUsers: false,
      settings: false
    }
  }
}
</script>

<style scoped lang='less'>
.main {
  margin-left: 5px;
  margin-top: 160px;
  width: 99%;
  height: 500px;
  z-index: 10;
  position: absolute;
  background:rgba(0,0,0,0.6);
  border-radius: 12px;
}

button {
  width: 160px;
  height: 60px;
  line-height: 50px;
  background-color: #111;
  margin-left: 20px;
  color: #fff;
  border-radius: 10px;
}
</style>

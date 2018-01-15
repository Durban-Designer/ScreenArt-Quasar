<template>
  <div class="main">
    <users v-if="viewUsers" v-on:back="viewUsers = false" :user="user"></users>
    <div class="settings" v-else-if="settings"></div>
    <div class="adminopt" v-else>
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
    if (vue.loggedIn === false && vue.user.admin === true) {
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
@base-font:'Pathway Gothic One', sans-serif;

.main {
  margin-left: 5px;
  margin-top: 10%;
  width: 99%;
  height: 73.5%;
  z-index: 10;
  position: fixed;
  background:rgba(0,0,0,0.6);
  border-radius: 12px;
  box-shadow: 2px 2px 4px #000;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

h1 {
  font-family: @base-font;
  font-weight: lighter;
  font-size: 3em;
  color: #fff;
  text-shadow: 2px 2px 3px black;
  text-align: center;
  line-height: 100px;
}

.adminopt {
  grid-column: 2;
  margin-top: 40px;
}
button {
  font-family: @base-font;
  width: 100%;
  height: 40px;
  background-color: transparent;
  color: #fff;
  box-shadow: 2px 2px 4px #000;
  margin-top: 25px;
  font-size: 2em;
}
button:hover {
  background: #fff;
  color: #5d5d5d;
}
</style>

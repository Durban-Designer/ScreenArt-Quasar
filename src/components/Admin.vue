<template>
  <div class="main">
    <div v-if="buttons">
      <button v-on:click="addUser = true; buttons = false">Add New User</button>
      <button v-on:click="viewUsers = true; buttons = false">User Manifest</button>
      <button>Settings</button>
      <button class="back" v-on:click="$router.push('/crm')">Back</button>
    </div>
    <div class="addUser" v-if="addUser">
      <input class="name" placeholder="name" v-model="activeUser.name"></input>
      <input class="email" placeholder="email" v-model="activeUser.email"></input>
      <input class="password" placeholder="password" v-model="activeUser.password"></input>
      <input class="admin" type="checkbox" v-model="activeUser.admin">Admin</input>
      <input class="employee" type="checkbox" v-model="activeUser.employee">Employee</input>
      <button class="submit" v-on:click="submitUser">Submit</button>
      <button class="back" v-on:click="addUser = false; buttons = true">Back</button>
    </div>
    <div class="editUser" v-if="editUser">
      <input class="name" placeholder="name" v-model="activeUser.name"></input>
      <input class="email" placeholder="email" v-model="activeUser.email"></input>
      <input class="password" placeholder="password" v-model="activeUser.password"></input>
      <input class="admin" type="checkbox" v-model="activeUser.admin">Admin</input>
      <input class="employee" type="checkbox" v-model="activeUser.employee">Employee</input>
      <button class="submit" v-on:click="submitUser">Submit</button>
    </div>
    <div class="users" v-if="viewUsers" v-for="user in users">
      <h5 v-on:click="" class="user">{{user.name}}</h5>
      <button class="back" v-on:click="viewUsers = false; buttons = true">Back</button>
    </div>
    <div class="settings"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Admin',
  props: ['user', 'loggedIn'],
  created () {
    let vue = this
    if (vue.loggedIn === false && vue.user.admin === true) {
      vue.$router.push('/login')
    }
  },
  data () {
    return {
      buttons: true,
      addUser: false,
      editUser: false,
      viewUsers: false,
      users: [],
      activeUser: {
        email: '',
        password: '',
        name: '',
        admin: false,
        employee: false
      }
    }
  },
  methods: {
    submitUser () {
      let vue = this
      axios.post('http://13.57.57.81:81/users', {
        email: vue.activeUser.email,
        password: vue.activeUser.password,
        name: vue.activeUser.name,
        admin: vue.activeUser.admin,
        employee: vue.activeUser.employee
      })
        .then(function () {
          vue.addUser = false
          vue.buttons = true
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang='less'>
.main {
  margin-left: 5px;
  margin-top: 110px;
  width: 99%;
  height: 500px;
  z-index: 10;
  position: absolute;
  background:rgba(0,0,0,0.6);
  border-radius: 12px;
}
</style>

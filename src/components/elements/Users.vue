<template>
  <div class="main">
    <div class="addUser" v-if="addUser">
      <input class="name" placeholder="name" v-model="activeUser.name"></input>
      <input class="email" placeholder="email" v-model="activeUser.email"></input>
      <input class="password" placeholder="password" v-model="activeUser.password"></input>
      <input class="admin" type="checkbox" v-model="activeUser.admin">Admin</input>
      <input class="employee" type="checkbox" v-model="activeUser.employee">Employee</input>
      <button class="submit" v-on:click="userSubmit">Submit</button>
      <button class="back" v-on:click="addButton">Back</button>
    </div>
    <div class="editUser" v-else-if="editUser">
      <input class="name" placeholder="name" v-model="activeUser.name"></input>
      <input class="email" placeholder="email" v-model="activeUser.email"></input>
      <input class="admin" type="checkbox" v-model="activeUser.admin">Admin</input>
      <input class="employee" type="checkbox" v-model="activeUser.employee">Employee</input>
      <button class="submit" v-on:click="userEdit">Submit</button>
      <button class="back" v-on:click="editUser = false; userList= true">Back</button>
    </div>
    <div class="userList" v-else>
      <div class="users" v-for="user in users">
        <h5 v-on:click="editToggle(user)" class="user">{{user.name}}</h5>
      </div>
      <button class="add" v-on:click="addUser = true">Add</button>
      <button class="back" v-on:click="$emit('back')">Back</button>
    </div>
    <div class="userView" v-else>
      <p>{{activeUser.name}}</p>
      <p>{{activeUser.email}}</p>
      <p>{{activeUser.password}}</p>
      <p>{{activeUser.admin}}</p>
      <p>{{activeUser.employee}}</p>
      <button v-on:click="editUser = true">Edit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'users',
  props: ['user'],
  created () {
    let vue = this
    vue.populateUsers()
  },
  data () {
    return {
      addUser: false,
      editUser: false,
      users: [],
      activeUser: {
        id: '',
        email: '',
        password: '',
        name: '',
        admin: false,
        employee: false
      }
    }
  },
  methods: {
    populateUsers () {
      let vue = this
      axios.get('http://13.57.57.81:81/users/all/' + vue.user.id, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.users = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    userSubmit () {
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
    },
    clearUsers () {
      let vue = this
      vue.activeUser = []
    },
    editToggle (user) {
      let vue = this
      vue.activeUser.id = user._id
      vue.activeUser.email = user.email
      vue.activeUser.name = user.name
      vue.activeUser.admin = user.admin
      vue.activeUser.employee = user.employee
      vue.editUser = true
    },
    addButton () {
      let vue = this
      vue.addUser = false
      vue.populateUsers()
    },
    userEdit () {
      let vue = this
      axios.put('http://13.57.57.81:81/users/' + vue.activeUser.id, {
        email: vue.activeUser.email,
        name: vue.activeUser.name,
        admin: vue.activeUser.admin,
        employee: vue.activeUser.employee
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (user) {
          vue.activeUser.email = user.data.email
          vue.activeUser.name = user.data.name
          vue.activeUser.admin = user.data.admin
          vue.activeUser.employee = user.data.employee
          vue.editUser = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang='less'>
</style>

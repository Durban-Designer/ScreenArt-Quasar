<template>
  <div class="main">
    <div class="addUser" v-if="addUser">
      <input class="name" placeholder="name" v-model="activeUser.name"></input>
      <input class="email" placeholder="email" v-model="activeUser.email"></input>
      <input class="admin" type="checkbox" v-model="activeUser.admin">Admin</input>
      <input class="employee" type="checkbox" v-model="activeUser.employee">Employee</input>
      <button class="submit" v-on:click="userSubmit">Submit</button>
      <button class="back" v-on:click="addUser = false; buttons = true">Back</button>
    </div>
    <div class="userView" v-else-if="viewUser">
      <p>{{activeUser.name}}</p>
      <p>{{activeUser.email}}</p>
      <p>{{activeUser.admin}}</p>
      <p>{{activeUser.employee}}</p>
      <button v-on:click="editUser=true; viewUser=false">Edit</button>
      <button class="delete" v-on:click="deleteUserModal=true">Delete</button>
      <button v-on:click="viewUser=false">Back</button>
      <div class="deleteModal" v-if="deleteUserModal">
        <h2>Are you sure?</h2>
        <button v-on:click="deleteUser">Yes</button>
        <button v-on:click="deleteUserModal = false">No</button>
      </div>
    </div>
    <div class="editUser" v-else-if="editUser">
      <input class="name" placeholder="name" v-model="activeUser.name"></input>
      <input class="email" placeholder="email" v-model="activeUser.email"></input>
      <input class="admin" type="checkbox" v-model="activeUser.admin">Admin</input>
      <input class="employee" type="checkbox" v-model="activeUser.employee">Employee</input>
      <button class="submit" v-on:click="userEdit">Submit</button>
      <button class="back" v-on:click="editUser = false; viewUser= true">Back</button>
    </div>
    <div class="userList" v-else>
      <div class="users" v-for="user in users">
        <h5 v-on:click="editToggle(user)" class="user">{{user.name}}</h5>
      </div>
      <button class="add" v-on:click="">Add</button>
      <button class="back" v-on:click="$emit('back')">Back</button>
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
      viewUser: false,
      editUser: false,
      deleteUserModal: false,
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
    deleteUser () {
      let vue = this
      axios.delete('http://13.57.57.81:81/users/' + vue.activeUser.id, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.deleteUserModal = false
          vue.viewUser = false
          vue.populateUsers()
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
    editToggle (user) {
      let vue = this
      vue.activeUser.id = user._id
      vue.activeUser.email = user.email
      vue.activeUser.name = user.name
      vue.activeUser.admin = user.admin
      vue.activeUser.employee = user.employee
      vue.viewUser = true
    },
    userEdit () {
      let vue = this
      axios.put('http://13.57.57.81:81/users/' + vue.activeUser.id, {
        email: vue.activeUser.email,
        name: vue.activeUser.name,
        employee: vue.activeUser.employee.toString(),
        admin: vue.activeUser.admin.toString()
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (user) {
          vue.activeUser.email = user.data.email
          vue.activeUser.name = user.data.name
          vue.activeUser.employee = user.data.employee
          vue.activeUser.admin = user.data.admin
          vue.populateUsers()
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
  .main {
    color: #fff;
  }
</style>

<template>
  <div class="main">
    <div class="passModal" v-if="changePass">
      <input v-model="password" placeholder="Password"></input>
      <button class="back" v-on:click="changePass = false">Back</button>
      <button class="confirmChange" v-on:click="confirmChange">Confirm Change</button>
    </div>
    <div class="home" v-else>
      <h1>CRM Homepage</h1>
      <button class="leads" v-on:click="$router.push('/leads')">Leads</button><br/>
      <button class="admin" v-on:click="$router.push('/admin')" v-if="user.admin">Admin</button>
      <button class="changePass" v-on:click="changePass = true">Change Password</button>
      <button class="logOut" v-on:click="$emit('logOut')">Log Out</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'user',
  props: ['user', 'loggedIn'],
  created () {
    let vue = this
    if (vue.loggedIn === false && vue.user.employee === true) {
      vue.$router.push('/login')
    }
  },
  methods: {
    confirmChange () {
      let vue = this
      axios.put('http://13.57.57.81:81/users/' + vue.user.id, {
        password: vue.password
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function () {
          vue.changePass = false
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  data () {
    return {
      changePass: false,
      password: ''
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
  }

  h1 {
    font-family: @base-font;
    font-weight: lighter;
    font-size: 2em;
    color: #fff;
    text-shadow: 2px 2px 3px black;
    text-align: center;
    line-height: 100px;
  }
  .leads {

  }
</style>

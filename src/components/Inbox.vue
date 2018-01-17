<template>
  <div class="main">
    <h4>INBOX</h4>
    <input type="text" class="search" placeholder="Search Messages" v-model="searchBox"></input>
    <select class="filter">
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    <button type="submit" class="searchButton" v-on:click="search">SEARCH</button>
    <button class="backButton" v-on:click="$router.push('/crm')">BACK</button>
    <div class="messageList" v-on:click="displayMessage" v-for="message in messages">
      <h5 v-on:click="messageItemDisplay(message)" class="message">{{message.name}}:{{message.status}}</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      searchBox: '',
      messages: []
    }
  },
  methods: {
    populateMessages () {
      let vue = this
      axios.get('http://13.57.57.81:81/messages', {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.leads = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    clearMessages () {
      this.messages = [{}]
    },
    search () {
      let vue = this
      if (vue.searchBox === '') {
        vue.clearMessages()
        vue.populateMessages()
      }
      else {
        axios.get('http://13.57.57.81:81/messages/name/' + vue.searchBox, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
          .then(function (response) {
            vue.clearMessages()
            vue.leads = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped lang='less'>
@base-font:'Pathway Gothic One', sans-serif;
.main {
  margin-left: 5px;
  margin-top: 145px;
  width: 99%;
  height: 70%;
  z-index: 10;
  position: fixed;
  background:rgba(0,0,0,0.6);
  border-radius: 12px;
  box-shadow: 2px 2px 4px #000;
}

h4 {
  font-size: 2em;
  line-height: 0px;
  text-decoration: underline;
  color: #fff;
  font-family: @base-font;
}

.search {
  margin: 10px;
  width: 60%;
  height: 40px;
}

.searchButton {
  margin: 10px;
  height: 40px;
}

button {
  font-family: @base-font;
  height: 40px;
  background-color: transparent;
  color: #fff;
  box-shadow: 2px 2px 4px #000;
  margin-top: 25px;
  font-size: 2em;
}
</style>

<template>
  <div class="main">
    <input type="text" class="search" placeholder="Search Messages" v-model="searchBox"></input>
    <select class="filter">
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
    <button type="submit" class="searchButton" v-on:click="search">SEARCH</button>
    <div class="messageList" v-on:click="displayMessage" v-for="message in messages">
      <h5 v-on:click="messageItemDisplay(message)" class="message">{{message.name}}:{{message.status}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
</style>

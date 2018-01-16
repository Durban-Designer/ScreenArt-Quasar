<template>
  <div class="main">
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

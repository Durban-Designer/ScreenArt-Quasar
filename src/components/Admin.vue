<template>
  <div class="main">
    <button>Add New User</button>
    <button>User Manifest</button>
    <button>Settings</button>
    <button class="back" v-on:click="$router.push('/crm')">Back</button>
  </div>
</template>

<script>
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
    return {}
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

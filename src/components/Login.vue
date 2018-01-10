<template>
  <div class="workPage">
    <h1>Login</h1>
    <input class="email" placeholder="Email" v-model="email"></input>
    <input class="password" placeholder="Password" v-model="password"></input>
    <button class="login" v-on:click="login">Log In</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
      user: {
        token: '',
        id: ''
      }
    }
  },
  computed: {
    wrongInput: function () {
      return {
        hidden: this.wrong === false,
        wrongInput: this.wrong === true
      }
    }
  },
  methods: {
    login () {
      let vue = this
      axios.post('http://13.57.57.81:81/users/login', {
        email: vue.email.toLowerCase(),
        password: vue.password
      })
        .then(response => {
          if (response.status !== 401) {
            vue.user.token = response.data.token
            vue.user.id = response.data.userId
            vue.$emit('login', vue.user)
          }
        })
        .catch(response => {
          console.log(response)
          this.wrong = true
        })
    }
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Pathway Gothic One', sans-serif;

.workPage {
  margin-left: 5px;
  margin-top: 110px;
  width: 99%;
  height: 500px;
  z-index: 10;
  position: absolute;
  background:rgba(0,0,0,0.6);
  border-radius: 12px
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

</style>

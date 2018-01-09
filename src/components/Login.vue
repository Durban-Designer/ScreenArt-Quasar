<template>
  <div class="workPage">
    <h1>Currently Under Construction</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data: function () {
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
    submit () {
      axios.post('http://13.57.57.81:81/leads', {
        email: this.user.email.toLowerCase(),
        password: this.user.password
      })
        .then(response => {
          if (response.status !== 401) {
            this.user.token = response.data.token
            this.user.id = response.data.userId
            this.$emit('login', this.user)
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
  @base-font:'Montserrat', sans-serif;

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

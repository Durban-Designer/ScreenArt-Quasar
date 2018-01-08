<template>
  <div>
    <div class="navbar">
      <button class="Work" v-on:click="$router.push('/work')">Work</button>
      <button class="Contact" v-on:click="$router.push('/contact')">Contact</button>
      <div class="sa" v-on:click="$router.push('/')"></div>
      <button class="Team" v-on:click="$router.push('/team')">Team</button>
      <button class="Login" v-on:click="$router.push('/login')">Login</button>
      <div class="leads" v-on:click="$router.push('/leads')" v-if="loggedIn">Leads</div>
    </div>
    <div class="slidebox">
      <transition name="slide"><img class="slide1" v-if="show === 0" src="../../assets/Seasons.jpg"></transition>
      <transition name="slide"><img class="slide2" v-if="show === 1" src="../../assets/birds.jpg"></transition>
      <transition name="slide"><img class="slide3" v-if="show === 2" src="../../assets/angles.jpg"></transition>
      <transition name="slide"><img class="slide4" v-if="show === 3" src="../../assets/grate.jpg"></transition>
      <transition name="slide"><img class="slide5" v-if="show === 4" src="../../assets/humans.jpg"></transition>
      <transition name="slide"><img class="slide6" v-if="show === 5" src="../../assets/window.jpg"></transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['loggedIn'],
  created () {
    let vue = this
    function toggleShow () {
      if (vue.show === 0) {
        vue.show = 1
      }
      else if (vue.show === 1) {
        vue.show = 2
      }
      else if (vue.show === 2) {
        vue.show = 3
      }
      else if (vue.show === 3) {
        vue.show = 4
      }
      else if (vue.show === 4) {
        vue.show = 5
      }
      else if (vue.show === 5) {
        vue.show = 0
      }
    }
    setInterval(toggleShow, 4000)
  },
  data () {
    return {
      show: 0,
      showWork: false
    }
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Montserrat', sans-serif;

  .main {
    height: 1000px;
  }
  .navbar {
    width: 100%;
    height: 100px;
    background:rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 7;
    text-align: center;
    line-height: 70px;
    font-family: @base-font;
    font-weight: lighter;
    display: grid;
    grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
    grid-template-rows: 100px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .slidebox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 800px;
    overflow: hidden;
  }

  .Work:hover {
    transform:scale(1.3,1.3);
    -webkit-transform:scale(1.3,1.3);
    -moz-transform:scale(1.3,1.3);
  }

  .Work {
    background-color: transparent;
    border: none;
    color: #fff;
    font-family: @base-font;
    font-size: 1.4em;
    width: 25%;
    text-shadow: 2px 2px 3px black;
    grid-column: 1;
    width: 100%;

  }

  .Contact:hover {
    transform:scale(1.3,1.3);
    -webkit-transform:scale(1.3,1.3);
    -moz-transform:scale(1.3,1.3);
  }

  .Contact {
    background-color: transparent;
    border: none;
    color: #fff;
    font-family: @base-font;
    font-size: 1.4em;
    width: 25%;
    text-shadow: 2px 2px 3px black;
    grid-column: 2;
    width: 100%;
  }

  .Team:hover {
    transform:scale(1.3,1.3);
    -webkit-transform:scale(1.3,1.3);
    -moz-transform:scale(1.3,1.3);
  }

  .Team {
    background-color: transparent;
    border: none;
    color: #fff;
    font-family: @base-font;
    font-size: 1.4em;
    width: 25%;
    text-shadow: 2px 2px 3px black;
    width: 100%;

  }

  .sa {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/logo.svg");
    z-index: 8;
    background-repeat: no-repeat;
    -webkit-filter: drop-shadow(1px 2px 2px #fff);
    filter: drop-shadow(1px 2px 2px #fff);
    align-items: center;
  }
  .Login:hover {
    transform:scale(1.3,1.3);
    -webkit-transform:scale(1.3,1.3);
    -moz-transform:scale(1.3,1.3);
  }
  .Login {
    background-color: transparent;
    border: none;
    color: #fff;
    font-family: @base-font;
    font-size: 1.4em;
    width: 25%;
    text-shadow: 2px 2px 3px black;
    width: 100%;
  }

  .leads {
    position: absolute;
    top: 600px;
    left: 0
    right 0;
  }

  .slide1 {
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .slide2 {
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  .slide3 {
    position: absolute;
    width: 100%;
    z-index: 3;
  }
  .slide4 {
    position: absolute;
    width: 100%;
    z-index: 4;
  }

  .slide5 {
    position: absolute;
    width: 100%;
    z-index: 5;
  }
  .slide6 {
    position: absolute;
    width: 100%;
    z-index: 6;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .50s ease;
  }

  .slide-enter {
    transform: translateX(2000px);
    opacity: 0;
  }

  .slide-leave-to {
    transform: translateX(-2000px);
    opacity: 0;
  }
</style>

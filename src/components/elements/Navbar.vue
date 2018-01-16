<template>
  <div class="main">
    <div class="navbar">
      <div v-bind:class="saLogic" v-on:click="navToggle"></div>
      <div v-bind:class="navpaneLogic">
        <button class="Work" v-on:click="$router.push('/work'); navToggle()">WORK</button>
        <button class="Contact" v-on:click="$router.push('/contact'); navToggle()">CONTACT</button>
        <button class="Info" v-on:click="$router.push('/info'); navToggle()">INFO</button>
        <button class="Login" v-on:click="$router.push('/login'); navToggle()" v-if="!loggedIn">LOGIN</button>
        <button class="Login" v-on:click="$router.push('/crm'); navToggle()" v-if="loggedIn && user.employee">CRM</button>
        <button class="Login" v-on:click="$router.push('/customeraccount'); navToggle()" v-if="loggedIn && !user.employee">ACCOUNT</button>
      </div>
    </div>
    <div class="slidebox">
      <transition name="slide"><img class="slide1" v-if="show === 0" src="../../assets/Seasons.jpg"></transition>
      <transition name="slide"><img class="slide2" v-if="show === 1" src="../../assets/birds.jpg"></transition>
      <transition name="slide"><img class="slide3" v-if="show === 2" src="../../assets/mountains.jpg"></transition>
      <transition name="slide"><img class="slide4" v-if="show === 3" src="../../assets/grate.jpg"></transition>
      <transition name="slide"><img class="slide5" v-if="show === 4" src="../../assets/humans.jpg"></transition>
      <transition name="slide"><img class="slide6" v-if="show === 5" src="../../assets/window.jpg"></transition>
    </div>
  </div>
</template>

<script>
let x = false
export default {
  name: 'navbar',
  props: ['loggedIn', 'user'],
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
  computed: {
    saLogic: function () {
      return {
        sa: true,
        navButtonAnimation: this.isToggled,
        navButtonAnimationExit: !this.isToggled && !this.first
      }
    },
    navpaneLogic: function () {
      return {
        navpane: this.first,
        navpaneAnimation: this.isToggled,
        navpaneAnimationExit: !this.isToggled && !this.first
      }
    }
  },
  data () {
    return {
      show: 0,
      showWork: false,
      isToggled: false,
      first: true
    }
  },
  methods: {
    navToggle: function () {
      // Nav button functionality
      if (window.innerWidth < 720) {
        if (x === false) {
          x = true
          this.isToggled = true
          this.first = false
        }
        else if (x === true) {
          x = false
          this.isToggled = false
        }
      }
      else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Pathway Gothic One', sans-serif;

  .navpane {
    display: none;
  }

  .sa {
    width: 100%;
    height: 100%;
    grid-column: 3;
    z-index: 8;
    background-repeat: no-repeat;
    background-image: url("../../assets/logoAnimation.svg");
    -webkit-filter: drop-shadow(1px 2px 2px #000);
    filter: drop-shadow(1px 2px 2px #000);
    align-items: center;
  }

  .navbar {
    width: 100%;
    height: 120px;
    background:rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 11;
    text-align: center;
    line-height: 70px;
    font-family: @base-font;
    font-weight: lighter;
    display: grid;
    grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
    grid-template-rows: 100px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 2px 2px 4px #000;
  }

  @keyframes navButtonAnimation {
    100% {background-position: -1980px;}
  }

  @keyframes navButtonAnimationReverse {
    0% {background-position: -1980px;}
    100% {background-position: 0px;}
  }

  @keyframes navpaneAnimation {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes navpaneAnimationReverse {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .navButtonAnimation {
    animation: navButtonAnimation .4s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navButtonAnimationExit {
    animation: navButtonAnimationReverse .5s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .navpaneAnimation {
    animation: navpaneAnimation .4s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    grid-column: 3;
    z-index: 10;
    width: 100%;
    height: 350px;
    margin-top: 40px;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    color: #fff;
  }

  .navpaneAnimationExit {
    animation: navpaneAnimationReverse .5s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    grid-column: 3;
    z-index: 10;
    width: 100%;
    height: 350px;
    margin-top: 40px;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    color: #fff;
  }

  .Work {
    width: 80%;
    color: #fff;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    border: none;
    margin-top: 10px;
  }

  .Contact {
    width: 80%;
    color: #fff;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    border: none;
    margin-top: 10px;
  }

  .Info {
    width: 80%;
    color: #fff;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    border: none;
    margin-top: 10px;
  }

  .Login {
    width: 80%;
    color: #fff;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    border: none;
    margin-top: 10px;
  }

  .slidebox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
  }

  .slide1 {
    position: absolute;
    width: 100%;
    z-index: -6;
  }

  .slide2 {
    position: absolute;
    width: 100%;
    z-index: -5;
  }

  .slide3 {
    position: absolute;
    width: 100%;
    z-index: -4;
  }
  .slide4 {
    position: absolute;
    width: 100%;
    z-index: -3;
  }

  .slide5 {
    position: absolute;
    width: 100%;
    z-index: -2;
  }
  .slide6 {
    position: absolute;
    width: 100%;
    z-index: -1;
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

  @media (min-width: 700px) {
    .navpane {
      width: 100%;
      height: 120px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 3;
      text-align: center;
      line-height: 70px;
      font-family: @base-font;
      font-weight: lighter;
      display: grid;
      grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
      grid-template-rows: 100px;
    }

    button {
      letter-spacing: 1.3px;
      -webkit-animation-duration: .25s;
      animation-duration: .25s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      -webkit-animation-iteration-count: 1;
    }

    button:hover {
      animation-name: bounce;
      -moz-animation-name: bounce;
    }

    @keyframes bounce {
      0%, 100% {
          -webkit-transform: translateY(0);
          -ms-transform:     translateY(0);
          transform:         translateY(0)
        }

        100% {
          -webkit-transform: translateY(-10px);
          -ms-transform:     translateY(-10px);
          transform:         translateY(-10px)
        }
      }

      .Work {
        box-shadow: none;
        grid-column: 1;
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: @base-font;
        font-size: 2em;
        width: 25%;
        text-shadow: 2px 2px 3px black;
        grid-column: 1;
        width: 100%;
      }

      .Contact {
        box-shadow: none;
        grid-column: 2;
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: @base-font;
        font-size: 2em;
        width: 25%;
        text-shadow: 2px 2px 3px black;
        grid-column: 2;
        width: 100%;
      }

      .Info {
        box-shadow: none;
        grid-column: 4;
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: @base-font;
        font-size: 2em;
        width: 25%;
        text-shadow: 2px 2px 3px black;
        width: 100%;
      }

      .Login {
        box-shadow: none;
        grid-column: 5;
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: @base-font;
        font-size: 2em;
        width: 25%;
        text-shadow: 2px 2px 3px black;
        width: 100%;
      }
    }
</style>

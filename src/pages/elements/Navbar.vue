 <template>
  <div class="main">
    <div class="navbar">
      <div v-bind:class="saLogic" v-on:click="navToggle"></div>
      <div v-bind:class="navpaneLogic">
        <button v-bind:class="HomeLogic" v-on:click="navToggle(); $router.push('/')">Home</button>
        <button v-bind:class="InfoLogic" v-on:click="navToggle(); $router.push('/info')">Services</button>
        <button v-bind:class="WorkLogic" v-on:click="navToggle(); $router.push('/work')">Clients</button>
        <button v-bind:class="ContactLogic" v-on:click="navToggle(); $router.push('/contact')">Contact</button>
        <button v-bind:class="LoginLogic" v-on:click="navToggle(); $router.push('/crm')" v-if="loggedIn && user.employee">CRM</button>
        <button v-bind:class="LoginLogic" v-on:click="navToggle(); $router.push('/customeraccount')" v-if="loggedIn && !user.employee">ACCOUNT</button>
      </div>
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
      } else if (vue.show === 1) {
        vue.show = 2
      } else if (vue.show === 2) {
        vue.show = 3
      } else if (vue.show === 3) {
        vue.show = 4
      } else if (vue.show === 4) {
        vue.show = 5
      } else if (vue.show === 5) {
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
    },
    HomeLogic: function () {
      return {
        Home: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    WorkLogic: function () {
      return {
        Work: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    ContactLogic: function () {
      return {
        Contact: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    InfoLogic: function () {
      return {
        Info: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
      }
    },
    LoginLogic: function () {
      return {
        Login: this.isToggled || this.first,
        hidden: !this.isToggled && !this.first
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
      if (window.innerWidth < 1000) {
        if (x === false) {
          x = true
          this.isToggled = true
          this.first = false
        } else if (x === true) {
          x = false
          this.isToggled = false
        }
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Barlow', sans-serif;

  .navpane {
    display: none;
    overflow: hidden;
  }

  .sa {
    margin-top: 5vh;
    width: 100%;
    height: 100%;
    grid-column: 3;
    z-index: 8;
    background-repeat: no-repeat;
    background-image: url("../../assets/logoAnimation.svg");
    -webkit-filter: drop-shadow(0px 2px 2px #000);
    filter: drop-shadow(0px 2px 2px #000);
    align-items: center;
  }

  .navbar {
    width: 100%;
    height: 135px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 70px;
    font-family: @base-font;
    font-weight: 300;
    display: grid;
    grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
    grid-template-rows: 100px;
  }
  p {
    background: transparent;
    z-index: 12;
    position: fixed;
    padding: 20px;
    height: 3vh;
    color: #c22227;
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
    animation: navpaneAnimation .5s steps(9);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    grid-column-start: 2;
    grid-column-end: 5;
    z-index: 16;
    width: 100%;
    margin-top: 10vh;
    background: #dce6f2;
    border: 1px solid #999;
    border-radius: 5px;
    color: #fff;
  }

  .navpaneAnimationExit {
    animation: navpaneAnimationReverse .5s steps(9);
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    grid-column-start: 2;
    grid-column-end: 5;
    z-index: 10;
    width: 100%;
    height: 40vh;
    margin-top: 10vh;
    background: #dce6f2;
    border: 1px solid #999;
    border-radius: 5px;
    color: #fff;
  }

  .Home {
    box-shadow: none;
    grid-column: 1;
    background-color: transparent;
    border: none;
    color: grey;
    font-family: @base-font;
    font-size: 2.2em;
    width: 100%;
    grid-column: 1;
    width: 100%;
  }
  .Work {
    background-color: transparent;
    width: 100%;
    background-color: transparent;
    border: none;
    color: grey;
    font-size: 2.2em;
    letter-spacing: 0px;
  }

  .Contact {
    background-color: transparent;
    width: 100%;
    background-color: transparent;
    border: none;
    color: grey;
    font-size: 2.2em;
  }

  .Info {
    background-color: transparent;
    width: 100%;
    background-color: transparent;
    border: none;
    color: grey;
    font-size: 2.2em;
  }

  .slidebox {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    height: 135px;
  }

  .slide1 {
    background-image: url("../../assets/SeasonsMobile.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -6;
  }

  .slide2 {
    background-image: url("../../assets/birdsMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -5;
  }

  .slide3 {
    background-image: url("../../assets/mountainsMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -4;
  }
  .slide4 {
    background-image: url("../../assets/grateMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -3;
  }

  .slide5 {
    background-image: url("../../assets/humansMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
    z-index: -2;
  }
  .slide6 {
    background-image: url("../../assets/windowMobile.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 140px;
    margin: 0;
    padding: 0;
    top: 0;
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
  /*lANDSCAPE*/
  @media (min-width: 1000px) {
    .navpane {
      width: 100vw;
      height: 20vh;
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
      grid-column-start: 1;
      grid-column-end: 6;
      grid-template-columns: repeat(25,4vw);
      grid-template-rows: repeat(10,2vh);
    }
    .navbar {
      grid-template-columns: 220px 25vw 25vw 25vw;
      grid-template-rows: 100px;
      margin: 2vw;
    }

    button {
      letter-spacing: 1px;
      text-align: center;
    }
      .Home {
        display: none;
      }
      .Contact {
        grid-column-start: 20;
        grid-column-end:23;
        grid-row-start: 4;
        grid-row-end: 6;
        background-color: transparent;
        border: none;
        color: grey;
        font-family: @base-font;
        font-size: 1.5em;
        width: 100%;
        line-height: 0;
      }

      .Work {
        grid-column-start: 16;
        grid-column-end:19;
        grid-row-start: 4;
        grid-row-end: 6;
        background-color: transparent;
        border: none;
        color: grey;
        font-family: @base-font;
        font-size: 1.5em;
        width: 100%;
        line-height: 0;
      }

      .Info {
        grid-column-start: 12;
        grid-column-end:15;
        grid-row-start: 4;
        grid-row-end: 6;
        background-color: transparent;
        border: none;
        color: grey;
        font-family: @base-font;
        font-size: 1.5em;
        width: 100%;
        line-height: 0;
      }

      .Login {
        box-shadow: none;
        grid-column: 5;
        background-color: transparent;
        border: none;
        color: #fff;
        font-family: @base-font;
        font-size: 1.5em;
        width: 25%;
        text-shadow: 2px 2px 3px black;
        width: 100%;
      }
      .sa {
        margin: 0;
        grid-column: 1;
      }
      button:hover {
        animation: hoverup .2s steps(6);
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        @keyframes hoverup {
          0% {  color: grey; }
          100% {  color: #c22227; font-size: 1.55em;}
        }
      }
    }
</style>

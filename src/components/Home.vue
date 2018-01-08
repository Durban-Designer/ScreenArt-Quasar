<template>
  <div class="main">
    <work v-if="showWork"></work>
    <div class="slidebox">
      <transition name="slide"><img class="slide1" v-if="show === 0" src="../assets/Seasons.jpg"></transition>
      <transition name="slide"><img class="slide2" v-if="show === 1" src="../assets/birds.jpg"></transition>
      <transition name="slide"><img class="slide3" v-if="show === 2" src="../assets/angles.jpg"></transition>
      <transition name="slide"><img class="slide4" v-if="show === 3" src="../assets/grate.jpg"></transition>
      <transition name="slide"><img class="slide5" v-if="show === 4" src="../assets/humans.jpg"></transition>
      <transition name="slide"><img class="slide6" v-if="show === 5" src="../assets/window.jpg"></transition>
    </div>
    <div class="navbar">
      <button class="Work" v-on:click="showWork = !showWork">Work</button>
      <button class="Contact">Contact</button>
      <div class="sa" v-on:click="$router.push('/')"></div>
      <button class="Team">Team</button>
      <button class="Quotes">Quotes</button>
    </div>

  </div>
</template>

<script>
import Work from './elements/Work'
export default {
  name: 'home',
  components: {
    'work': Work
  },
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
  z-index: 7;
  text-align: center;
  line-height: 70px;
  font-family: @base-font;
  font-weight: lighter;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
  grid-template-rows: 100px;

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
  background-image: url("../assets/logo.svg");
  z-index: 8;
  background-repeat: no-repeat;
  -webkit-filter: drop-shadow(1px 2px 2px #fff);
  filter: drop-shadow(1px 2px 2px #fff);
  align-items: center;
}
.Quotes:hover {
  transform:scale(1.3,1.3);
  -webkit-transform:scale(1.3,1.3);
  -moz-transform:scale(1.3,1.3);
}
.Quotes {
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: @base-font;
  font-size: 1.4em;
  width: 25%;
  text-shadow: 2px 2px 3px black;
  width: 100%;

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

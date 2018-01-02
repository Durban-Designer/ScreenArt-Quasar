<template>
  <div class="main">
    <div class="slidebox">
      <transition name="slide"><img class="slide1" v-if="show === 0" src="../assets/Seasons.jpg"></transition>
      <transition name="slide"><img class="slide2" v-if="show === 1" src="../assets/birds.jpg"></transition>
      <transition name="slide"><img class="slide3" v-if="show === 2" src="../assets/angles.jpg"></transition>
      <transition name="slide"><img class="slide4" v-if="show === 3" src="../assets/grate.jpg"></transition>
      <transition name="slide"><img class="slide5" v-if="show === 4" src="../assets/humans.jpg"></transition>
      <transition name="slide"><img class="slide6" v-if="show === 5" src="../assets/window.jpg"></transition>
    </div>
    <div class="navbar">
      <button class="Work">Work</button>
      <button class="Contact">Contact</button>
      <button class="Team">Team</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
      show: 0
    }
  }
}
</script>

<style scoped lang='less'>
@base-font:'Montserrat', sans-serif;

.main {
  height: 3000px;
}
.navbar {
  width: 100%;
  height: 60px;
  background:rgba(0,0,0,0.6);
  position: absolute;
  z-index: 7;
  text-align: center;
  line-height: 70px;
  font-family: @base-font;
  font-weight: lighter;
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
.slide-enter /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(2000px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-2000px);
  opacity: 0;
}
</style>

<template>
  <div class="slidebox">
    <transition name="slide"><img class="slide1" v-if="show === 0" src="../assets/Seasons.jpg"></transition>
    <transition name="slide"><img class="slide2" v-if="show === 1" src="../assets/birds.jpg"></transition>
    <transition name="slide"><img class="slide3" v-if="show === 2" src="../assets/angles.jpg"></transition>
    <transition name="slide"><img class="slide4" v-if="show === 3" src="../assets/grate.jpg"></transition>
    <transition name="slide"><img class="slide5" v-if="show === 4" src="../assets/humans.jpg"></transition>
    <transition name="slide"><img class="slide6" v-if="show === 5" src="../assets/window.jpg"></transition>
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

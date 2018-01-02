<template>
  <div>
    <transition name="slide">
      <img class="slide1" v-if="show" src="../assets/bluestar.jpg">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      show: true
    }
  }
}
function toggleShow () {
  this.show = !this.show
  console.log(this.show)
}
setInterval(toggleShow, 6000)
</script>

<style scoped lang='less'>

.slide1 {
  width: 100%;
}
.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<template>
  <div class="main">
<<<<<<< HEAD
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
    <div class="leads" v-on:click="$router.push('/leads')">Leads</div>
    <work v-if="showWork"></work>
=======
>>>>>>> 323c63bd4f75396223a3c795f6e44378ec70aa9c
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
</style>

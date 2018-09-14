<template>
  <div class="main">
    <div class="splash"></div>
    <p>Neuronaut Solutions is an AI software development company, dedicated to producing <span>inventive, custom and complex</span> deep learning solutions for businesses of all shapes and sizes.
    We believe the future of business lies in <span>Artificial Intelligence and Machine Learning.</span></p>
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
@base-font:'Barlow', sans-serif;

.main {
  margin-top: 15vh;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
  overflow-y: scroll;
  position: fixed;
}
p {
  display: none;
}
.splash {
  background-image: url('../assets/splash2.svg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow: hidden;
}
/* width */
::-webkit-scrollbar {
    width: 5px;
    height:5px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 15px;
    border: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

@media (min-width: 1000px) {
  .main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 105vh 50vh;
    overflow-y: scroll;
    padding-bottom: 20vh;
    position: fixed;
  }
  .splash {
    background-image: url('../assets/splash.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
    position: relative;
  }
  p {
    grid-row: 2;
    grid-column: 1;
    font-size: 2.5em;
    height: 50vh;
    align-self: center;
    color: grey;
    font-weight: 300;
    padding-left: 3vw;
    display: inline;
  }
  span {
    font-style: italic;
    color: #008cc4;
  }
}
</style>

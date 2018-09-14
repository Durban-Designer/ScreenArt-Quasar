<template>
  <div class="main">
    <div class="splash"></div>
    <h1>Neuronaut Solutions</h1>
    <p>is an AI software developoment company, dedicated to producing inventive, custom and complex deep learning solutions for businesses of all shapes and sizes.</p>
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
  margin-top: 20vh;
  width: 100vw;
  height: 140vh;
  display: grid;
  grid-template-rows: 100vh 20vh 20vh;
  overflow-y: scroll;
  position: relative;
}
h1 {
  grid-row: 2;
  color: #008cc4;
}
p {
  grid-row: 3;
}
.splash {
  background-image: url('../assets/splash.svg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60%;
  width: 100%;
  position: fixed;
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 105vh;
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
}
</style>

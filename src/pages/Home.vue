<template>
  <div class="main">
    <div class="launch"></div>
    <h1>It's time to launch your company into the future.</h1>
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
  height: 100vh;
  display: grid;
  position: fixed;
  overflow-y: scroll;
}
h1 {
  font-family: @base-font;
  font-size: 2em;
  text-align: center;
  color: #c22227;
  letter-spacing: 1px;
  font-weight: 200;
}
.launch {
  background-image: url('../assets/launch.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  -webkit-filter: drop-shadow(0px 2px 2px #000);
  filter: drop-shadow(0px 2px 2px #000);
}

@media (min-width: 1000px) {
  .main {
    margin-top: 25vh;
    width: 100%;
    height: 600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 6em);
    position: fixed;
  }
}
</style>

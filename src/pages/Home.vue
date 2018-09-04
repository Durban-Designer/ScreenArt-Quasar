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
  text-align: right;
  color: #c22227;
  letter-spacing: 1px;
  font-weight: 200;
  margin-top: -20vh;
  padding-right: 2vw;
}
.launch {
  background-image: url('../assets/launch.svg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10vh;
  height: 50vh;
  width: 100vw;
}

@media (min-width: 1000px) {
  .main {
    margin-top: 25vh;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
    position: fixed;
  }
  h1 {
    font-family: @base-font;
    font-size: 2em;
    text-align: center;
    color: #c22227;
    letter-spacing: 1px;
    font-weight: 200;
    grid-column: 2;
    margin-top: 20vh;
    padding-right: 0vw;
  }
  .launch {
    background-image: url('../assets/launch.svg');
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80vh;
    width: 50vw;
    margin-top: 0;
    grid-column: 1;
    grid-row: 1;
  }
}
</style>

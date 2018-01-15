<template>
  <div class="main">
    <h1>SCREEN ART STUDIOS</h1>
    <h3 class="brand">Your Brand.</h3>
    <h3 class="passion"> Our Passion.</h3>
    <div class="boxr"></div>
    <div class="boxg"></div>
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
@base-font:'Pathway Gothic One', sans-serif;

.main {
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 6em);
  position: fixed;
}
h1 {
  margin-right: 20px;
  font-family: @base-font;
  font-size: 6em;
  color: #fff;
  text-shadow: 2px 5px 3px black;
  text-align: right;
  z-index: 12;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row: 2;
  letter-spacing: 2px;
}
h3 {
  line-height: 70px;
  margin-right: 20px;
  font-family: @base-font;
  font-weight: lighter;
  font-size: 4em;
  color: #fff;
  text-shadow: 2px 4px 3px black;
  text-align: right;

}
.brand {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row: 3;
  z-index: 12;
}
.passion {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row: 3;
  z-index: 12;
  margin-top: 90px;

}
.boxr {
  height: 67px;
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: #c22227;
  z-index: 10;
  margin-top: 41px;
  box-shadow: 2px 4px 3px black;
}
.boxg {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 8;
  width: 280px;
  height: 800px;
  background:rgba(0,0,0,0.6);
  z-index: 9;
  margin-left: 200px;

}
@media only screen and (max-width:750px) {


}
</style>

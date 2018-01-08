<template>
  <div class="workPage">
    <h1>Currently Under Construction</h1>
    <div class="bart"></div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
@base-font:'Montserrat', sans-serif;

.workPage {
  margin-top: 800px;
  width: 100%;
  height: 300px;
  z-index: 10;
  position: absolute;
  background:rgba(0,0,0,0.6);

}
h1 {
  font-family: @base-font;
  font-weight: lighter;
  font-size: 2em;
  color: #fff;
  text-shadow: 2px 2px 3px black;
  text-align: center;
  line-height: 100px;
}
.bart {
  background-image: url("../assets/Bart.svg");
}
</style>

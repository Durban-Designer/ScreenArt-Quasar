<template>
  <div class="workPage">
    <h1>Currently Under Construction</h1>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Montserrat', sans-serif;

  .workPage {
    margin-left: 5px;
    margin-top: 110px;
    width: 99%;
    height: 500px;
    z-index: 10;
    position: absolute;
    background:rgba(0,0,0,0.6);
    border-radius: 12px
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

</style>

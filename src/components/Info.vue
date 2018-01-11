<template>
  <div class="main">
    <h1>INFORMATION</h1>
    <div class="infobox">

    </div>
  </div>
</template>

<script>
export default {
  name: 'team',
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Pathway Gothic One', sans-serif;

  .main {
    margin-left: 5px;
    margin-top: 10%;
    width: 99%;
    height: 73.5%;
    z-index: 10;
    position: fixed;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
  }

  h1 {
    font-family: @base-font;
    font-weight: lighter;
    font-size: 3em;
    color: #fff;
    text-shadow: 2px 2px 3px black;
    text-align: center;
    line-height: 100px;
  }

</style>

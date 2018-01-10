<template>
  <div class="main">
    <h1>USER SCREEN</h1>
    <button class="logOut" v-on:click="$emit('logOut')">Log Out</button>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: ['user'],
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Pathway Gothic One', sans-serif;

  .main {
    margin-left: 5px;
    margin-top: 110px;
    width: 99%;
    height: 740px;
    z-index: 10;
    position: absolute;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
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

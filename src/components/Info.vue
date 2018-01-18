<template>
  <div class="main">
    <div class="info" v-on:click="model=false" v-if="model">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="infobox" v-on:click="model=true" v-else>
      <div class="screenArt">
        <p class="does">SCREENART STUDIOS DOES</p>
      </div>
      <div class="scrollBox">
        <div class="scroll">
          <br/>
          WEB DESIGN<br/>
          HYBRID WEB APPS<br/>
          MEDIA CREATION<br/>
          WEB HOSTING<br/>
          BRAND MARKETING<br/>
          GRAPHIC DESIGN<br/>
          CRM SYSTEMS<br/>
          CONSULTING<br/>
          IT ALL.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data: function () {
    return {
      model: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Pathway Gothic One', sans-serif;

  .main {
    margin-left: 5px;
    margin-top: 145px;
    width: 99%;
    height: 70%;
    z-index: 10;
    position: fixed;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    color: #fff;
  }

  h1 {
    font-family: @base-font;
    font-weight: lighter;
    font-size: 2.5em;
    color: #fff;
    text-shadow: 2px 4px 3px black;
    text-align: center;
    line-height: 100px;
  }

  .screenArt {
  font-family: @base-font;
  font-size: 1.5em;
  color: #fff;
  grid-template-rows: 40px 50px;
  margin-left: 0px;
  text-shadow: 2px 4px 3px black;
  margin-top: 30px;
}

.scrollBox {
  overflow: hidden;
  height: 60px;
  text-align: center;
}

.does {
  font-size: 2em;
  line-height: 60px;
  width: 100%;
  text-align: center;
}

.scroll {
  width: 99%;
  font-family: @base-font;
  font-size: 4.05em;
  display: inline-block;
  color: #C22227;
  position: relative;
  white-space: nowrap;
  top: 0px;
  animation: move 12s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  text-align: center;
  text-shadow: 2px 4px 3px black;
}

  @keyframes move{
  0%  { top: 0px; }
  10% { top: -80px;}
  20% { top: -160px;}
  30% { top: -230px;}
  40% { top: -310px;}
  50% { top: -390px;}
  60% { top: -460px;}
  70% { top: -540px;}
  80% { top: -610px;}
  90% { top: -690px;}
  95% { top: -690px;}
  100% { top: -740px; }

  }

  @media only screen and (min-width:700px) {

    .main {
      margin-left: 5px;
      margin-top: 145px;
      width: 99%;
      height: 70%;
      z-index: 10;
      position: fixed;
      background:rgba(0,0,0,0.6);
      border-radius: 12px;
      box-shadow: 2px 2px 4px #000;
      color: #fff;
    }

    h1 {
      font-family: @base-font;
      font-weight: lighter;
      font-size: 2.5em;
      color: #fff;
      text-shadow: 2px 4px 3px black;
      text-align: center;
      line-height: 100px;
    }

    .screenArt {
    font-family: @base-font;
    font-size: 2em;
    color: #fff;
    grid-template-rows: 40px 50px;
    margin-left: 0px;
    text-shadow: 2px 4px 3px black;
    margin-top: 30px;
  }

  .scrollBox {
    overflow: hidden;
    height: 60px;
    text-align: center;
  }

  .does {
    font-size: 2em;
    line-height: 60px;
    width: 100%;
    text-align: center;
  }

  .scroll {
    font-family: @base-font;
    font-size: 4.05em;
    display: inline-block;
    color: #C22227;
    position: relative;
    white-space: nowrap;
    top: 0px;
    animation: move 12s;
    animation-iteration-count: infinite;
    animation-delay: 0s;
    text-align: center;
    text-shadow: 2px 4px 3px black;
  }

    @keyframes move{
    0%  { top: 0px; }
    10% { top: -80px;}
    20% { top: -160px;}
    30% { top: -230px;}
    40% { top: -310px;}
    50% { top: -390px;}
    60% { top: -460px;}
    70% { top: -540px;}
    80% { top: -610px;}
    90% { top: -690px;}
    95% { top: -690px;}
    100% { top: -740px; }

    }

  }
</style>

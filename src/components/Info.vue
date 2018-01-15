<template>
  <div class="main">
    <h1>INFORMATION</h1>
    <div class="infobox">
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
            SOCIAL MEDIA MARKETING<br/>
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
  font-size: 4em;
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

  @media only screen and (max-width:750px) {


  }
</style>

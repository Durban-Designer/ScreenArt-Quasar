<template>
  <div class="main">
    <h1>We've provided solutions for:</h1>
    <h2><a href="https://weighlabel.com/">weighlabel</a></h2>
    <h3><a href="https://thumbnailconsulting.com/">Thumbnail Consulting</a></h3>
    <div class="mystic"><a href="https://www.mystic-crm.com/"></a></div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      modal: ''
    }
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Barlow', sans-serif;

  .main {
    overflow-y: scroll;
    height: 100vh;
    display: grid;
    width: 100vw;
    z-index: 15;
    grid-column-start: 1;
    grid-column-end: 20;
    grid-row-start: 6;
    grid-row-end: 40;
    grid-template-columns: 6vw 88vw 6vw;
    grid-template-rows: repeat(10, 10vh);
  }
  h1 {
    text-align: center;
    color: grey;
    font-family: @base-font;
    font-weight: 300;
    font-size: 1em;
    text-align: center;
    letter-spacing: 1px;
    grid-column: 2;
    font-style: italic;
  }
h2 {
  font-family: 'Monda', sans-serif;
  grid-column: 2;
  font-weight: 500;
  color: grey;
  font-size: 2.5em;
  text-align: center;
  height: 10vh;
  line-height: 0;
}
a {
  text-decoration: none;
  color: grey;
}
h3 {
  grid-column: 2;
  text-align: center;
  color: grey;
  letter-spacing: 1px;
}
.mystic {
  background-image: url('../assets/Mystic2.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  grid-column: 2;
  filter: grayscale(100%);
  opacity: .8;
  height: 15vh;
}
  @media only screen and (min-width:1000px) {
    .mystic {
      margin-top: 5vh;
    }
  }
</style>

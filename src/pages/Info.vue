<template>
  <div class="imain">
    <div class="laptop"></div>
        <h1 class="a">Optimize Everything.</h1>
        <p class="aa">Loooking to get the most out of your data? We provide the most reliable, efficient and cutting edge software on the market.
         Personal Assistants, Big Data Analytics, Product Valuation Prediction, Image Content Analysis, and OCR (Optical Character Recognition) are among the many ML solutions we offer. </p>
        <div class="brain"></div>
        <h1 class="b">Thinktank Approach</h1>
        <p class="bb">We believe co-operation is the key to sucess. That's why our highly skilled 'Neuronauts' work together with you to architect and build lasting, scalable and custom deep learning solutions.</p>
        <div class="naut"></div>
        <h1 class="c">Deployment and Support</h1>
        <p class="cc">We won't leave you stranded. From Conception to Launch and Beyond, we are right by your side, Providing quality assurance and top notch support every step of the way.</p>
      </div>
</template>

<script>
export default {
  name: 'Info',
  data: function () {
    return {
      modal: 1
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
  @base-font:'Barlow', sans-serif;
  /* width */
  ::-webkit-scrollbar {
      width: 5px;
      height:5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px transparent;
      border-radius: 15px;
      border: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 15px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #555;
  }

  .imain {
    overflow-y: scroll;
    height: 150vh;
    display: grid;
    width: 100vw;
    z-index: 15;
    grid-column-start: 1;
    grid-column-end: 20;
    grid-row-start: 4;
    grid-row-end: 40;
    grid-template-columns: 6vw 88vw 6vw;
    grid-template-rows: repeat(25, 10vh);

  }
  h1 {
    text-align: center;
    color: #008cc4;
    font-family: @base-font;
    font-weight: 300;
    font-size: 1.3em;
    text-align: center;
    letter-spacing: 1px;
    border-bottom: 2px solid #008cc4;
    grid-column: 2;
  }
  .laptop {
    background-image: url('../assets/laptop.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width:100%;
    height: 20vh;
    grid-column: 2;
    grid-row: 1;
  }
  .a {
    grid-row: 3;
    grid-column: 2;
  }
  .brain {
    background-image: url('../assets/brain.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 15vh;
    grid-column: 2;
    grid-row: 7;
  }
  .b {
    grid-column: 2;
    grid-row: 9;
  }
  .naut {
    background-image: url('../assets/naut.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width:100%;
    height: 20vh;
    grid-column: 2;
    grid-row: 13;
  }
  .c {
    grid-column: 2;
    grid-row: 15;
  }
  .wide {
    background-image: url('../assets/wide.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width:100%;
    height: 20vh;
    grid-column: 2;
    grid-row: 19;
  }
  .d {
    grid-column: 2;
    grid-row: 22;
  }
  p {
    grid-column: 2;
    color: #555;
    font-size: 1.1em;
    letter-spacing: 1px;
    font-family: @base-font;
  }
  .aa {
    grid-row: 4;
  }
  .bb {
    grid-row: 10;
  }
  .cc {
    grid-row: 16;
  }
  .dd {
    grid-row: 23;
  }
    @media only screen and (min-width: 1000px) {
      .imain {
        overflow-y: scroll;
        height: 100vh;
        display: grid;
        width: 100vw;
        z-index: 15;
        grid-column-start: 1;
        grid-column-end: 20;
        grid-row-start: 6;
        grid-row-end: 40;
        grid-template-columns: 15vw 70vw 15vw;
        grid-template-rows: repeat(20, 10vh);
      }
      p {
        font-size: 1.4em;
      }
      h1 {
        font-size: 2em;
        line-height: 0;
      }
    }
    @media only screen and (min-width: 1400px) {
    }
</style>

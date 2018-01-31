<template>
  <div class="main">
    <div class="modal" v-if="modal ===3">
      <h1>services</h1>
      <p>
        lorem ipsum dolor est
      </p>
      <button class="next" v-on:click="modal++" v-if="modal < 3">Next</button>
      <button class="previous" v-on:click="modal--" v-if="modal > 1">Previous</button>
    </div>
    <div class="modal" v-else-if="modal === 2">
      <div class="bon">
        <div class="bonImage"></div>
        <p>
          Bonham Goodman is the Lead Developer and a Co-Founder of Screen Art Studios. A Full Stack Web Developer
          specializing in the Quick Venom Stack as well as an expert in backend API servers.
        </p>
      </div>
      <div class="avery">
        <div class="averyImage"></div>
        <p>
          Avery Angel is a Developer and a Co-Founder of Screen Art Studios. A Full Stack Web Developer
          specializing in the Quick Venom Stack as well as a Graphic Designer, and Photographer.
        </p>
      </div>
      <button class="next" v-on:click="modal++" v-if="modal < 3">Next</button>
      <button class="previous" v-on:click="modal--" v-if="modal > 1">Previous</button>
    </div>
    <div class="modal" v-else>
      <div class="royce">
        <div class="royceImage"></div>
        <p>
          Royce Birnbaum is the President and Co-Founder of Screen Art Studios. A Full Stack Web Developer
          specializing in the Quick Venom Stack as well as an Author, Graphic Designer, and Photographer.
        </p>
      </div>
      <div class="kris">
        <div class="krisImage"></div>
        <p>
          Kristoffer St. John is the Vice President and Co-Founder of Screen Art Studios.
          A Full Stack Web Developer specializing in the Quick Venom Stack as well
          as an Artist, Graphic Designer, and Photographer.
        </p>
      </div>
      <button class="next" v-on:click="modal++" v-if="modal < 3">Next</button>
      <button class="previous" v-on:click="modal--" v-if="modal > 1">Previous</button>
    </div>
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
  @base-font:'Pathway Gothic One', sans-serif;

  .main {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 145px;
    width: 96%;
    height: 68%;
    z-index: 10;
    position: fixed;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    color: #fff;
  }

  .modal {
    display: grid;
    grid-template-columns: .1fr 2fr .1fr;
    grid-template-rows: 20px repeat(2, 160px) 40px;
  }

  .royce {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-columns: .4fr 1fr;
  }

  .royceImage {
    grid-column: 1;
  }

  .kris {
    grid-column: 2;
    grid-row: 3;
    display: grid;
    grid-template-columns: .4fr 1fr;
  }

  .krisImage {
    grid-column: 1;
  }

  .bon {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 2;
    display: grid;
    grid-template-columns: .4fr 1fr;
  }

  .bonImage {
    grid-column: 1;
  }

  .avery {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 3;
    display: grid;
    grid-template-columns: .4fr 1fr;
  }

  .averyImage {
    grid-column: 1;
  }

  .previous {
    height: 40px;
    width: 100%;
    grid-column: 1;
    grid-row: 4;
  }

  .next {
    height: 40px;
    width: 100%;
    grid-column: 2;
    grid-row: 4;
  }

  p {
    grid-column: 2;
    font-size: 1em;
    line-height: 1.2em;
  }

  @media only screen and (min-width:700px) {
    .main {

    }

    h1 {

    }
  }
</style>

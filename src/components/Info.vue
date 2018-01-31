<template>
  <div class="main">
    <div class="modal">
      <div class="services">
        <h1>services</h1>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>Graphic Design</li>
          <li>Consulting</li>
        </ul>
      </div>
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
    overflow: hidden;
  }

  .modal {
    overflow-y: scroll;
    height: 100%;
    display: grid;
    grid-template-columns: .1fr 2fr .1fr;
    grid-template-rows: 20px repeat(5, 400px) 40px;
  }

  .royce {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-columns: .1fr 1fr .1fr;
    grid-template-rows: 200px 200px;
  }

  .royceImage {
    background-image: url('../assets/RoyceHeadshot.png');
    background-repeat: no-repeat;
    grid-row: 1;
    grid-column: 2;
    width: 100%;
    height: 100%;
  }

  .kris {
    grid-column: 2;
    grid-row: 3;
    display: grid;
    grid-template-columns: .1fr 1fr .1fr;
    grid-template-rows: 200px 200px;
  }

  .krisImage {
    background-image: url('../assets/KrisHeadshot.png');
    background-repeat: no-repeat;
    grid-row: 1;
    grid-column: 2;
    width: 100%;
    height: 100%;
  }

  .bon {
    grid-column: 2;
    grid-row: 4;
    display: grid;
    grid-template-columns: .1fr 1fr .1fr;
    grid-template-rows: 200px 200px;
  }

  .bonImage {
    background-image: url('../assets/BonHeadshot.png');
    background-repeat: no-repeat;
    grid-row: 1;
    grid-column: 2;
    width: 100%;
    height: 100%;
  }

  .avery {
    grid-column: 2;
    grid-row: 5;
    display: grid;
    grid-template-columns: .1fr 1fr .1fr;
    grid-template-rows: 200px 200px;
  }

  .averyImage {
    background-image: url('../assets/AveryHeadshot.png');
    background-repeat: no-repeat;
    grid-row: 1;
    grid-column: 2;
    width: 100%;
    height: 100%;
  }

  .services {
    padding-top: 80px;
    grid-column: 2;
    grid-row: 6;
  }

  p {
    grid-row: 2;
    grid-column: 2;
    font-size: 1em;
    line-height: 1.2em;
    padding-top: 24px;
  }

  @media only screen and (min-width:700px) {
    .main {

    }

    h1 {

    }
  }
</style>

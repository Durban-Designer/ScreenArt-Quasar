<template>
  <div class="workPage">
    <div class="totalResponseModal"v-if="modal==='tr'">
      <h1>Total Response</h1>
      <p>
        Total Response aims to revolutionize Emergency Response by providing relevant authorities with the users location,
        Medical Information, and Emergency Type. Whereas currently 911 only gets the nearest cell phone tower Total Response will
        provide an accuracy of within meters, this greatly improves the users survivability in an emergency situation. Available on iOS and Android marketplaces
        Summer 2018.
      </p>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="quickVenomModal" v-else-if="modal==='qc'">
      <h1>Quick Venom</h1>
      <p>
        Quick Venom is both a Blog run by the founders of Screen Art and a web stack consisting of nine key technologies. Quasar, Webpack, Cordova, Vue.js, Express, Node.js, Ubuntu Server, MongoDB, and Mongoose.
        These technologies enable us to develop Hybrid Web applications, websites, and Desktop Apps all from the same code base for all platforms. This substantially reduces the neccesary team size and man
        hours for many projects and allows us to bring huge market coverage for a fraction of the price. We built the blog in order to educate other developers on the stack and to give back to the community by
        assisting in the development of these technologies.
      </p>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="carpetGuysModal" v-else-if="modal==='cg'">
      <h1>Carpet Guys</h1>
      <p>
        Carpet Guys is a Mobile CRM Hybrid Web Application we developed that enables the employees to clock in, view jobs, check their schedule, navigate to jobs on a map, message customers and employees, upload photos,
        track leads, and run marketting campaigns. As well as having a customer facing side that allows customers to track job progress, upload photos, and has social media links.
      </p>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="hammurabiGameModal" v-else-if="modal==='hm'">
      <h1>Hammurabi 3000</h1>
      <p>
        Hammurabi 3000 is our remake of the classic Hammurabi Game, reimagined in a dystopian future you Overlord Hammurabi have been
        ressurected to manage the Galactic Dominion! With more strategy, more rations, and a whole load of space crabs Hammurabi 3000 is
        an addictive turn based strategy game coming to mobile app stores early 2018. Play a demo by clicking <span class="link" v-on:click="$router.push('/hammurabi')"> here!</span>
      </p>
      <button class="back" v-on:click="modal=''">Back</button>
    </div>
    <div class="tiles" v-else>
      <div class="totalResponse" v-on:click="modal='tr'">Total Response</div>
      <div class="quickVenom" v-on:click="modal='qc'">Quick Venom</div>
      <div class="carpetGuys" v-on:click="modal='cg'">Carpet Guys</div>
      <div class="hammurabiGame" v-on:click="modal='hm'">Hammurabi Game</div>
    </div>
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
@base-font:'Pathway Gothic One', sans-serif;

  .workPage {
    margin-left: 5px;
    margin-top: 10%;
    width: 99%;
    height: 73.5%;
    position: fixed;
    background:rgba(0,0,0,0.6);
    border-radius: 12px;
    box-shadow: 2px 2px 4px #000;
    color: #fff;
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

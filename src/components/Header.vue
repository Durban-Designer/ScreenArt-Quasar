
<template>
  <div class="navbar">
    <button class="Work">Work</button>
    <button class="Contact">Contact</button>
    <div class="sa" v-on:click="$router.push('/')"></div>
    <button class="Team">Team</button>
    <button class="Quotes">Quotes</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
@base-font:'Montserrat', sans-serif;

.navbar {
  width: 100%;
  height: 100px;
  background:rgba(0,0,0,0.6);
  position: absolute;
  z-index: 7;
  text-align: center;
  line-height: 70px;
  font-family: @base-font;
  font-weight: lighter;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 220px repeat(2,1fr);
  grid-template-rows: 100px;

}
.Work:hover {
  transform:scale(1.3,1.3);
  -webkit-transform:scale(1.3,1.3);
  -moz-transform:scale(1.3,1.3);
}
.Work {
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: @base-font;
  font-size: 1.4em;
  width: 25%;
  text-shadow: 2px 2px 3px black;
  grid-column: 1;
  width: 100%;

}

.Contact:hover {
  transform:scale(1.3,1.3);
  -webkit-transform:scale(1.3,1.3);
  -moz-transform:scale(1.3,1.3);
}

.Contact {
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: @base-font;
  font-size: 1.4em;
  width: 25%;
  text-shadow: 2px 2px 3px black;
  grid-column: 2;
  width: 100%;
}

.Team:hover {
  transform:scale(1.3,1.3);
  -webkit-transform:scale(1.3,1.3);
  -moz-transform:scale(1.3,1.3);
}

.Team {
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: @base-font;
  font-size: 1.4em;
  width: 25%;
  text-shadow: 2px 2px 3px black;
  width: 100%;

}

.sa {
  width: 100%;
  height: 100%;
  background-image: url("../assets/logo.svg");
  z-index: 8;
  background-repeat: no-repeat;
  -webkit-filter: drop-shadow(1px 2px 2px #fff);
  filter: drop-shadow(1px 2px 2px #fff);
  align-items: center;
}
.Quotes:hover {
  transform:scale(1.3,1.3);
  -webkit-transform:scale(1.3,1.3);
  -moz-transform:scale(1.3,1.3);
}
.Quotes {
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: @base-font;
  font-size: 1.4em;
  width: 25%;
  text-shadow: 2px 2px 3px black;
  width: 100%;

}
</style>

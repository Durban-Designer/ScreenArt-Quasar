<template>
  <div class="main">
      <h2>Contact Us</h2>
      <div class="contactBox">
        <input class="name" v-model="name" placeholder="name"></input>
        <input class="email" v-model="email" placeholder="email"></input>
        <input class="phone" v-model="phone" placeholder="phone"></input>
        <input class="message" v-model="message" placeholder="message"></input>
        <div v-on:click="send" class="send">Send</div>
        <h2 class="words">Send Us A Message</h2>
        <h3>Or</h3>
        <h3 class="callus">Call Us</h3>
        <ul>
          <li>(480)-526-2634</li>
          <li>(602)-558-1817 </li>
        </ul>
        <h3 class="blurb">We understand that your time is important. So we'll do our best to respond as quickly as possible!</h3>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Contact',
    data: function () {
      return {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  }
</script>

<style scoped lang='less'>
@base-font:'Montserrat', sans-serif;

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

  h2 {
    font-family: @base-font;
    font-weight: lighter;
    font-size: 2em;
    color: #fff;
    text-shadow: 2px 2px 3px black;
    text-align: center;
    line-height: 100px;
  }
  h3 {
    font-family: @base-font;
    font-weight: lighter;
    font-size: 2em;
    color: #fff;
    text-shadow: 2px 2px 3px black;
    text-align: center;
    line-height: 200px;
    grid-column-start: 3;
    grid-column-end: 4;
    margin-right: 20px;
  }
  ul {
    font-family: @base-font;
    font-weight: lighter;
    font-size: 3em;
    color: #fff;
    text-shadow: 2px 2px 3px black;
    text-align: center;
    grid-row-start: 2;
    grid-row-end: 5;
    grid-column-start: 4;
    grid-column-end: 6;
    list-style: none;
    line-height: 80px;
    margin-right: 40px;
  }
  .words {
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 3;
    font-size: 1.8em;
    line-height: 0px;
    text-decoration: underline;
  }

  .callus {
    grid-row: 1;
    grid-column-start: 4;
    grid-column-end: 6;
    line-height: 0px;
    font-size: 2em;
    text-align: center;
    text-decoration: underline;
    margin-right: 40px;
  }
  .blurb {
    grid-row-start: 6;
    grid-row-end: 6;
    grid-column-start: 4;
    grid-column-end: 6;
    line-height: 30px;
  }
  .contactBox {
    margin-left: 50px;
    margin-right: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 45px 25px 25px 25px 150px 25px;
  }

  .name {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 2;
  margin-bottom: 5px;

}

.email {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 3;
  box-sizing: border-box;
  margin-bottom: 5px;
}

.phone {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 4;
  margin-bottom: 5px;
}

.message {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  box-sizing: border-box;

}

.send {
  margin-top: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 6;
  text-align: center;
  background-color: transparent;
  height: 30px;
  color: #fff;
  border: solid 1px #fff;
  font-family: 'Lato', sans-serif;
  line-height: 30px;
}
.send:hover {
  color: #000;
  background-color: #fff;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #fff;
  font-size: 0.875em;
}

input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {
  color: #fff;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #fff;
  font-size: 0.875em;
}

input:focus::-moz-placeholder, textarea:focus::-moz-placeholder {
  color: #fff;
}

input::placeholder, textarea::placeholder {
  color: #fff;
  font-size: 0.875em;
}

input:focus::placeholder, textarea::focus:placeholder {
  color: #fff;
}

input::-ms-placeholder, textarea::-ms-placeholder {
  color: #fff;
  font-size: 0.875em;
}

input:focus::-ms-placeholder, textarea:focus::-ms-placeholder {
  color: #fff;
}

/* on hover placeholder */

input:hover::-webkit-input-placeholder, textarea:hover::-webkit-input-placeholder {
  color: #fff;
  font-size: 0.875em;
}

input:hover:focus::-webkit-input-placeholder, textarea:hover:focus::-webkit-input-placeholder {
  color: #fff;
}

input:hover::-moz-placeholder, textarea:hover::-moz-placeholder {
  color: #fff;
  font-size: 0.875em;
}

input:hover:focus::-moz-placeholder, textarea:hover:focus::-moz-placeholder {
  color: #cbc6c1;
}

input:hover::placeholder, textarea:hover::placeholder {
  color: #fff;
  font-size: 0.875em;
}

input:hover:focus::placeholder, textarea:hover:focus::placeholder {
  color: #fff;
}

input:hover::placeholder, textarea:hover::placeholder {
  color: #fff;
  font-size: 0.875em;
}

input:hover:focus::-ms-placeholder, textarea:hover::focus:-ms-placeholder {
  color: #fff;
}

#form {
  position: relative;
  width: 500px;
  margin: 50px auto 100px auto;
}

input {
  font-size: 1em;

  background: transparent;
  outline: none;
  color: #fff;

  border: solid 1px #fff;


  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  background: #fff;
  color: #5d5d5d;
}

textarea {
  width: 470px;
  max-width: 470px;
  height: 110px;
  max-height: 110px;
  padding: 15px;
  background: transparent;
  outline: none;
  color: #726659;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  border: solid 1px #999;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: #999;
  color: #fff;
}
</style>

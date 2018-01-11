<template>
  <div class="main">
    <div class="leadbox" v-if="leadbox">
      <input type="text" class="search" placeholder="SearchLeads" v-model="searchBox"></input>
      <button type="submit" class="searchButton" v-on:click="search">Search</button>
      <h4>Leads</h4>
      <div class="leadList" v-on:click="displayLead" v-for="lead in leads">
        <h5 v-on:click="leadItemDisplay(lead)" class="lead">{{lead.name}}:{{lead.status}}</h5>
      </div>
      <button class="newLead" v-on:click="newLeadButton">New Lead</button>
      <button class="back" v-on:click="$router.push('/user')">Back</button>
    </div>
    <div class="leadItem" v-if="leaditem">
      <p class="name">{{activeLead.name}}</p>
      <p class="phone">{{activeLead.phone}}</p>
      <p class="email">{{activeLead.email}}</p>
      <p class="status">{{activeLead.status}}></p>
      <p class="address">{{activeLead.address}}</p>
      <p class="comment">{{activeLead.comment}}</p>
      <p class="url">{{activeLead.url}}</p>
      <button class="editButton" v-on:click="edit = true; lead = false; leaditem = false;">Edit</button>
      <button class="" v-on:click="">Delete</button>
      <button class="back" v-on:click="leaditem = false; leadbox = true">Back</button>
    </div>
    <div class="edit" v-if="edit">
      <h4 class="entertitle">Lead Info</h4>
      <input type="text" class="clientNameEdit" v-model="activeLead.name" placeholder="Name" required></input>
      <input type="tel" class="phoneEdit" v-model="activeLead.phone" placeholder="Phone Number" required></input><br/>
      <input type="text" class="emailEdit" v-model="activeLead.email" placeholder="Email Address" required></input>
      <input type="text" class="addressEdit" v-model="activeLead.address" placeholder="Address"required></input>
      <select class="statusEdit" v-model="activeLead.status">
        <option value="notContacted">not contacted</option>
        <option value="contacted">contacted</option>
        <option value="jobInProgress">job in-progress</option>
        <option value="jobFinished">job finished</option>
      </select>
      <input type="text" class="notesEdit" v-model="activeLead.comment" placeholder="Notes"></input>
      <button class="cancel" v-on:click="cancel">Cancel</button>
      <button class="submitEdit" v-on:click="submitEdit">Submit</button>
    </div>
    <div class="newLead" v-if="newLead">
      <h4 class="entertitle">Lead Info</h4>
      <input type="text" class="nameNew" v-model="activeLead.name" placeholder="Name" required></input>
      <input type="tel" class="phoneNew" v-model="activeLead.phone" placeholder="Phone Number" required></input><br/>
      <input type="text" class="emailNew" v-model="activeLead.email" placeholder="Email Address" required></input>
      <input type="text" class="addressNew" v-model="activeLead.address" placeholder="Address"required></input>
      <select class="statusNew" v-model="activeLead.status">
        <option value="notContacted">not contacted</option>
        <option value="contacted">contacted</option>
        <option value="jobInProgress">job in-progress</option>
        <option value="jobFinished">job finished</option>
      </select>
      <input type="text" class="commentNew" v-model="activeLead.comment" placeholder="Notes"></input>
      <button class="cancel" v-on:click="cancel">Cancel</button>
      <button class="submitLead" v-on:click="submitLead">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'leads',
  props: ['user', 'loggedIn'],
  created () {
    let vue = this
    if (vue.loggedIn === true) {
      vue.clearLeads()
      this.populateLeads()
    }
    else {
      vue.$router.push('/login')
    }
  },
  data: function () {
    return {
      activeLead: {
        name: '',
        phone: '',
        email: '',
        url: '',
        address: '',
        status: '',
        comment: '',
        id: ''
      },
      leads: [{}],
      error: '',
      tabSelected: 0,
      leadbox: true,
      newLead: false,
      edit: false,
      searchBox: '',
      newleadButton: false,
      leaditem: false,
      postlead: false
    }
  },
  computed: {
  },
  methods: {
    populateLeads () {
      let vue = this
      axios.get('http://13.57.57.81:81/leads', {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.leads = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    clearLeads () {
      this.leads = [{}]
    },
    clearActiveLeads () {
      this.activeLead.name = ''
      this.activeLead.phone = ''
      this.activeLead.email = ''
      this.activeLead.address = ''
      this.activeLead.status = ''
      this.activeLead.comment = ''
      this.activeLead.url = ''
      this.activeLead.id = ''
    },
    leadItemDisplay (lead) {
      let vue = this
      vue.leaditem = true
      vue.activeLead.id = lead._id
      vue.activeLead.name = lead.name
      vue.activeLead.phone = lead.phone
      vue.activeLead.email = lead.email
      vue.activeLead.address = lead.address
      vue.activeLead.status = lead.status
      vue.activeLead.comment = lead.comment
      vue.activeLead.url = lead.url
    },
    submitLead () {
      let vue = this
      axios.post('http://13.57.57.81:81/leads', {
        name: vue.activeLead.name.toLowerCase(),
        phone: vue.activeLead.phone,
        email: vue.activeLead.email,
        address: vue.activeLead.address,
        status: vue.activeLead.status,
        comment: vue.activeLead.comment,
        url: vue.activeLead.url
      })
        .then(function () {
          vue.edit = false
          vue.leadbox = true
          vue.newLead = false
        })
        .catch(function (error) {
          console.log(error)
        })
      vue.clearLeads()
      vue.populateLeads()
    },
    submitEdit () {
      let vue = this
      axios.put('http://13.57.57.81:81/leads/' + vue.activeLead.id, {
        name: vue.activeLead.name.toLowerCase(),
        phone: vue.activeLead.phone,
        email: vue.activeLead.email,
        address: vue.activeLead.address,
        status: vue.activeLead.status,
        comment: vue.activeLead.comment,
        url: vue.activeLead.url
      }, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function () {
          vue.edit = false
          vue.leadbox = true
          vue.clearLeads()
          vue.populateLeads()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    cancel () {
      let vue = this
      vue.edit = false
      vue.leadbox = true
      vue.newLead = false
      vue.clearLeads()
      this.populateLeads()
    },
    newLeadButton () {
      let vue = this
      vue.clearLeads()
      vue.clearActiveLeads()
      vue.leadbox = false
      vue.newLead = true
    },
    displayLead () {
      let vue = this
      vue.leadItem = true
      vue.leadbox = false
    },
    search () {
      let vue = this
      axios.get('http://13.57.57.81:81/leads/name/' + vue.searchBox, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.leads = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
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

.leadBox {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 50px);
}

.back {

}

.search {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 3;
}

.searchButton {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 3;
}

button {
  color: #000;
  background-color: #fff;
}

h4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 2em;
  line-height: 0px;
  text-decoration: underline;
  color: #fff;
}

.lead {
  color: #fff;
}

.leadlist {
}

.leadItem {

}

.clientName {

}

.primaryContact {

}

.title {

}

.phonenum {

}

.email {

}

.address {

}

.leadStatus {

}

.notes {

}

.newLead {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 3;
}

.editButton {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 10;
  grid-row-end: 11;
}

.edit {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 50px);
}

.leadEdit {

}

.clientNameEdit {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 3;
}

.primaryContactEdit {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 3;
}

.phoneEdit {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 3;
}

.emailEdit {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 4;
}

.addressEdit {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 5;
}

.leadStatusEdit {

}

.notesEdit {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 8;
}

.statusEdit {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 4;
}

.submitEdit {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 10;
}

.submitLeads {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 10;
}

.cancel {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 10;
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
  font-size: 1.5em;
  font-family: @base-font;
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
  font-family: @base-font;
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

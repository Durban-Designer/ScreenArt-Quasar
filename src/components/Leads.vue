<template>
  <div class="main">
    <div class="leadbox" v-if="leadbox">
      <input type="text" class="search" placeholder="SearchLeads" v-model="searchBox"></input>
      <button type="submit" class="searchButton"v-on:click="search">Search</button>
      <h4>Leads</h4>
      <div class="lead" v-on:click="displayLead"></div>
      <div class="leadItem" v-if="leaditem">
        <button class="editButton" v-on:click="edit = true; lead = false;">Edit</button>
        <p class="clientName"></p>
        <p class="phonenum"></p>
        <p class="email"></p>
        <p class="address"></p>
        <div class="leadStatus"></div>
        <p class="notes"></p>
      </div>
      <button class="newLead" v-on:click="newLead">New Lead</button>
    </div>
    <div class="edit" v-if="edit">
      <h4 class="entertitle">Lead Info</h4>
      <input type="text" class="clientNameEdit" v-model="activeLead.clientName" placeholder="Client Name" required></input>
      <input type="tel" class="phoneEdit" v-model="activeLead.phoneNumber" placeholder="Phone Number" required></input><br/>
      <input type="text" class="emailEdit" v-model="activeLead.email" placeholder="Email Address" required></input>
      <input type="text" class="addressEdit" v-model="activeLead.address" placeholder="Address"required></input>
      <select class="statusEdit">
        <option value="notContacted">not contacted</option>
        <option value="contacted">contacted</option>
        <option value="jobInProgress">job in-progress</option>
        <option value="jobFinished">job finished</option>
      </select>
      <input type="text" class="notesEdit" v-model="activeLead.notes" placeholder="Notes"></input>
      <button class="submitNew" v-on:click="submit">Submit</button>
      <button class="submitEdit" v-on:click="submitEdit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'leads',
  created () {
    this.populateLeads()
  },
  data: function () {
    return {
      activeLead: {
        clientName: '',
        phoneNumber: '',
        email: '',
        address: '',
        status: '',
        notes: ''
      },
      leads: [{}],
      error: '',
      tabSelected: 0,
      edit: false,
      leadbox: true,
      searchBox: '',
      newlead: false,
      leaditem: false
    }
  },
  props: ['logged'],
  computed: {
  },
  methods: {
    populateLeads () {
      let vue = this
      axios.get('http://13.57.57.81:81/leads')
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
      this.activeLead.clientName = ''
      this.activeLead.phoneNumber = ''
      this.activeLead.email = ''
      this.activeLead.address = ''
      this.activeLead.status = ''
      this.activeLead.notes = ''
    },
    submit () {
      let vue = this
      axios.post('http://13.57.57.81:81/leads', {
        clientName: vue.activeLead.clientName.toLowerCase(),
        phoneNumber: vue.activeLead.phoneNumber,
        email: vue.activeLead.email,
        address: vue.activeLead.address,
        status: vue.activeLead.status,
        notes: vue.activeLead.notes
      }, {headers: { 'Authorization': 'JWT ' + vue.token }})
        .then(function () {
          vue.edit = false
          vue.leadbox = true
        })
        .catch(function (error) {
          console.log(error)
        })
      vue.clearLeads()
      vue.populateLeads()
    },
    submitEdit () {
      axios.put('http://13.57.57.81:81/leads', {
        clientName: vue.activeLead.clientName.toLowerCase(),
        phoneNumber: vue.activeLead.phoneNumber,
        email: vue.activeLead.email,
        address: vue.activeLead.address,
        status: vue.activeLead.status,
        notes: vue.activeLead.notes
      }, {headers: { 'Authorization': 'JWT ' + vue.token }})
        .then(function () {
          vue.edit = false
          vue.leadbox = true
        })
        .catch(function (error) {
          console.log(error)
        })
      },
    newLead () {
      let vue = this
      vue.clearLeads()
      vue.clearActiveLeads()
      vue.edit = true
      vue.leadbox = false
    },
    displayLead () {
      let vue = this
      vue.leadItem = true
    },
    search () {
      let vue = this
      vue.clearLeads()
      axios.get('http://13.57.57.81:81/leads/name/' + vue.searchBox)
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
.main {
  margin-left: 5px;
  margin-top: 110px;
  width: 99%;
  height: 500px;
  z-index: 10;
  position: absolute;
  background:rgba(0,0,0,0.6);
  border-radius: 12px;
}

.leadBox {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 50px);
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

h4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
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
  margin-top: 10px;
  margin-right: 10px;
}

.primaryContactEdit {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 3;
}

.phoneEdit {
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 3;
}

.emailEdit {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 4;
  margin-top: 10px;
  margin-right: 10px;
}

.addressEdit {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 7;
}

.leadStatusEdit {

}

.notesEdit {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 9;
}

.statusEdit {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 4;
}

.submitButton {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 10;
}
</style>

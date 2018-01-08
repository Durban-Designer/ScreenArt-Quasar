<template>
  <div class="main">
    <div class="search">
      <input type="text" class="search" placeholder="SearchLeads"></input>
      <button type="submit" class="searchButton">Search</button>
      <h1>Lead Contact Info</h1>
      <p class="clientName">{{this.lead.clientName}}</p>
      <p class="primaryContact">{{this.lead.primaryContact}}</p>
      <p class="title">{{this.lead.title}}</p>
      <p class="phonenum">{{this.lead.phoneNumber}}</p>
      <p class="email">{{this.lead.email}}</p>
      <p class="address">{{this.lead.addressOne}}</p>
      <p class="secondaryContact">{{this.lead.secondaryContact}}</p>
      <p class="secondaryphonenum">{{this.lead.secondaryphoneNumber}}</p>
      <p class="secondaryemail">{{this.lead.secondaryemail}}</p>
      <p class="secondaryaddress">{{this.lead.secondaryaddress}}</p>
      <h1>Status</h1>
      <!--change lead status options-->
      <div class="leadStatus">{{this.lead.status}}</div>
      <p class="notes">{{this.lead.notes}}</p>
      <button class="editButton" v-on:click="toggleEdit">Edit</button>
    </div>
    <div v-bind:class="leadEditLogic">
      <h1 class="entertitle">Edit Lead Information</h1>
      <input type="text" class="clientNameEdit" v-model="lead.clientName" placeholder="Client Name" required></input>
      <input type="text" class="primaryContactEdit" v-model="lead.primaryContact" placeholder="Primary Contact" required></input>
      <input type="text" class="titleEdit" v-model="lead.title" placeholder="Title"></input>
      <input type="tel" class="phoneEdit" v-model="lead.phoneNumber" placeholder="Phone Number" required></input><br/>
      <input type="text" class="userNameEdit" v-model="lead.email" placeholder="Email Address" required></input>
      <input type="text" class="addressEdit" v-model="lead.address" placeholder="Address"required></input>
      <input type="text" class="secondaryContactEdit" v-model="lead.secondaryContact" placeholder="Secondary Contact"></input>
      <input type="tel" class="secondaryphoneEdit" v-model="lead.secondaryphoneNumber" placeholder="Secondary Phone Number"></input><br/>
      <input type="text" class="secondaryuserNameEdit" v-model="lead.secondaryemail" placeholder="Secondary Email Address"></input>
      <input type="text" class="secondaryaddressEdit" v-model="lead.secondaryaddress" placeholder="Secondary Address"></input>
      <button class="addContact" v-on:click="">Add Contact</button>
      <h1>Status</h1>
      <select>
        <option value="notContacted">not contacted</option>
        <option value="contacted">contacted</option>
        <option value="jobInProgress">job in-progress</option>
        <option value="jobFinished">job finished</option>
      </select>
      <input type="text" class="notesEdit" v-model="lead.notes" placeholder="Notes"></input>
      <button class="confirmButton" v-on:click="submit">Confirm Changes</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leads',
  data: function () {
    return {
      user: {
        clientName: '',
        primaryContact: '',
        phoneNumber: '',
        email: '',
        address: '',
        status: '',
        notes: ''
      },
      error: '',
      tabSelected: 0,
      edit: false
    }
  },
  props: ['logged'],
  computed: {
    leadLogic: function () {
      return {
        main: !this.edit,
        hidden: this.edit
      }
    },
    leadEditLogic: function () {
      return {
        main: this.edit,
        hidden: !this.edit
      }
    }
  },
  methods: {
    toggleEdit () {
      this.edit = true
    },
    submit () {
      this.edit = false
    }
  }
}
</script>

<style scoped lang='less'>
.main {
  display: grid;
  grid-template-columns: ;
  grid-template-rows: ;
}
</style>

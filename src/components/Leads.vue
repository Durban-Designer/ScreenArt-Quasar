<template>
  <div class="main">
    <div class="lead" v-if="lead">
      <input type="text" class="search" placeholder="SearchLeads"></input>
      <button type="submit" class="searchButton">Search</button>
      <h4>Lead Info</h4>
      <p class="clientName"></p>
      <p class="primaryContact"></p>
      <p class="title"></p>
      <p class="phonenum"></p>
      <p class="email"></p>
      <p class="address"></p>
      <div class="leadStatus"></div>
      <p class="notes"></p>
      <button class="editButton" v-on:click="edit = true; lead = false;">Edit</button>
    </div>
    <div class="edit" v-if="edit">
      <h4 class="entertitle">Lead Info</h4>
      <input type="text" class="clientNameEdit" v-model="activeLead.clientName" placeholder="Client Name" required></input>
      <input type="text" class="primaryContactEdit" v-model="activeLead.primaryContact" placeholder="Primary Contact" required></input>
      <input type="text" class="titleEdit" v-model="activeLead.title" placeholder="Title"></input>
      <input type="tel" class="phoneEdit" v-model="activeLead.phoneNumber" placeholder="Phone Number" required></input><br/>
      <input type="text" class="emaileEdit" v-model="activeLead.email" placeholder="Email Address" required></input>
      <input type="text" class="addressEdit" v-model="activeLead.address" placeholder="Address"required></input>
      <button class="addContact" v-on:click="">Add Contact</button>
      <select>
        <option value="notContacted">not contacted</option>
        <option value="contacted">contacted</option>
        <option value="jobInProgress">job in-progress</option>
        <option value="jobFinished">job finished</option>
      </select>
      <input type="text" class="notesEdit" v-model="activeLead.notes" placeholder="Notes"></input>
      <button class="confirmButton" v-on:click="submit; edit = false; lead = true">Confirm Changes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leads',
  data: function () {
    return {
      activeLead: {
        clientName: '',
        primaryContact: '',
        phoneNumber: '',
        email: '',
        address: '',
        status: '',
        notes: ''
      },
      leads: [],
      error: '',
      tabSelected: 0,
      edit: false,
      lead: true
    }
  },
  props: ['logged'],
  computed: {
},
  methods: {
  }
}
</script>

<style scoped lang='less'>
.main {

}

.lead {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 50px);
}

.search {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.searchButton {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}

h4 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
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

.editButton {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 11;
}

.edit {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(12, 50px);
}

.editlead {

}

.editclientName {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 4;
}

.editprimaryContact {

}

.edittitle {

}

.editphonenum {

}

.editemail {

}

.editaddress {

}

.editleadStatus {

}

.editnotes {

}

.confirmButton {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 11;
}
</style>

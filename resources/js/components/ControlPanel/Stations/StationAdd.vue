<template>
        <v-dialog v-model="dialog" persistent scrollable :width="formwidth">
          <v-card>
            <v-toolbar card dark color="primary">
              <!-- Title of the Dialog Form -->
              <v-toolbar-title> {{ formTitle }} Station</v-toolbar-title>
                <v-spacer></v-spacer>
  
                <!-- top add person icon -->
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large target="_blank" v-on="on" @click="clear">
                      <v-icon large>account_balance</v-icon>
                    </v-btn>
                  </template>
                  <span>Add New Station</span>
                </v-tooltip>
  
                <!-- Close Button Top -->
                <v-btn icon dark @click="cancel">
                  <v-icon>close</v-icon>
                </v-btn>
  
              </v-toolbar>
            <v-divider></v-divider>
  
            <v-card-text  class="px-5">
                <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
                    <v-flex xs12>
                      <v-layout row wrap>
                      <!-- -------  Main Information  ------------------------------ -->   
                      <!-- Station Name Field -->
                        <v-flex xs12>
                          <v-text-field
                            type="text"
                            name="name"
                            prepend-icon="account_balance"
                            label="Station Name"
                            :rules="rules.required"
                            v-model="station.name"
                          ></v-text-field>
                        </v-flex>
                      <!-- Station Branch Field -->
                        <v-flex xs12>
                          <v-text-field
                            type="text"
                            name="branch"
                            prepend-icon="domain"
                            label="Branch"
                            :rules="rules.required"
                            v-model="station.branch"
                          ></v-text-field>
                        </v-flex>
                      <!-- Station Account Number Field -->
                        <v-flex xs12>
                          <v-text-field
                            type="tel"
                            name="acc_number"
                            prepend-icon="subtitles"
                            label="Acc: Number"
                            :rules="rules.required"
                            v-model="station.acc_number"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-divider class="mx-4" inset vertical v-if="expand"></v-divider>
                    <!-- --------- Expanded Information  ---------------------------- -->
                    <v-flex xs12 v-if="expand">
                      <v-layout row wrap>
                        <v-flex xs12>
                          <v-subheader>Other Information</v-subheader>
                          <v-divider></v-divider>
                        </v-flex>
                        <v-flex xs12 align-center justify-space-between>
                          <v-flex xs12>
                            <v-text-field 
                              name="info01" 
                              label="Info01" 
                              type="text"
                            >
                            </v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field 
                              name="info02" 
                              label="info02" 
                              type="text"
                            >
                            </v-text-field>
                          </v-flex>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field
                            type="tel"
                            prepend-icon="smartphone"
                            label="info03"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                </v-form>
                  <!-- </v-container> -->
            </v-card-text>
            <v-divider></v-divider>
  
            <!-- Station Dialog Form Footer With Actions-->
            <v-card-actions>
                <v-btn flat color="primary" @click="more">{{ expandText }}</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat @click="cancel">Cancel</v-btn>
                <v-btn :disabled="!valid" flat color="primary" @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  
  export default {
      data(){
          return {
              valid : false,
              expand : false,
              // Customized Dialog Form Width
              formwidth : '900px',
              // Validation Rules for Form
              rules : {
                required : [
                  v => !!v || 'This field is required',
                ]
              },
              // Default Station Object
              station : {
                name : '',
                branch : '',
                acc_number : ''
              }
          }
      },
      watch: {
          dialog (val) {
            // when open dialog form is true, stationChange() called
            val && this.stationChange()
              
          }
      },
      computed:{
        // Change Form Title When Edit & Add New
          formTitle () {
            return this.station.name ? 'Edit' : 'Add New'
          },
          ...mapGetters({
            // Get Dialog Visibility Value
            dialog : 'dashboard/getStationForm',
            // Get Edit station Details
            editstation : 'dashboard/getEditItem'
          }),
        // Expand Button Name Change
          expandText () {
            return this.expand ? '<< Less' : 'More >>'
          },
      },
      methods:{
        ...mapActions({
          // Toggle Dialog Form to Show/ Hide
            toggleForm : 'dashboard/set_toggle_form',
          // Add new Station to database
            addStation : 'station/add_new_station',
          // Update Item Change in State
            updateItem : 'dashboard/set_edit_item',
          }),
  
          // form identify is this 'new station' or 'update station'
          stationChange(){
            if(this.editstation.id){
              Object.assign(this.station, this.editstation)
            }else{
              this.clear()
            }
            
          },
          // when cancel button click Form is close
          cancel(){
            this.toggleForm('station')
            setTimeout(() => this.clear(), 500);
          },
          // Clear the Form field's
          clear(){
            this.station = { 
                name : '',
                brach : '',
                acc_number : ''
            }
            this.updateItem(this.station)
            this.$refs.form.resetValidation()
          },
  
          // save the form value's
          save(){
            if (this.$refs.form.validate()) {
              // update exist station
              if(this.station.id){
                this.$store.dispatch("station/update_station",this.station).then(response => {
                  this.toggleForm('station')
                  setTimeout(() => this.clear(), 500);
                }, error => {})
              
              // add new station
              }else{
                this.addStation(this.station).then(responce =>{
                    this.toggleForm('station')
                    setTimeout(() => this.clear(), 500);
                }, error => {}) 
              }
            }
          },
  
          // form width get full screen 
          more(){
            this.expand = !this.expand
          }
      }
  }
  </script>
  
  
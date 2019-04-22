<template>
    <v-dialog v-model="dialog" persistent scrollable :width="formwidth">
      <v-card>
        <v-toolbar card dark color="primary">
          <!-- Title of the Dialog Form -->
          <v-toolbar-title> {{ formTitle }} payment</v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- top add person icon -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon large target="_blank" v-on="on" @click="clear">
                  <v-icon large>monetization_on</v-icon>
                </v-btn>
              </template>
              <span>Add New payment</span>
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
                  <!-- payment Name Field -->
                    <v-flex xs12>
                      <v-text-field
                        prefix="Rs:"
                        type="text"
                        name="amount"
                        prepend-icon="monetization_on"
                        label="payment Amount"
                        :rules="rules.required"
                        v-model="payment.amount"
                      ></v-text-field>
                    </v-flex>
                  <!-- payment Branch Field -->
                    <v-flex xs12>
                      <v-select
                        prepend-icon="settings_input_antenna"
                        label="Station"
                        :items="allStations"
                        item-text="name"
                        item-value="id"
                        :rules="rules.required"
                        v-model="payment.station_id"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-divider class="mx-4" inset vertical v-if="expand"></v-divider>
                <!-- --------- Expanded Information  ---------------------------- -->
                <v-flex xs12 v-if="expand">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-textarea
                        type="text"
                        prepend-icon="smartphone"
                        label="Description"
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-flex>
            </v-form>
              <!-- </v-container> -->
        </v-card-text>
        <v-divider></v-divider>

        <!-- payment Dialog Form Footer With Actions-->
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
          formwidth : '500px',
          // Validation Rules for Form
          rules : {
            required : [
              v => !!v || 'This field is required',
            ]
          },
          // Default payment Object
          payment : {
            amount : '',
            station_id : ''
          }
      }
  },
  watch: {
      dialog (val) {
        // when open dialog form is true, paymentChange() called
        val && this.paymentChange()
          
      }
  },
  computed:{
    // Change Form Title When Edit & Add New
      formTitle () {
        return this.payment.id ? 'Edit' : 'Add New'
      },
      ...mapGetters({
        // Get Dialog Visibility Value
        dialog : 'payment/getPaymentForm',
        // Get Edit payment Details
        editpayment : 'payment/getEditPayment',
        allStations : 'station/getAllStations'
      }),
    // Expand Button Name Change
      expandText () {
        return this.expand ? '<< Less' : 'More >>'
      },
  },
  methods:{
    ...mapActions({
      // Toggle Dialog Form to Show/ Hide
        toggleForm : 'payment/set_toggle_form',
      // Add new payment to database
        addpayment : 'payment/add_new_payment',
      // Update Item Change in State
        updateItem : 'payment/set_edit_payment',
      }),

      // form identify is this 'new payment' or 'update payment'
      paymentChange(){
        if(this.editpayment.id){
          Object.assign(this.payment, this.editpayment)
        }else{
          this.clear()
        }
        
      },
      // when cancel button click Form is close
      cancel(){
        this.toggleForm()
        setTimeout(() => this.clear(), 500);
      },
      // Clear the Form field's
      clear(){
        this.payment = { 
            amount : '',
            station_id : ''
        }
        this.updateItem(this.payment)
        this.$refs.form.resetValidation()
      },

      // save the form value's
      save(){
        if (this.$refs.form.validate()) {
          // update exist payment
          if(this.payment.id){
            this.$store.dispatch("payment/update_payment",this.payment).then(response => {
              this.toggleForm()
              setTimeout(() => this.clear(), 500);
            }, error => {})
          
          // add new payment
          }else{
            this.addpayment(this.payment).then(responce =>{
                this.toggleForm()
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


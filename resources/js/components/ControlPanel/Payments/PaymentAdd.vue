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
                  <v-icon large>account_balance</v-icon>
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
                        type="text"
                        name="name"
                        prepend-icon="account_balance"
                        label="payment Name"
                        :rules="rules.required"
                        v-model="payment.name"
                      ></v-text-field>
                    </v-flex>
                  <!-- payment Branch Field -->
                    <v-flex xs12>
                      <v-text-field
                        type="text"
                        name="branch"
                        prepend-icon="domain"
                        label="Branch"
                        :rules="rules.required"
                        v-model="payment.branch"
                      ></v-text-field>
                    </v-flex>
                  <!-- payment Account Number Field -->
                    <v-flex xs12>
                      <v-text-field
                        type="tel"
                        name="acc_number"
                        prepend-icon="subtitles"
                        label="Acc: Number"
                        :rules="rules.required"
                        v-model="payment.acc_number"
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
          formwidth : '900px',
          // Validation Rules for Form
          rules : {
            required : [
              v => !!v || 'This field is required',
            ]
          },
          // Default payment Object
          payment : {
            name : '',
            branch : '',
            acc_number : ''
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
        return this.payment.name ? 'Edit' : 'Add New'
      },
      ...mapGetters({
        // Get Dialog Visibility Value
        dialog : 'dashboard/getpaymentForm',
        // Get Edit payment Details
        editpayment : 'dashboard/getEditItem'
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
      // Add new payment to database
        addpayment : 'payment/add_new_payment',
      // Update Item Change in State
        updateItem : 'dashboard/set_edit_item',
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
        this.toggleForm('payment')
        setTimeout(() => this.clear(), 500);
      },
      // Clear the Form field's
      clear(){
        this.payment = { 
            name : '',
            brach : '',
            acc_number : ''
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
              this.toggleForm('payment')
              setTimeout(() => this.clear(), 500);
            }, error => {})
          
          // add new payment
          }else{
            this.addpayment(this.payment).then(responce =>{
                this.toggleForm('payment')
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


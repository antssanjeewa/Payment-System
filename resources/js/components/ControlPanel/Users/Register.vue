<template>
    <v-card  class="mt-3">
		<v-toolbar flat>
			<v-toolbar-title>New Childrens Register</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat>Link One</v-btn>
			</v-toolbar-items>
		</v-toolbar>
        <!-- <v-toolbar card dark color="primary">
          <v-toolbar-title> {{ formTitle }} Child Register</v-toolbar-title>
            <v-spacer></v-spacer>
            top add person icon -->
            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon large target="_blank" v-on="on" @click="clear">
                  <v-icon large>person_add</v-icon>
                </v-btn>
              </template>
              <span> Add New Child</span>
            </v-tooltip>
            <v-btn icon dark @click="cancel">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar> -->
        <!-- <v-divider></v-divider> -->
        <v-card-text  class="px-5">
            <!-- <v-container grid-list-sm class="pa-1"> -->
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-layout>
                    <v-flex xs12>
                      <v-layout row wrap>
                        <!-- -------  Main Information  ------------------------------ -->
                        <v-flex xs12 align-center justify-space-between>
                          <v-layout align-center>
                            <v-flex xs12 md3>
                              <v-text-field 
                                name="firstname" 
                                label="Reg Number" 
                                type="text"
                                :rules="rules.required"
                                v-model="children.reg_number"
                              >
                              </v-text-field>
							</v-flex>
							<v-spacer></v-spacer>
                          <v-flex xs12 md6>
                            <v-text-field 
                              name="firstname" 
                              label="Full Name" 
                              type="text"
                              :rules="rules.required"
                              v-model="children.name"
                            >
                            </v-text-field>
						  </v-flex>
						  <v-spacer></v-spacer>
                          <v-avatar size="60px" class="mr-3">
                            <img
                              src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                              alt=""
                            >
                          </v-avatar>
                          
                        </v-layout>
                      </v-flex>
          
                      <v-flex xs12 md6>
                        <v-text-field
                          name="mobile01"
                          prepend-icon="smartphone"
                          label="Birth Day"
                          :rules="rules.required"
                          v-model="children.b_day"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs6>
                        <v-text-field
                          prepend-icon="mail"
                          label="Gender"
                          v-model="children.gender"
                        ></v-text-field>
                      </v-flex>
          
                      <v-flex xs6>
                        <v-text-field
                          prepend-icon="lock"
                          label="Address"
                          type="text"
                          v-model="children.address"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6>
                        <v-text-field
                          prepend-icon="smartphone"
                          label="Class Room"
                          v-model="children.class"
                        ></v-text-field>
                      </v-flex>
                      
                      <v-flex xs6>
                        <v-text-field
                          prepend-icon="phone"
                          label="Parent Name"
                          type ="text"
                          v-model="children.parent_name"
                        ></v-text-field>
                      </v-flex>
          
                      <v-flex xs6>
                        <v-text-field
                          type="tel"
                          prepend-icon="smartphone"
                          label="Contact Number"
                          mask="phone"
                          v-model="children.contact_number"
                        ></v-text-field>
                      </v-flex>
                      
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
			<v-spacer></v-spacer>
            <v-btn flat @click="cancel">Cancel</v-btn>
            <v-btn :disabled="!valid" flat color="primary" @click="save">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data(){
      return {
          valid : false,
          rules : {
            required : [
              v => !!v || 'This field is required',
            ]
          },

          children : {
            reg_number : '',
            name : '',
            b_day : '',
            gender : '',
            address : '',
            parent_name : '',
            contact_number : ''
          }
      }
  },
  created(){
    if(this.editchildren.id){
      	Object.assign(this.children,this.editchildren)        
    }else{
      	this.clear()
    }
  },
  computed:{
    // Change Form Title name
      formTitle () {
        return this.children.firstname ? 'Edit' : 'Add New'
      },
      ...mapGetters({
        editchildren : 'children/getEditChildren'
      })
  },
  methods:{
    ...mapActions({
        addchildren : 'children/add_new_children',
        updatechildren : 'children/update_children',
        updateEditchildren : 'children/set_edit_children'
      }),
      // when cancel button click Form is close
      cancel(){
        setTimeout(() => this.clear(), 500);
      },
      // Clear the Form field's
      clear(){
        this.children = {
            reg_number : '',
            name : '',
            b_day : '',
            gender : '',
            address : '',
            parent_name : '',
            contact_number : ''
        },
        // this.$refs.form.resetValidation()
        this.updateEditchildren(this.children)
	  },
	  
      // save the form value's
      save(){
        if (this.$refs.form.validate()) {
          // update exist children
          if(this.children.id){
            //this.updatechildren(this.children)
            this.updatechildren(this.children).then(response => {
              	setTimeout(() => this.clear(), 500);
            }, error => {
                console.error("Got nothing from server. Prompt children to check internet connection and try again")
			})
			
          // add new children
          }else{
			this.addchildren(this.children).then(responce => {
				this.$router.push({ path: '/childs' })
            	setTimeout(() => this.clear(), 500);
			},error => {

			})
			
          }
        } 
	  }
	  
  }
}
</script>


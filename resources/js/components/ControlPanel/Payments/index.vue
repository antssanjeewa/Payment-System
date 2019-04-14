<template>
    <v-flex pa-3>
         <!-- table 01 --> 
         <v-flex py-3>
            <v-toolbar flat>
              <!-- table name -->
              <v-toolbar-title>Childrens Details</v-toolbar-title>
              <v-divider
                class="mx-2"
                inset
                vertical
              ></v-divider>
              <span> Total No of Memebers : {{ allChildrens.length }}</span>
              <v-spacer></v-spacer>
              <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
              ></v-text-field>
             
             <template>
                <v-btn color="primary" dark class="ml-5" >
                  <v-icon medium>add</v-icon>
                    New User
                </v-btn>
            </template>
          </v-toolbar>
          <!-- data column in table -->
          <v-data-table
              :headers="headers" 
              :items="allChildrens"
              class="elevation-1"
              :search="search"
              :pagination.sync="pagination"
              :rows-per-page-items="pagination.rowsPerPageItems"
            >
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.id }}</td>
                <td> {{ props.item.name }}</td>
                <td class="text-xs-left"> {{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.gender }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="justify-center layout px-0">
                  <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                          <v-btn icon @click="userView(props.item.id)">
                            <v-icon large v-on="on" color="green">person</v-icon>
                        </v-btn>
                      </template>
                      <span>View</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                          <v-btn icon @click="editItem(props.item)">
                          <v-icon large v-on="on" color="blue">edit</v-icon>
                          </v-btn>
                      </template>
                      <span>Edit</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                          <v-btn icon @click="deleteItem(props.item)">
                          <v-icon large v-on="on" color="red">delete</v-icon>
                          </v-btn>
                      </template>
                      <span>Delete</span>
                  </v-tooltip>
                </td>
              </template>
              <template v-slot:no-data>
                  <v-progress-linear :indeterminate="true"></v-progress-linear>
              </template>
            </v-data-table>
          </v-flex> 

    </v-flex>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'    
    
export default{
        data : () => ({
            pagination: {
                descending: true,
                //page: 1,
                rowsPerPage: 25,
                //sortBy: 'fat',
                //totalItems: 0,
                rowsPerPageItems: [10,25,50,100,500,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}]
            },
            //allUsers: [],
            search: '',
            headers: [
                { text: 'Ref.ID',width: '1%', value: 'id' },
                { text: 'Name', value: 'name'},
                { text: 'Mobile', value: 'mobile01' },
                { text: 'Email', value: 'email' },
                { text: 'NIC', value: 'nic' },
                { text: 'Actions', value: 'name', sortable: false },
                // { text: 'Actions', value: 'name', sortable: false }

            ]
        }),
        computed :{
            ...mapGetters({
                allChildrens : 'children/getAllChildrens'
            })
        },
        created(){
            // when table is preview, load the all banks from database
          this.$store.dispatch("children/set_childrens").then(response => {
            console.log(response)
          }, error => {
            // Get some error
              console.error(error)
          })
        },
        methods:{
            ...mapActions({
                // addchildren : 'children/add_new_children',
                
            })
        }
    }
</script>
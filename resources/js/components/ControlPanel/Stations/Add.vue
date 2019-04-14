<template>
    <v-flex pa-3>
        <v-toolbar flat>
            <v-toolbar-title>Attendant Mark</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>{{date}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>{{ class_room}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>View Prev</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-flex row>
            <v-flex xs12 sm4 md5>
                <v-menu
                    v-model="d_date"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            v-model="date"
                            label="Donated Date"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker 
                        v-model="date" 
                        @input="d_date = false"
                    ></v-date-picker>
                </v-menu>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 md6>
                <v-select
                    :items="allClasses"
                    item-text ="name"
                    item-value="id"
                    prepend-icon="account_balance"
                    label="Donation Program"
                    v-model="class_room"
                ></v-select>
            </v-flex>
        </v-flex>
        <v-flex pa-3 v-if="class_room">
            <v-layout row wrap>
                <v-flex xs12 md3>
                    <v-card  class="pa-3 text-xs-center" color="blue">
                        <h2>Total Childrens  <b>54</b>  </h2>  
                    </v-card>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs3>
                    <v-card  class="pa-3 text-xs-center" color="green">
                        <h2>Present  <b>00</b> </h2>  
                    </v-card>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs3>
                    <v-card  class="pa-3 text-xs-center" color="orange">
                        <h2>Absent  <b>00</b> </h2>  
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>

        <v-flex>
            <v-list>
                <template v-for="item in allClasses">
                   <v-card class="pa-2 my-1" row>
                       <v-layout>
                        <template>
                            {{ item }}
                        </template>
                        <v-spacer></v-spacer>
                        <v-btn flat>View Prev</v-btn>
                        <v-btn flat>View Prev</v-btn>
                        <!-- <v-btn icon dark >
                            Yes
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-btn icon dark >
                            No
                            <v-icon>close</v-icon>
                        </v-btn> -->
                    </v-layout>
                   </v-card>
                </template>
            </v-list>
            </v-alert>
        </v-flex>
    </v-flex>
</template>
<script>
    
    export default{
        data : () => ({
            d_date:'',
            date : '',
            allClasses : ['10-A','11-B'],
            class_room : ''
        }),
        
    }
</script>
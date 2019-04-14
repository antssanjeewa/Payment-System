<template>
<v-app id="inspire">

    <tool-bar></tool-bar>
    
    <nav-bar></nav-bar>
    <!-- Route view -->
    <v-content>
        <router-view/>
    </v-content>

    <!-- add person click button right-down -->
    <v-btn
    fab
    bottom
    right
    color="pink"
    dark
    fixed
    @click="addNewUser"
    >
    <v-icon>person_add</v-icon>
    </v-btn>

    <!-- snackbar for show message -->
    <!-- <v-snackbar 
        v-model="snackbar" 
        :timeout= "4000" 
        :top= "true" 
        :color="message.type"
        :multi-line= "true"
    >
    {{ message.message }}
    <v-btn color="white" flat @click="snackbar = false" >
        <v-icon>close</v-icon>
    </v-btn>
    </v-snackbar> -->
</v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import nav from './Common/Navigation.vue'
import toolbar from './Common/TopToolBar.vue'

export default {
    data: () => ({
        snackbar: false,
        color : '',
        search: ''
    }),
    components : {
        'nav-bar' : nav,
        'tool-bar' : toolbar
    },
    watch : {
    // Check Snackbar message Value
        // message (val) {
        // this.snackbar = true
        // // console.log("watch message->  "+val.message+" "+val.type)
        // }
    },
    computed : {
        // ...mapGetters({
        // // Get message for Snackbar
        // message : 'getMessage',
        // // Get Theme Data
        // theme : 'getTheme'
        // })
    },
    methods: {
        // ...mapActions({
        // // toggle User dialog form to Show / Hide
        // toggleForm : 'dashboard/set_toggle_form',
        // // Set editUser in State
        // addUser : 'user/set_edit_user',
        // // toggle Navigation Bar to Show & Hide
        // toggleNavbar: 'dashboard/set_toggle_navbar'
        // }),
        // When click Add User Button in Bottom
        addNewUser(){
        this.addUser()
        this.toggleForm('user')
        }
    }
}
</script>
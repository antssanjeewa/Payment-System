<!-- 
	___________________________________________________________________________________________________________
	
															                TOP TOOL BAR
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |          This is the top tool bar component               |
                        |     this have left side app name and navigation drawer    |
                        |     right side app, notification and login user icon      |
                        |                                                           |
                        |              This used components,                        |
                        |                                   *  App Bar              |
                        |                                   *  Notification         |
                        |                                   *  Loging User          |
                        |___________________________________________________________|
		
-->

<template>
  <v-toolbar
    :clipped-left="theme.drawer.clipped"
    :color="theme.color.topToolBar"
    :dark="theme.color.topBarTheme"
    app
    fixed
  >
    <!--===================================================================================================->
                                       Title of the Top ToolBar
    <--===================================================================================================-->
    <v-toolbar-title style="width: 350px">
      <v-toolbar-side-icon v-if="theme.drawer.type !== 'permanent'" @click.stop="toggleNavbar"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Shraddha Media Network</span>
    </v-toolbar-title>

    <!--===================================================================================================->
                                       Search Field in Top ToolBar
    <--===================================================================================================-->
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>

    <v-spacer></v-spacer>

    <!--===================================================================================================->
                                       App View Button in Top Right
    <--===================================================================================================-->
    <!-- <app-view></app-view> -->

    <!--===================================================================================================->
                                       Notificaion Button in Top Right
    <--===================================================================================================-->
    <!-- <notification-bar></notification-bar> -->

    <!--===================================================================================================->
                                       Login User Button in Top right
    <--===================================================================================================-->
    <login-person></login-person>

  </v-toolbar>
</template>


<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->


<script>
import { mapActions, mapGetters } from "vuex";
import notification from "./Notification.vue";
import person from "./LoginPerson.vue";
import app from "./AppView.vue";

export default {
  data: () => ({}),
  components: {
    "notification-bar": notification,
    "login-person": person,
    "app-view": app
  },
  computed: {
    ...mapGetters({
      theme: "getTheme"
    })
  },
  methods: {
    ...mapActions({
      // toggle Navigation Bar to Show & Hide
      toggleNavbar: "dashboard/set_toggle_navbar"
    })
  }
};
</script>

<!-- 
	___________________________________________________________________________________________________________
	
															      LOGIN PERSON IN TOP RIGHT
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |          This Component Use for the preview the           |
                        |            Current Login User Name & Actions              |
                        |                                                           |
                        |     Action List in this conponent,                        |
                        |                                   *  View Profile         |
                        |                                   *  Setting              |
                        |                                   *  Log Out              |
                        |___________________________________________________________|
		
-->

<template>
  <v-menu right offset-y origin="top right" transition="scale-transition" min-width="200">
    <!--===================================================================================================->
                                       Icon of the Login Person Action Dialog
    <--===================================================================================================-->
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon large>person</v-icon>
      </v-btn>
    </template>

    <!--===================================================================================================->
                                       Action List of Login User
    <--===================================================================================================-->
    <v-list class="pt-4">
      
      <!--------------------------------------------------------------------------------------------------- >
			|				    				             Login user Profile Link                                              |
      <----------------------------------------------------------------------------------------------------->
      <v-list-tile @click="viewUser(user.id)">
        <v-list-tile-avatar color="indigo" class="headline font-weight-light white--text">
          <v-icon dark>person</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <!--------------------------------------------------------------------------------------------------- >
			|				    				             User Setting Link                                                    |
      <----------------------------------------------------------------------------------------------------->
      <v-list-tile @click="setting">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-sub-title>Setting</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider></v-divider>

      <!--------------------------------------------------------------------------------------------------- >
			|				    				             User Logout Link                                     	              |
      <----------------------------------------------------------------------------------------------------->
      <v-list-tile @click="logout">
        <v-list-tile-action>
          <v-icon color="red">power_settings_new</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-sub-title>LogOut</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>


<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->


<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),
  created() {
    this.$store
      .dispatch("user/get_login_user")
      .then(response => {}, error => {});
  },
  computed: {
    ...mapGetters({
      user: "user/getLoginUser"
    })
  },

  methods: {
    ...mapActions({}),
    viewUser(id) {
      this.$router.push({ path: `/users/${id}`, params: { id: id } });
    },
    setting() {
      this.$router.push({ path: "/setting" });
    },
    logout() {
      axios.post("logout").then(response => {
        window.location.replace("home");
      });
    }
  }
};
</script>

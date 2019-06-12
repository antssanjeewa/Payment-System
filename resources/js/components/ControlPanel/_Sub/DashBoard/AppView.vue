<!-- 
	___________________________________________________________________________________________________________
	
															            APP VIEW IN TOP RIGHT 
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |          This is the popup of app view dialog and icon    |
                        |            in Top Right in App bar                        |
                        |                                                           |
                        |___________________________________________________________|
	
-->

<template>
  <div class="text-xs-center">
    <v-menu
      origin="top center"
      transition="scale-transition"
      offset-y
      bottom
      max-width="300"
      min-width="300"
    >
      <!--=================================================================================================->
                                       Icon of App Dialog
      <--=================================================================================================-->
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>apps</v-icon>
        </v-btn>
      </template>

      <!--=================================================================================================->
                                       App List in the component
      <--=================================================================================================-->
      <v-list three-line>
        <v-list-tile>
          <v-list-tile-avatar class="px-4">
            <v-icon large @click="viewNotification('kk')">person</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-avatar class="px-4">
            <v-icon large>home</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-avatar class="px-4">
            <v-icon large>home</v-icon>
          </v-list-tile-avatar>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-avatar class="px-4">
            <v-icon large>home</v-icon>
          </v-list-tile-avatar>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-avatar class="px-4">
            <v-icon large>home</v-icon>
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>


<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->


<script>
export default {
  data: () => ({}),
  methods: {
    viewNotification(item) {
      console.log(item);
    }
  }
};
</script>

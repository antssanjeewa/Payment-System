<!-- 
	___________________________________________________________________________________________________________
	
                                    REMARK HISTORY COMPONENT
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

                         ___________________________________________________________
                        |                                                           |
                        |          This Component Use for the preview the           |
                        |            Recent Update of each component                |
                        |                                                           |
                        |     Show the List of Updates with,                        |
                        |                                   *  Remark               |
                        |                                   *  Updated User Name    |
                        |                                   *  Updated Date         |
                        |___________________________________________________________|
	
-->


<template>
  <v-layout row wrap>
    
    <!--===================================================================================================->
                                       Title of the Component
    <--===================================================================================================-->
    <v-flex xs12>
      <v-subheader class="title">Recent Updates</v-subheader>
      <v-divider></v-divider>
    </v-flex>

    <!--===================================================================================================->
                                       Show when Data Length is Zero (0)
    <--===================================================================================================-->
    <v-flex v-if="items.remarks.length == 0">
      <v-alert :value="true" type="warning">There has No Recent Updates</v-alert>
    </v-flex>

    <!--===================================================================================================->
                                       Show Remark Details
    <--===================================================================================================-->
    <v-flex v-else>
      <v-list two-line>
        <template v-for="(item, index) in items.remarks">
          <v-list-tile :key="item.created_at" avatar>
            <v-list-tile-avatar
              color="indigo"
              class="headline font-weight-light white--text"
            >{{ index+1 }}</v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.body }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-sub-title class="text--primary">{{ item.created_at }}</v-list-tile-sub-title>
              <v-list-tile-sub-title class="text--primary">{{ item.user_name }}</v-list-tile-sub-title>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider :key="index"></v-divider>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>


<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      // Get Edit item Details
      items: "dashboard/getEditItem"
    })
  }
};
</script>

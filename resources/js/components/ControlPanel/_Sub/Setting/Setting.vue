<!-- 
	___________________________________________________________________________________________________________
	
															        SETTING OF THE APPLICATION
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |      This is the Setting component of the application     |
                        |          This use for the change application color        |
                        |             theme and other setting for the user          |
                        |___________________________________________________________|
		
-->


<template>
  <div>
    <!--=============================================================================================->
                                       not set yet
    <--=============================================================================================-->
    <v-card :dark="theme.drawer.appTheme">
      <v-layout align-center justify-center>
        <v-flex xs10>
          <v-card>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <span>Scheme</span>
                  <v-switch v-model="theme.color.appTheme" primary label="Dark"></v-switch>
                </v-flex>
                <v-flex xs12 md6>
                  <span>Drawer</span>
                  <v-radio-group v-model="theme.drawer.type" column>
                    <v-radio
                      v-for="drawer in drawers"
                      :key="drawer"
                      :label="drawer"
                      :value="drawer.toLowerCase()"
                      primary
                    ></v-radio>
                  </v-radio-group>
                  <v-switch v-model="theme.drawer.clipped" label="Clipped" primary></v-switch>
                  <v-switch v-model="theme.drawer.floating" label="Floating" primary></v-switch>
                  <v-switch v-model="theme.drawer.mini" label="Mini" primary></v-switch>
                </v-flex>
                <v-flex xs12 md6>
                  <span>Footer</span>
                  <v-switch v-model="theme.footer.inset" label="Inset" primary></v-switch>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat>Cancel</v-btn>
              <v-btn flat color="primary">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>


<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->
  
  
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    dark: true,
    drawers: ["Default (no property)", "Permanent", "Temporary"]
  }),

  computed: {
    ...mapGetters({
      theme: "getTheme"
    })
  }
};
</script>
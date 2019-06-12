<!-- 
	___________________________________________________________________________________________________________
	
															        EXEL REPORT MAIN COMPONENT
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |      This is the main componrnt oh exel report componrnt  |
                        |               This can export exel report,                |
                        |                 DAILY , MONTHLY & YEARLY                  |
                        |___________________________________________________________|
		
-->
<template>
  <div v-if="showComponent">
    <v-tabs fixed-tabs>
      <v-tab @change="change(tab)" v-for="tab in tabs" :key="tab">{{ tab }}</v-tab>
      <v-tabs-items>
        <!--=================================================================================================->
                                       Tab item Daily
        <--=================================================================================================-->
        <v-tab-item>
          <daily-record :value="current_tab"></daily-record>
        </v-tab-item>

        <!--=================================================================================================->
                                       Tab item Monthly
        <--=================================================================================================-->
        <v-tab-item>
          <monthly-record :value="current_tab"></monthly-record>
        </v-tab-item>

        <!--=================================================================================================->
                                       Tab item Yearly
        <--=================================================================================================-->
        <v-tab-item>
          <yearly-record :value="current_tab"></yearly-record>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>


<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->


<script>
import daily from "./Daily/index";
import monthly from "./Monthly/index";
import yearly from "./Yearly/index";
import {mapGetters} from 'vuex'

export default {
  data: () => ({
    current_tab: "Daily",
    tabs: ["Daily", "Monthly", "Yearly"]
  }),
  components: {
    "daily-record": daily,
    "monthly-record": monthly,
    "yearly-record": yearly
  },
  computed: {
    ...mapGetters({
      loginUser: "user/getLoginUser"
    }),
    showComponent() {
      return this.loginUser.permission
        ? this.loginUser.permission.includes("view report")
        : false;
    }
  },
  methods: {
    change(val) {
      this.current_tab = val;
    }
  }
};
</script>

<!-- 
	___________________________________________________________________________________________________________
	
															      NAVIAGATION BAR IN LEFT SIDE
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |          This is the Left side Navigation List            |
                        |                                                           |
                        |___________________________________________________________|
		
-->

<template>
  <!--=====================================================================================================->
                                       Navigation List
  <--=====================================================================================================-->
  <v-navigation-drawer
    v-if="loginUser.permission"
    :value="drawer"
    :permanent="theme.drawer.type === 'permanent'"
    :temporary="theme.drawer.type === 'temporary'"
    :clipped="theme.drawer.clipped"
    :floating="theme.drawer.floating"
    :mini-variant="theme.drawer.mini"
    fixed
    overflow
    app
    :class="navcolor"
  >
    <v-list dense>
      <template v-for="item in items">
        <!------------------------------------------------------------------------------------------------- >
			  |				    				           Navigation Single Tab                                                |
        <--------------------------------------------------------------------------------------------------->
        <v-list-tile
          v-if="!item.children && loginUser.permission.includes(item.permission)"
          :key="item.text"
          :to="item.link"
        >
          <v-list-tile-action class="px-4">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!------------------------------------------------------------------------------------------------- >
			  |				    				           Navigation Group List                                                |
        <--------------------------------------------------------------------------------------------------->
        <v-list-group
          v-else-if="loginUser.permission.includes(item.permission)"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="(child, i) in item.children" :key="i" :to="child.link">
            <v-list-tile-action v-if="child.icon">
              <v-icon class="px-4">{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ child.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>


<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->


<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    items: [
      {
        icon: "dashboard",
        text: "Dashboard",
        link: "/",
        permission: "view dashboard"
      },
      {
        icon: "folder",
        text: "Donation record",
        link: "/donation_records",
        permission: "view"
      },
      {
        icon: "person",
        text: "Doner details",
        link: "/users",
        permission: "view"
      },
      {
        icon: "folder",
        text: "Subscriptions",
        link: "/subscriptions",
        permission: "view"
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Admin Board",
        model: false,
        permission: "view adminboard",
        children: [
          {
            icon: "how_to_vote",
            text: "Donation program",
            link: "/donation_programs"
          },
          {
            icon: "location_on",
            text: "Donation Place Name",
            link: "/donation_place_names"
          },

          { icon: "account_balance", text: "Banks Details", link: "/banks" },
          {
            icon: "credit_card",
            text: "Donation Methods",
            link: "/donation_methods"
          },
          { icon: "room", text: "Donation Place", link: "/donation_places" },
          { icon: "phone", text: "Inform Type", link: "/inform_types" },
          { icon: "list_alt", text: "State", link: "/states" },
          { icon: "contact_support", text: "How To", link: "/how_to" },
          {
            icon: "settings_input_antenna",
            text: "SMN Broadcasting",
            link: "/smn_broadcastings"
          },
          {
            icon: "settings_input_antenna",
            text: "Standing Order",
            link: "/standing_orders"
          },
          { icon: "my_location", text: "District", link: "/districts" },
          { icon: "airplanemode_active", text: "Country", link: "/countries" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Bill Inventory",
        model: false,
        permission: "view billinventory",
        children: [
          {
            icon: "account_balance",
            text: "Bill Inventory",
            link: "/bill_inventories"
          },
          {
            icon: "account_balance",
            text: "Monastery",
            link: "/monasteries"
          }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Management",
        permission: "view management",
        model: false,
        children: [
          {
            icon: "group",
            text: "User Management",
            link: "/user_management"
          },
          { icon: "keyboard", text: "Role Management", link: "/role" },
          {
            icon: "keyboard",
            text: "Permission Management",
            link: "/permission"
          }
        ]
      },

      {
        icon: "settings",
        text: "Settings",
        link: "/setting",
        permission: "view"
      },
      {
        icon: "save_alt",
        text: "Exel Report",
        link: "/export",
        permission: "view"
      }
      // { icon: 'help', text: 'Help' },
    ]
  }),
  computed: {
    ...mapGetters({
      drawer: "dashboard/getNavbar",
      loginUser: "user/getLoginUser",
      theme: "getTheme"
    }),
    navcolor() {
      return this.theme.color.appTheme ? "grey" : "grey lighten-3";
    }
  },
  methods: {
    onclick($item) {
      console.log($item);
    }
  }
};
</script>
<style>
.v-list__tile--active {
  background-color: #00000042;
}
</style>

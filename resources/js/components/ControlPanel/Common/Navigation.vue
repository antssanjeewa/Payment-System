<template>
        <v-navigation-drawer
          :value="drawer"
          :clipped="$vuetify.breakpoint.lgAndUp"
          fixed
          app
        >
          <v-list dense>
            <template v-for="item in items">
              <v-layout
                v-if="item.heading"
                :key="item.heading"
                row
                align-center
              >
                <v-flex xs6>
                  <v-subheader v-if="item.heading">
                    {{ item.heading }}
                  </v-subheader>
                </v-flex>
                <v-flex xs6 class="text-xs-center">
                  <a href="#!" class="body-2 black--text">EDIT</a>
                </v-flex>
              </v-layout>
    
            <!-- tabs with children -->
              <v-list-group
                v-else-if="item.children"
                :key="item.text"
                v-model="item.model"
                :prepend-icon="item.model ? item.icon : item['icon-alt']"
                append-icon=""
              >
                <template v-slot:activator>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.text }}
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                </template>
                <v-list-tile
                  v-for="(child, i) in item.children"
                  :key="i"
                  :to="child.link"
                >
                  <v-list-tile-action v-if="child.icon">
                    <v-icon>{{ child.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ child.text }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
    
            <!-- Single tabs -->
              <v-list-tile v-else :key="item.text" :to="item.link">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-navigation-drawer>
    
    </template>
    
    <script>
    import { mapGetters } from 'vuex'
    export default {
        data: () => ({
            drawer:true,
            items: [
            { icon: 'dashboard', text: 'Dashboard', link:'/'},
            { icon: 'folder', text: 'Attendent Mark', link:'/attend/add' },
            { icon: 'person', text: 'Add Marks', link:'/childs' },   
            { icon: 'keyboard_arrow_up',
              'icon-alt': 'keyboard_arrow_down',
              text: 'Childrens',
              model: true,
              children: [
                { icon: 'how_to_vote', text: 'Child List', link:'/childs' },   
                { icon: 'account_balance', text: 'Child Register', link:'/childs/add'},
                
              ]
            },
    
            { icon: 'keyboard_arrow_up',
              'icon-alt': 'keyboard_arrow_down',
              text: 'Teachers',
              model: false,
              children: [
                { icon: 'settings_input_antenna', text: 'Teacher List', link:'/smn_broadcastings'},
                { icon: 'settings_input_antenna', text: 'Teacher Add', link:'/standing_orders'},
              ]
            },
            { icon: 'keyboard_arrow_up',
              'icon-alt': 'keyboard_arrow_down',
              text: 'Other',
              model: false,
              children: [
                { icon: 'my_location', text: 'Add Subject', link:'/districts'},
                { icon: 'airplanemode_active', text: 'Add Class', link:'/countries'},
              ]
            },
    
            { icon: 'settings', text: 'Settings', link:'/setting'},
            { icon: 'chat_bubble', text: 'Send feedback' },
            { icon: 'help', text: 'Help' },
            { icon: 'phonelink', text: 'App downloads' },
            { icon: 'keyboard', text: 'Go to the old version' }
          ],
        }),
        computed : {
            // ...mapGetters({
            //     drawer : 'dashboard/getNavbar'
            // })
        },
        methods: {
            onclick($item){
                console.log($item);
            }
        }
    }
    </script>
    
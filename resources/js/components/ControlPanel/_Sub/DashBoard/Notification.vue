<!-- 
	___________________________________________________________________________________________________________
	
														      	NOTIFICATION BAR IN TOP RIGHT
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |          This is the notification popup dialog and icon   |
                        |            in the top right in app bar                    |
                        |                                                           |
                        |___________________________________________________________|
		
-->


<template>
  <v-menu
    bottom
    offset-y
    origin="top center"
    transition="scale-transition"
    right
    min-width="300"
    max-width="400"
  >
    <!--===================================================================================================->
                                       Icon of the Notification Action Dialog
    <--===================================================================================================-->
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-badge overlap color="red">
          <template v-slot:badge>
            <span>4</span>
          </template>
          <v-icon>notifications</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <!--===================================================================================================->
                                       Notification List
    <--===================================================================================================-->
    <v-list three-line dense>
      <template v-for="(item, i) in items">
        <v-list-tile :key="item.text" @click="viewNotification(item)">
          <v-list-tile-avatar color="indigo" class="caption white--text" size="20">{{ i+1 }}</v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-sub-title>{{ item.text}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>15 min</v-list-tile-action-text>
            <v-icon color="yellow darken-2">star_border</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="i"></v-divider>
      </template>
    </v-list>
  </v-menu>
</template>


<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->


<script>
export default {
  data: () => ({
    items: [
      {
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt ex nihil ratione quos."
      },
      {
        text:
          "Vitae aspernatur, eaque minima vero aut asperiores provident repellendus mollitia incidunt quo,"
      },
      { text: "neque fugav eritatis  dolorum!" },
      { text: "Click Me4" }
    ]
  }),
  methods: {
    viewNotification(item) {
      console.log(item);
    }
  }
};
</script>

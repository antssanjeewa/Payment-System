<template>
    <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="primary"
        dark
        app
        fixed
    > 
        <!-- title top left -->
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="toggleNavbar"></v-toolbar-side-icon>
            <span class="hidden-sm-and-down">Shraddha Media Network</span>
        </v-toolbar-title>

        <!-- search field top middle -->
        <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Search"
            class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <!-- app icon top-right -->
        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>
        <!-- notification icon top-right -->
        <v-btn icon>
            <v-icon>notifications</v-icon>
        </v-btn>
        <!-- top right icon -->
        <v-btn icon>
            <v-icon>person</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        
        
    }),


    
}
</script>

      
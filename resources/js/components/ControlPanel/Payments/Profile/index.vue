<template>
    <v-flex pa-3>
        <v-toolbar flat>
            <v-toolbar-title>Childrens</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Link One</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-flex pa-3>
            <v-toolbar :color="theme.color.tableHeader">
                <v-toolbar-title><h1> {{ user.title }} {{ user.name }} </h1> </v-toolbar-title>
            </v-toolbar>
            <v-card>
                <v-layout>
                    <v-flex xs6>
                    <v-avatar
                        slot="offset"
                        class="mx-auto d-block"
                        size="130"
                    >
                        <img
                        src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                        >
                    </v-avatar>
                </v-flex>
                <v-flex xs6>
                    <p> NIC : {{ user.nic}} </p>
                    <p> Mobile : {{ user.mobile01}} </p>
                    <p> Email : {{ user.email}} </p>
                    <p> Landline : {{ user.landline}} </p>
                    <p> Address :{{ address.address01}},  {{ address.address02}},  {{ address.city}}, {{ address.district}} </p>
                </v-flex>
            </v-layout>
            </v-card>
            </v-flex>

    </v-flex>
</template>
<script>
    
    export default{
        data : () => ({

        }),
        components : {
            
        }
    }
</script>
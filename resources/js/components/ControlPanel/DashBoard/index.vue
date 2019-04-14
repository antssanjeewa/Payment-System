<template>
    <v-flex pa-3>
        <v-toolbar flat>
            <v-toolbar-title>Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Link One</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <top-panel></top-panel>
    </v-flex>
</template>
<script>
    import topPanel from './TopPanel.vue'
    export default{
        data : () => ({

        }),
        components : {
            'top-panel' : topPanel
        }
    }
</script>
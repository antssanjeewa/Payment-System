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
  <v-card class="ma-3">
    <v-card-title>
      <h1>Daily Programs</h1>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
          <v-flex xs12>
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="data"
              select-all
              hide-actions
              item-key="program"
              class="elevation-1"
            >
              <!-- <template v-slot:headers="props">
                <tr>
                  <th>
                    
                  </th>
                  <th
                    v-for="header in props.headers"
                    :key="header.text"
                    class="text-xs-left"
                  >{{ header.text }}</th>
                </tr>
              </template> -->
              <template v-slot:items="props">
                <tr :active="props.selected" @click="props.selected = !props.selected">
                  <td>
                    <v-checkbox :input-value="props.selected" color="blue" hide-details></v-checkbox>
                  </td>
                  <td>{{ props.item.program }}</td>
                  <td>{{ props.item.count }}</td>
                  <td>{{ props.item.min }} - {{ props.item.max }}</td>
                  <td>{{ props.item.sum }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-flex>

      </v-form>
    </v-card-text>

  </v-card>
</template>

<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    valid: false,
    headers: [
      { text: "PROGRAM", value: "program", sortable: false},
      { text: "COUNT", value: "count", sortable: false },
      { text: "BILL RANGE", value: "min" , sortable: false},
      { text: "AMOUNT", value: "sum", sortable: false }
    ],
    selected: []
  }),
  props:[
    'data'
  ],
  methods: {

    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.data.slice();
    }
  }
};
</script>

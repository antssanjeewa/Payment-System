<!-- 
	___________________________________________________________________________________________________________
	
															        BILL BOOK TABLE IN MONTHLY REPORT
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |   This use to get monthly report categary with bill book  |
                        |___________________________________________________________|
  @Table Columns
              book id           :   integer
              count 						: 	integer		
              bill range 				: 	integer		
              amount 						: 	integer
-->

<template>
  <v-card class="ma-3">
    <!--===================================================================================================->
                                       Title of the Table
    <--===================================================================================================-->
    <v-card-title>
      <h1>Monthly Bill Book</h1>
      <v-spacer></v-spacer>

      <!--=================================================================================================->
                                       Export Button
      <--=================================================================================================-->
      <v-flex xs1 mr-5>
        <v-btn>
          <export-excel
            :data="selected"
            :dataFields="json_fields"
            name="daily.xls"
            title="name"
            footer="footer"
          >
            Export Exel
            <v-icon>save_alt</v-icon>
          </export-excel>
        </v-btn>
      </v-flex>
    </v-card-title>

    <!--===================================================================================================->
                                       Data Table
    <--===================================================================================================-->
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-flex xs12>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="data"
            select-all
            item-key="id"
            hide-actions
            class="elevation-1"
          >
            <template v-slot:items="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                  <v-checkbox :input-value="props.selected" color="blue" hide-details></v-checkbox>
                </td>
                <td>{{ props.item.book }}</td>
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
    selected: [],
    headers: [
      { text: "BOOK ID", value: "book", sortable: false },
      { text: "COUNT", value: "count", sortable: false },
      { text: "BILL RANGE", value: "min", sortable: false },
      { text: "AMOUNT", value: "sum", sortable: false }
    ],
    json_fields: {
      "Book ID": "book",
      Count: "count",
      "Bill Range": {
        callback: value => {
          return `${value.min} - ${value.max}`;
        }
      },
      Total: "sum"
    }
  }),
  watch: {
    data(val) {
      this.selected = val;
    }
  },
  props: ["data"],
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.data.slice();
    }
  }
};
</script>

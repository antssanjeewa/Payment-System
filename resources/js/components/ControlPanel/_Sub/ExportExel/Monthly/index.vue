<template>
  <v-card class="ma-3">
    <v-card-title>
      <h1>Monthly Record Export</h1>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-flex xs12>
          <v-flex xs12 sm4 md4>
            <v-menu
              v-model="d_date"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="report.date"
                  label="Donated Date"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="report.date" @input="d_date = false" type="month"></v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12>
          <monthly-book :data="records.bill_book"></monthly-book>
          </v-flex>

          <v-flex xs12>
          <monthly-program :data="records.program"></monthly-program>
          </v-flex>

        </v-flex>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat>Cancel</v-btn>
      <v-btn flat color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<!--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-->

<script>
import { mapActions, mapGetters } from "vuex";
import book from './MonthlyBillBooks'
import program from './MonthlyProgram'

export default {
  data: () => ({
    valid: false,
    d_date: false,
    report: {
      date: new Date().toISOString().substr(0, 7)
    }
   
  }),
  components : {
    'monthly-book' : book,
    'monthly-program' : program
  },
  props:['value'],
  watch: {
    "report.date"(val) {
      this.getRecords(val)
    },
    value(val){
      if(val == 'Monthly')
        this.getRecords(this.report.date)
    }
  },
  computed:{
      ...mapGetters({
          records : 'exel_export/getMonthlyRecord'
      })
  },
  methods: {
    ...mapActions({
        getRecords : 'exel_export/get_monthly_books_records'
    })
  }
};
</script>

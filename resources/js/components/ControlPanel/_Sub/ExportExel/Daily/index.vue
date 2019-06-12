<!-- 
	___________________________________________________________________________________________________________
	
															        DAILY EXEL REPORT COMPONENT
	___________________________________________________________________________________________________________
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                         ___________________________________________________________
                        |                                                           |
                        |      This is the main componrnt of Daily exel report      |
                        |             This can export Daily exel report,            |
                        |                Bill book vice & program vice              |
                        |___________________________________________________________|
		
-->
<template>
  <v-card class="ma-3">
    <v-card-title>
      <h1>Daily Record Export</h1>
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
              <v-date-picker v-model="report.date" @input="d_date = false"></v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12>
          <daily-book :data="records.bill_book"></daily-book>
          </v-flex>

          <v-flex xs12>
          <daily-program :data="records.program"></daily-program>
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
import book from './DailyBillBooks'
import program from './DailyProgram'

export default {
  data: () => ({
    valid: false,
    d_date: false,
    report: {
      date: new Date().toISOString().substr(0, 10)
    }
   
  }),
  components : {
    'daily-book' : book,
    'daily-program' : program
  },
  props:['value'],
  created() {
    this.getRecords(this.report.date)
  },
  watch:{
    "report.date"(val) {
      this.getRecords(val)
    }
  },
  computed:{
      ...mapGetters({
          records : 'exel_export/getDailyRecord'
      })
  },
  methods: {
    ...mapActions({
        getRecords : 'exel_export/get_daily_books_records'
    })
  }
};
</script>

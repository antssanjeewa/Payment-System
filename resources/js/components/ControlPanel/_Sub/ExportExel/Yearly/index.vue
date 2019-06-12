<template>
  <v-card class="ma-3">
    <v-card-title>
      <h1>Yearly Record Export</h1>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-flex xs12>
          <v-flex xs12 sm4 md4>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="d_date"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="report.date"
                label="Donated Date"
                prepend-icon="event"
                mask="####"
                readonly
              ></v-text-field>
              <v-date-picker
                ref="picker"
                v-model="report.date"
                @input="d_date = false"
                type="month"
                :max="new Date().toISOString().substr(0, 4)+1"
                min="2000"
                reactive
                no-title
              ></v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12>
            <yearly-book :data="records.bill_book"></yearly-book>
          </v-flex>

          <v-flex xs12>
            <yearly-program :data="records.program"></yearly-program>
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
import book from "./YearlyBillBooks";
import program from "./YearlyProgram";

export default {
  data: () => ({
    valid: false,
    d_date: false,
    report: {
      date: new Date().toISOString().substr(0, 4)
    }
  }),
  components: {
    "yearly-book": book,
    "yearly-program": program
  },
  props: ["value"],
  watch: {
    "report.date"(val) {
      this.getRecords(val);
    },
    d_date(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
    value(val) {
      if(val == 'Yearly')
        this.getRecords(this.report.date);
    }
  },
  computed: {
    ...mapGetters({
      records: "exel_export/getYearlyRecord"
    })
  },
  methods: {
    ...mapActions({
      getRecords: "exel_export/get_yearly_books_records"
    })
  }
};
</script>

import state from "./state";

// get record array
export const getDailyRecord = (state) => {
    return state.daily_record
}

// get record array
export const getMonthlyRecord = (state) => {
    return state.monthly_record
}

// get record array
export const getYearlyRecord = (state) => {
    return state.yearly_record
}
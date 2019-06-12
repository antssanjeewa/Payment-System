// get bill book in database
export const get_daily_books_records = ({commit},date) => {
    return new Promise((resolve, reject) => {
        axios.get('api/donation_records/daily',{params: {date: date}
        }).then(response => {
            commit('set_daily_book_record', response.data)
            resolve(response.data);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            reject(error);
        })
    })
}

export const get_monthly_books_records = ({commit},date) => {
    return new Promise((resolve, reject) => {
        axios.get('api/donation_records/monthly',{params: {date: date}
        }).then(response => {
            commit('set_monthly_book_record', response.data)
            resolve(response.data);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            reject(error);
        })
    })
}

export const get_yearly_books_records = ({commit},date) => {
    return new Promise((resolve, reject) => {
        axios.get('api/donation_records/yearly',{params: {date: date}
        }).then(response => {
            commit('set_Yearly_book_record', response.data)
            resolve(response.data);  // Let the calling function know that http is done. You may send some data back
        }, error => {
            reject(error);
        })
    })
}

const initialState = {
    series: [],
    isLoading: false,
    isError: false,
    number: 0,
    search: ''
}

const series = (state = initialState, action) => {
    switch(action.type){
        // loading
        case "FETCH_SERIES_PENDING":
            return {
                ...state, // collect all previous state
                isError: false,
                isLoading: true,
            }
            
        // berhasil
        case "FETCH_SERIES_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                // series: action.payload.data
                series: [...state.series, ...action.payload.data]
            }

        // gagal
        case "FETCH_SERIES_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            return state
    }
}

export default series
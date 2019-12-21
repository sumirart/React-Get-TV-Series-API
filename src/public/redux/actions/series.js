import axios from 'axios'

export const fetchSeries = search => ({
    type: "FETCH_SERIES",
    payload: axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
})
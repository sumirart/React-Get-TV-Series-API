import React, { Component } from 'react'
import axios from 'axios'

import SeriesList from './SeriesList'

export default class Series extends Component {
    constructor(){
        super()

        this.state = {
            series: [],
            seriesName: '',
            isLoading: false
        }
    }

    onSearch = e => {
        // console.log(e.target.value)
        this.setState({ seriesName: e.target.value, isLoading: true })

        // call API search for series name
        axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(res => {
                // console.log(res.data)
                this.setState({ series: res.data, isLoading: false })
                console.log(this.state.series)
            })
            .catch(err => {
                console.log(err)
                this.setState({ isLoading: false })
            })
    }

    render() {
        // this.state.seriesName
        const { series, seriesName, isLoading } = this.state

        return (
            <>
                <p>Here you can find all the TV Series you want!</p>
                <div>
                    <input value={seriesName} type="text" onChange={this.onSearch} />
                </div>

                <div>
                    <ul>
                        { series.length === 0 && <p>Please enter series name</p> } 
                        { isLoading && <p>Loading...</p> }
                        { !isLoading && <SeriesList list={this.state.series} /> }
                    </ul>
                </div>
            </>
        )
    }
}

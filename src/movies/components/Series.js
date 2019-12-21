import React, { Component } from 'react'
import axios from 'axios'
import { ButtonToolbar, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

// import components
import SeriesList from './SeriesList'

// import actions
import { addNumber, decreaseNumber } from '../../public/redux/actions/numbers'
import { fetchSeries } from '../../public/redux/actions/series'

class Series extends Component {
    constructor(){
        super()

        this.state = {
            series: [],
            seriesName: '',
            isLoading: false,
            number: 0
        }
    }

    onSearch = e => {
        // console.log(e.target.value)
        this.setState({ seriesName: e.target.value, isLoading: true })

        // call API search for series name
        axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(res => {
                this.setState({ series: res.data, isLoading: false })
                // console.log(this.state.series)
            })
            .catch(err => {
                console.log(err)
                this.setState({ isLoading: false })
            })
    }

    onChangeNumber = e => {
        const number = parseInt(e.target.value)
        this.setState({ number })
    }

    addNumber = _ => {
        this.props.add(this.state.number)
    }

    decreaseNumber = _ => {
        this.props.decrease(this.state.number)
    }

    fetchSeries = () => {
        const keyword = 'flash'
        this.props.fetch(keyword)
    }

    render() {
        const { series, seriesName, isLoading, number } = this.state

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

                <h3>Try Redux</h3>
                <p>Current number: {this.props.numbers}</p>
                <input value={number} type="number" onChange={this.onChangeNumber} />
                <ButtonToolbar>
                    <Button variant="primary" onClick={this.addNumber}>Tambah</Button>
                    <Button variant="secondary" onClick={this.decreaseNumber}>Kurang</Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button variant="primary" onClick={this.fetchSeries}>Fetch The Flash Series</Button>
                </ButtonToolbar>
                { this.props.series.isLoading && <p>Loading...</p> }
                { !this.props.series.isLoading && <SeriesList list={this.props.series.series} />}
            </>
        )
    }
}

const mapStateToProps = state => ({
    numbers: state.numbers,
    series: state.series
})

const mapDispatchToProps = dispatch => ({
    add: number => dispatch(addNumber(number)),
    decrease: number => dispatch(decreaseNumber(number)),
    fetch: keyword => dispatch(fetchSeries(keyword))
})


export default connect(mapStateToProps, mapDispatchToProps)(Series)
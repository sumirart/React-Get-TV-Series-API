import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import component
import Series from './components/Series'
import SingleSeries from './components/SingleSeries'

function Main() {
    return(
        <Switch>
            <Route exact path='/' component={Series} />
            <Route path="/series/:id" component={SingleSeries} />
        </Switch>
    )
}

export default Main
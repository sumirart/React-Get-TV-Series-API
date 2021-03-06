import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// import store
import store from './public/redux/store'

// import component
import Header from './movies/Header'
import Main from './movies/Main'

function App() {
  return (
    <>
    <Header title="Movie App by Tama" />
    <Main />
    </>
  )
}

function Root(){
  return(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}


export default Root;

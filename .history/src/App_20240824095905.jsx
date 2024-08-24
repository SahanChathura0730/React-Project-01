import react, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <p>hi</p>
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
    </div>
  )
}

export default App

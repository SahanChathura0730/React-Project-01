import react, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact/>
      </Switch>
    </div>
  )
}

export default App

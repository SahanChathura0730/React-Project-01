import React, { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route pathe="/" exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App

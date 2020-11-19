import React from 'react'
import HomePage from './Homepage'
import Form from '../src/Form'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>

      <Route path='/163158403' component={Form}/>
      <Route path='/' component={HomePage} exact/>

      </Router>
        
        
    </div>
  )
}

export default App

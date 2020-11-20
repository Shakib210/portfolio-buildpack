import React from 'react'
import HomePage from './Homepage'
import Form from '../src/Form'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  componentDidMount(){
    document.title = "Nazmus shakib"
  }
  render(){
    return (
      <div>
        <Router>
        <Route path='/163158403' component={Form}/>
        <Route path='/' component={HomePage} exact/>
        </Router>        
      </div>
    )
  }
  
}

export default App

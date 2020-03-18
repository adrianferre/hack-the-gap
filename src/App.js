import React from 'react'
import Layout from './Layout'
import Users from '../src/Layout/Pages/Admin/Users/index'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Layout />
      <Users/>
    </Router>
  )

}


export default App

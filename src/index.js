import React from 'react'
import ReactDOM from 'react-dom'
import { FormEditor, FormRenderer } from './formeo'

import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>Formeo in React App</h1>
      <FormEditor />
      <FormRenderer />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

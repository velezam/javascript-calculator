import { useState } from 'react'
import './App.scss'
import MainDisplay from './components/MainDisplay'
import ControlsContainer from './components/ControlsContainer'

function App() {

  return (
    <>
      <div className="calculator-container">
        <MainDisplay />
        <ControlsContainer />
      </div>
    </>
  )
}

export default App

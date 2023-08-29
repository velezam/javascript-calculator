import { useState } from 'react'
import './App.scss'
import Display from './components/Display'
import Controls from './components/Controls'


function App() {
  const [operand, setOperand] = useState<string>("0")
  const [equation, setEquation] = useState<string>("")

  return (
    <>
      <div className="calculator-container">
        <Display operand={operand} equation={equation}/>
        <Controls setOperand={setOperand} operand={operand} equation={equation} setEquation={setEquation}/>
      </div>
    </>
  )
}

export default App

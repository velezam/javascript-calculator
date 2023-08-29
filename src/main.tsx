import App from './App.tsx'
import './index.css'

//Swap import below to switch to React 18
/* import ReactDOM from 'react-dom/client'
import React from 'react'
*/
import ReactDOM from 'react-dom'


//Swap Render method below to switch to REACT 18

/*
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import ServiceProvider from './Components/ServiceProvider'

const Global=createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,body{
    background-color: #220045;
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    color: white;
    font-family: monospace;
  }

`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServiceProvider>
      <Global></Global>
      <App />
    </ServiceProvider>
  </React.StrictMode>,
)


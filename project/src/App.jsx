import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <button onclick={buyCars()} id='buy' data-item-id='audi'>Comprar</button>
    </>
  )
}

document.getElementById='buy';

function buyCars(car) {
  alert(car ,' check')
}                                          

export default App
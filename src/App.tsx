import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { BackgroundColorProvider } from './context/context'
import Hero from './components/hero'

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <BackgroundColorProvider>
        <Header />
        <Hero />
      </BackgroundColorProvider>
    </div>
  )
}

export default App

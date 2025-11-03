import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home-page/home-page'
import ImageContextProvider from './contexts/image-context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImageContextProvider><HomePage/></ImageContextProvider>
    </>
  )
}

export default App

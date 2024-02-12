import { useState } from 'react'
import Cards from './Cards'
import './App.css'
import Heading from './Heading'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heading/>
    <Cards/>
    </>
  )
}

export default App

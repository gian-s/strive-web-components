import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <div className='card-container'>
      <Card/>
      </div>

    </>
  )
}

export default App

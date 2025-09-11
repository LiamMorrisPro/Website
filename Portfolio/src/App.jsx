import { useState } from 'react'
import './App.css'
import DesktopGrid from './components/DesktopGrid.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (

      <>
        <div>
          <DesktopGrid/>
        </div>
      </>

    
      

  )
}

export default App

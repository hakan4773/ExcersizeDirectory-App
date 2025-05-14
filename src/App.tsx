import { useEffect } from 'react'
import './index.css'
import { fetchData } from './services/api'
function App() {
useEffect(()=>{
fetchData();
},[])
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-600">Tailwind Test</h1>
      <p className="text-red-500 ">This is a test of Tailwind CSS with Vite and React.</p>
    </div>
  
  )
}

export default App

import './index.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import React from 'react';

function App() {
  const [searchTerm,setSearchTerm] = React.useState<string>("");
  return (
    <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm}> 
      <Home searchTerm={searchTerm}/>
    </Layout>  
  )
}

export default App

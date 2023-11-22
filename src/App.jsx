
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Details from './pages/Details'
import { Routes, Route } from 'react-router-dom' 


function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
  )
}

export default App

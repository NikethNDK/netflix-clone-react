
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About/About'
import Home from './Home'

function App() {
 

  return (
    <Router>
    <>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-netflix" element={<About />} />
        </Routes>
    </>
    </Router>
  )
}

export default App

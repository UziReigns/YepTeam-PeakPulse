import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import AboutPage from "./Pages/AboutPage";

function App() {
    return (
      <Router>
        <Navbar />
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/About' element={<AboutPage/>}/>
          </Routes>
      </Router>

          

  )
}

export default App

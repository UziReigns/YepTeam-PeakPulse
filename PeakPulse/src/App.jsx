import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
    return (
      <Router>
        <Navbar />
          <Routes>
              <Route path='/' element={<HomePage/>}/>
          </Routes>
      </Router>

          

  )
}

export default App

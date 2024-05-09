import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
    return (
      <Router>
        <Navbar />
          <Routes>
              <Route path='/' componenet=""/>
          </Routes>
      </Router>
         
          

  )
}

export default App

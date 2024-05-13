import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import ContactPage from "./Pages/ContactPage";

function App() {
    return (
      <Router>
        <Navbar />
          <Routes>
              <Route path='/' element={<HomePage/>}/>

              <Route path="/Contact" element={<ContactPage/>}/>
          </Routes>
      </Router>

          

  )
}

export default App

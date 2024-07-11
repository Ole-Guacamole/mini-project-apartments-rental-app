
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


function App() {


  return (
    <div className="App">
      <Navbar />

      <Sidebar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>


  )
}

export default App

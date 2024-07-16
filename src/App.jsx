
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";


import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ApartmentDetailsPage from "./components/ApartmentDetailsPage";


function App() {


  return (
    <div className="app">
      <Navbar />
      <div className="main">
      <Sidebar />
    
      <div className="content">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:apartmentId" element={<ApartmentDetailsPage />}/>
      </Routes>
      </div>
      </div>

      <Footer />
    </div>


  )
}

export default App

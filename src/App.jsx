import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import "./App.css";
import ErrorPage from "./pages/ErrorPage"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ApartmentDetailsPage from "./pages/ApartmentDetailsPage";
import data from "./assets/data.json";
import { useState } from "react";
import ApartmentDetailsEditPage from "./pages/ApartmentDetailsEditPage";

function App() {
  const [apartments, setApartments] = useState(data);

  

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Home apartments={apartments} setApartments={setApartments} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/apartment/:apartmentId"
              element={
                <ApartmentDetailsPage
                  apartments={apartments}
                  setApartments={setApartments}
                />
              }
            />
            <Route
              path="/apartment/:apartmentId/edit"
              element={
                <ApartmentDetailsEditPage
                  apartments={apartments}
                  setApartments={setApartments}
                />
              }
            />
            <Route
              path="*"
              element={ 
              <ErrorPage 
              /> 
              }
            /> 
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}


export default App;

// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/mainSection";
import Services from "./components/Services/services";
import { Portfolio } from "./components/portFolio/portFolio";
import GetInTouch from "./components/getInTouch/getinTouch";
import TestimonialSlider from "./components/testimonialSlider/testimonialSlider";
import "./App.css";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

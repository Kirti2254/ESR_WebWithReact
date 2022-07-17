// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/mainSection";
import Services from "./components/Services/services";
import { Portfolio } from "./components/portFolio/portFolio";
import GetInTouch from "./components/getInTouch/getinTouch";
import TestimonialSlider from "./components/testimonialSlider/testimonialSlider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Services />
      <Portfolio />
      <TestimonialSlider />
      <GetInTouch />
    </div>
  );
}

export default App;

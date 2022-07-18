// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/mainSection";
import Services from "./components/Services/services";
import { Portfolio } from "./components/portFolio/portFolio";
import GetInTouch from "./components/getInTouch/getinTouch";
import TestimonialSlider from "./components/testimonialSlider/testimonialSlider";
import "./App.css";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Services />
      <Portfolio />
      <TestimonialSlider />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;

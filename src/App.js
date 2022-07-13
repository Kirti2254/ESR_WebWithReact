// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import Services from "./components/Services/Services";
import { Portfolio } from "./components/Portfolio/Portfolio";
import GetInTouch from "./components/getInTouch";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Services />
      <Portfolio />
      <Testimonial />
      <GetInTouch />
    </div>
  );
}

export default App;

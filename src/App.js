// import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import Services from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;

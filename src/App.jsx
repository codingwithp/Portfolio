import logo from './logo1.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <About/>
      <Contact/>
      {/* <Footer/> */}
     
    </div>
  );
}

export default App;
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/Menu/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Online from './Components/Online';
import Offline from './Components/Offline';
import Contact from './Components/Contact';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop/online" element={<Online />} />
      <Route path="shop/offline" element={<Offline />} />
      <Route path="contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

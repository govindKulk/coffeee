import './App.css';

import { Routes, Route } from "react-router-dom";

import Header from './common/components/header';
import Navbar from './common/components/navbar';
import Contact from './common/components/contact';
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from './pages/Gallery';

function App() {
  return (
      <div className='wrapper'>
      <Header />
      <Navbar />
      <Routes>
      {/* <div className="wrapper">
        <Header />
        <Navbar />
        <Contact />
      </div> */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
    <Contact />
    </div>

    




  );
}

export default App;

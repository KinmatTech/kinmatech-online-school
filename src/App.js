import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./pages/application/Application";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/application" element={<Application/>} />
      </Routes>  
      <Footer/>    
    </BrowserRouter>
  );
}

export default App;

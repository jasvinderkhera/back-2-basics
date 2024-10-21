import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import HTML from "./components/HTML/HTML"
import CSS from "./components/CSS/CSS"
import Javascript from "./components/Javascript/Javascript"
import JQuery from "./components/JQuery/JQuery"
import Bootstrap from "./components/Bootstrap/Bootstrap"
import Navbar from "./components/common/Navbar/Navbar";
import ReactJS from "./components/React/React";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/html" element={<HTML/>} /> 
      <Route path="/css" element={<CSS/>} /> 
      <Route path="/javascript" element={<Javascript/>} /> 
      <Route path="/react" element={<ReactJS/>} /> 
      <Route path="/bootstrap" element={<Bootstrap/>} /> 
      <Route path="/jquery" element={<JQuery/>} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {  Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
     <>
   
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/edit/id" element={<Edit/>}/>
       
       
      </Routes>
   
     </>
    </div>
  );
}

export default App;

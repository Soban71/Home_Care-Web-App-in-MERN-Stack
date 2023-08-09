// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Appointments from "./components/Appointments";
import Home from "./components/home";
import Welcome from "./components/Welcome";
import AddAppointment from "./components/AddAppointment";
import Doctorlist from "./components/Doctorlist";
import Addpatientsurety from "./components/Addpatientsurety";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Welcome/>} />
<Route path="/Home" element={< Home/>} />
<Route path='/Addappointment' element={<AddAppointment />}/>
<Route path="/Doclist" element={<Doctorlist />}   />
<Route path="/surety" element={<Addpatientsurety />}   />
<Route path="/viewAppointment" element={<Appointments />} />
    </Routes>
    
    </BrowserRouter>
    
    </>
      
      

        );
}

export default App;

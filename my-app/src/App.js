// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointments from "./components/Appointments";
import Home from "./components/home";
import Welcome from "./components/Welcome";
import AddAppointment from "./components/AddAppointment";
import Addpatientsurety from "./components/Addpatientsurety";
import CheckedComponent from "./components/checkcomponent";
import AddDoctor from "./components/AddDoctor";
import ViewDoctor from "./components/viewDoctor";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Welcome/>} />
<Route path="/Home" element={< Home/>} />
<Route path='/Addappointment' element={<AddAppointment />}/>
<Route path="/surety" element={<Addpatientsurety />}   />
<Route path="/viewAppointment" element={<Appointments />} />
<Route path="/checkedAppointment" element={<CheckedComponent />} />
<Route path="/AddDoctor" element={<AddDoctor />} />
<Route path="/ViewDoctor" element={<ViewDoctor/>} />

    </Routes>
    
    </BrowserRouter>
    
    </>
      
      

        );
}

export default App;

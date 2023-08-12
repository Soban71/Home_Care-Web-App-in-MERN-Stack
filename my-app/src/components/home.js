import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./Home.css";
import homeicon from '../images/icons8-home-48.png'
import Appointmentsicon from "../images/icons8-appointments-64.png";
import doctoricon from '../images/icons8-doctor-48.png'
import ViewAppointment from '../images/viewAppointment.png'
import checklist from '../images/checklist.png'

const containerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const Home = () => {
  const navigate = useNavigate();

  const back=()=>{
    navigate('/')
  }

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <button className="next-button" onClick={back}><i class="fa fa-arrow-left" aria-hidden="true"></i> back</button>
        </div>
      </header>
      <div className="text-section">
  <h2 className="welcome-title">Discover Our Healthcare Features</h2>
  <ul className="feature-list">
    <li className="feature-item">
      <span className="feature-icon">🏥</span>
      Comprehensive Medical Services
    </li>
    <li className="feature-item">
      <span className="feature-icon">⏱️</span>
      Quick and Convenient Appointments
    </li>
    <li className="feature-item">
      <span className="feature-icon">📊</span>
      Personalized Health Insights
    </li>
  </ul>
</div>

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310844.36303312884!2d13.095087633058364!3d52.50680414970909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2s!4v1691697961903!5m2!1sen!2s"
          width="70%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <nav className="bottom-navbar">
      <Link to="/" className="nav-item">
    <img src={homeicon} alt="Doctors Icon" className="icon-image" /> 
    <span className="nav-text">Home</span>
  </Link>

  <Link to="/surety" className="nav-item">
  <img src={Appointmentsicon} alt="appointmentIcon" className="icon-image" /> 
    <span className="nav-text">Appointments</span>
  </Link>
  <Link to="/checkedAppointment" className="nav-item">
  <img src={checklist} alt="docicon" className="icon-image" /> 
    <span className="nav-text">Checkedlist</span>
  </Link>


<Link to="/viewAppointment" className="nav-item">
  <img src={ViewAppointment} alt="docicon" className="icon-image" /> 
    <span className="nav-text" >view Appointment </span>
  </Link>

  <Link to="/AddDoctor" className="nav-item">
  <img src={doctoricon} alt="docicon" className="icon-image" /> 
    <span className="nav-text" >Add Doctors </span>
  </Link>
  <Link to="/ViewDoctor" className="nav-item">
  <img src={doctoricon} alt="docicon" className="icon-image" /> 
    <span className="nav-text" >view Doctor </span>
  </Link>
</nav>

    </div>
  );
};

export default Home;

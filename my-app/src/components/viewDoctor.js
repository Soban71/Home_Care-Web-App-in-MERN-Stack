import React, { useState, useEffect } from "react";
import axios from "axios";
import "./viewDoctor.css";
import { useNavigate } from "react-router-dom";

const ViewDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/appointments/doctor");
      console.log("Response from server:", response.data);
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };
  

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/Home');
  };

  return (
    <div className="view-doctor-container">
      <h2 className="view-doctor-title">View Doctors</h2>
      <button className="go-to-home-button" onClick={goHome}>
        <i className="fa fa-home" aria-hidden="true"></i>
      </button>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Expertise:</strong> {doctor.expertise}</p>
            <p><strong>Timing:</strong> {doctor.timing}</p>
            <p><strong>Fee:</strong> {doctor.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDoctor;

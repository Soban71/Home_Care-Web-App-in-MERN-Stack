import React, { useState, useEffect } from "react";
import axios from "axios";
import "./viewAppointment.css";
import { useNavigate } from "react-router-dom";


const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/appointments");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/Home");
  };

  return (
    <div className="appointments-page">
      <button className="go-to-home-button" onClick={goHome}>
      <i class="fa fa-home" aria-hidden="true"></i>

      </button>

      <div className="appointments-container">
        <h2>Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointment-card">
              <p>Place: {appointment.place}</p>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Treatment: {appointment.treatment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;

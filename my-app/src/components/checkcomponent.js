import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CheckedComponents.css";
import { useNavigate } from "react-router-dom";

const CheckedComponent = () => {
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

  // Helper function to convert base64 to Uint8Array
  const base64ToUint8Array = (base64) => {
    const binaryString = window.atob(base64);
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }
    return byteArray;
  };

  return (
    <div className="appointments-page">
      <button className="go-to-home-button" onClick={goHome}>
        <i className="fa fa-home" aria-hidden="true"></i>
      </button>

      <div className="appointments-container">
        <h2>CheckList Appointments Details</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id} className="appointment-card">
              <h3>{appointment.name}</h3>
              <div>
                <strong>Emergency Contact:</strong>{" "}
                {appointment.emergencyContact}
              </div>
              <div>
                <strong>Health Insure Card:</strong>{" "}
                {appointment.healthInsureCard ? (
                  <img
                    src={`data:image/jpeg;base64,${appointment.healthInsureCard}`}
                    alt="Health Insure Card"
                    className="insure-card-image"
                  />
                ) : (
                  "Not provided"
                )}
              </div>
              <div>
                <strong>Medication List:</strong> {appointment.medicationList}
              </div>
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckedComponent;

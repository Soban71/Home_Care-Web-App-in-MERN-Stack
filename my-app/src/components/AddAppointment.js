
import React, { useState } from "react";
import axios from "axios";
import "./AddAppointment.css"; 
import { useNavigate } from "react-router-dom";

const AddAppointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    place: "",
    date: "",
    time: "",
    treatment: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/appointments", appointmentData);
      console.log("Appointment added successfully");
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };
  const navigate=useNavigate();

  const goHome=()=>{
    navigate('/Home');
  }

  return (
    <div className="add-appointment-container">
      <h2 className="add-appointment-title">Add Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Place:</label>
          <input
            type="text"
            name="place"
            value={appointmentData.place}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            type="text"
            name="date"
            value={appointmentData.date}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Time:</label>
          <input
            type="text"
            name="time"
            value={appointmentData.time}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Treatment:</label>
          <input
            type="text"
            name="treatment"
            value={appointmentData.treatment}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button" >Add Appointment</button>
        <button type="submit" className="submit-button" onClick={goHome}>Go Home</button>

      </form>
    </div>
  );
};

export default AddAppointment;

import React, { useState } from "react";
import axios from "axios";
import "./AddAppointment.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddAppointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    place: "",
    date: "",
    time: "",
    treatment: "",
    healthInsureCard: null,
    medicationList: "",
    checklist: [],
    emergencyContact: "",
    name: "",
    age: "",
    gender: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setAppointmentData({ ...appointmentData, healthInsureCard: file });
  };

  const handleChecklistChange = (index) => (event) => {
    const newChecklist = [...appointmentData.checklist];
    newChecklist[index] = event.target.checked;
    setAppointmentData({ ...appointmentData, checklist: newChecklist });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (const key in appointmentData) {
        formData.append(key, appointmentData[key]);
      }

      await axios.post("http://localhost:5000/appointments", formData);
      console.log("Appointment added successfully");

      // Show success toast
      toast.success("Appointment added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Clear form after successful submission
      clearForm();
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };
  const clearForm = () => {
    setAppointmentData({
      place: "",
      date: "",
      time: "",
      treatment: "",
      healthInsureCard: null,
      medicationList: "",
      checklist: [],
      emergencyContact: "",
      name: "",
      age: "",
      gender: "",
    });
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/Home");
  };

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
        <div className="form-group">
          <label className="form-label">Health Insure Card:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Medication List:</label>
          <input
            type="text"
            name="medicationList"
            value={appointmentData.medicationList}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Checklist:</label>
          <div>
            <label>
              <input
                type="checkbox"
                checked={appointmentData.checklist[0] || false}
                onChange={handleChecklistChange(0)}
              />
              Toothbrush
            </label>
            <label>
              <input
                type="checkbox"
                checked={appointmentData.checklist[1] || false}
                onChange={handleChecklistChange(1)}
              />
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Emergency Contact:</label>
          <input
            type="text"
            name="emergencyContact"
            value={appointmentData.emergencyContact}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Additional Information</label>
          <input
            type="text"
            name="name"
            value={appointmentData.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Age:</label>
          <input
            type="text"
            name="age"
            value={appointmentData.age}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Gender:</label>
          <input
            type="text"
            name="gender"
            value={appointmentData.gender}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Appointment
        </button>
        <button type="button" className="submit-button" onClick={goHome}>
          Go Home
        </button>
      </form>
    </div>
  );
};

export default AddAppointment;

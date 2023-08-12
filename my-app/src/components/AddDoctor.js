import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";

const AddDoctor = () => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    expertise: "",
    timing: "",
    fee: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/appointments/doctor", doctorData);
      console.log("Doctor added successfully");
      toast.success("Doctor added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      clearForm(); // Clear the form after successful submission
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/Home');
  };
  
  const clearForm = () => {
    setDoctorData({
      name: "",
      expertise: "",
      timing: "",
      fee: "",
    });
  };

  return (
    <div className="add-doctor-container">
      <h2 className="add-doctor-title">Add Doctor</h2>
      <form className="doctor-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={doctorData.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Expertise:</label>
          <input
            type="text"
            name="expertise"
            value={doctorData.expertise}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Timing:</label>
          <input
            type="text"
            name="timing"
            value={doctorData.timing}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Fee:</label>
          <input
            type="text"
            name="fee"
            value={doctorData.fee}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Doctor</button>
        <button type="button" className="submit-button" onClick={goHome}>Go Home</button>
      </form>
    </div>
  );
};

export default AddDoctor;


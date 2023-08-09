import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Addpatientsurety.css';
import { useNavigate } from 'react-router-dom';

export default function Addpatientsurety() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const navigate = useNavigate();

  const AddPatients=()=>{
    navigate('/Addappointment');
  }
  return (
    <div className="add-patient-container">
      <div className="gradient-background">
        <h2 className="ensure-title">Ensure to Add Patient</h2>
        <p className="ensure-text">
          Before proceeding, please ensure that you have all the necessary information to add the patient to the system.
        </p>
        <div className="tick-button">
          <label className="tick-box" onClick={toggleCheckbox}>
            {isChecked && <i class="fa fa-check"></i>}
          </label>
          <button className="add-patient-button" onClick={AddPatients}>Add Patient</button>
        </div>
      </div>
    </div>
  );
}

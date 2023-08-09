
import React, { useState, useEffect } from "react";
import axios from "axios";

const TreatmentDetails = () => {
  const [treatmentDetails, setTreatmentDetails] = useState("");

  useEffect(() => {
    fetchTreatmentDetails();
  }, []);

  const fetchTreatmentDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/treatment");
      setTreatmentDetails(response.data.details);
    } catch (error) {
      console.error("Error fetching treatment details:", error);
    }
  };

  return (
    <div className="treatment-details">
      <h2>Treatment Preparation Details</h2>
      <p>{treatmentDetails}</p>
    </div>
  );
};

export default TreatmentDetails;

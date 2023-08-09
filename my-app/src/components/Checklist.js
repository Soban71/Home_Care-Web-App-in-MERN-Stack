
import React, { useState } from "react";
import axios from "axios";

const Checklist = () => {
  const [mandatoryPrerequisites, setMandatoryPrerequisites] = useState([]);
  const [optionalPrerequisites, setOptionalPrerequisites] = useState([]);

  const toggleFulfillment = async (id) => {
   
  };

  return (
    <div className="checklist">
      <h2>Prerequisite Checklist</h2>
      <h3>Mandatory Prerequisites</h3>
      <ul>
        {mandatoryPrerequisites.map((prerequisite) => (
          <li key={prerequisite.id}>
            <input
              type="checkbox"
              checked={prerequisite.fulfilled}
              onChange={() => toggleFulfillment(prerequisite.id)}
            />
            {prerequisite.description}
          </li>
        ))}
      </ul>
      <h3>Optional Prerequisites</h3>
      <ul>
        {optionalPrerequisites.map((prerequisite) => (
          <li key={prerequisite.id}>
            <input
              type="checkbox"
              checked={prerequisite.fulfilled}
              onChange={() => toggleFulfillment(prerequisite.id)}
            />
            {prerequisite.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;

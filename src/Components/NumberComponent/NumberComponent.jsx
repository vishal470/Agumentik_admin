import React, { useState } from 'react';
import axios from 'axios';
import '../NumberComponent/NumberComponent.css'; 

const NumberComponent = () => {
  const [year, setYear] = useState('');
  const [client, setClient] = useState('');
  const [project, setProject] = useState('');
  const [award, setAward] = useState('');

  const apiUrl = 'https://admin-backend-eiy3.onrender.com/number/64c682ab3fd8cef89c86cbfe';

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleClientChange = (e) => {
    setClient(e.target.value);
  };

  const handleProjectChange = (e) => {
    setProject(e.target.value);
  };

  const handleAwardChange = (e) => {
    setAward(e.target.value);
  };

  const handleUpdateContent = async () => {
    try {
      const updatedData = {};

      if (year) {
        updatedData.year = year;
      }

      if (client) {
        updatedData.client = client;
      }

      if (project) {
        updatedData.project = project;
      }

      if (award) {
        updatedData.award = award;
      }

      const response = await axios.patch(apiUrl, updatedData);
      console.log('Updated data:', response.data);
      window.alert('Data successfully updated!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="number-container">
      <h2 className="number-heading">Hero Component</h2>
      <div className="input-row">
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={handleYearChange}
          className="number-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="client">Client:</label>
        <input
          type="text"
          id="client"
          value={client}
          onChange={handleClientChange}
          className="number-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="project">Project:</label>
        <input
          type="text"
          id="project"
          value={project}
          onChange={handleProjectChange}
          className="number-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="award">Award:</label>
        <input
          type="text"
          id="award"
          value={award}
          onChange={handleAwardChange}
          className="number-input"
        />
      </div>
      <div className="number-button-container">
        <button onClick={handleUpdateContent} className="number-button">
          Update
        </button>
      </div>
    </div>
  );
};

export default NumberComponent;

import React, { useState } from 'react';
import axios from 'axios';
import '../Hero/HeroComponent.css';

const HeroComponent = () => {
  const [heading, setHeading] = useState('');
  const [paragraph, setParagraph] = useState('');

  const apiUrl = 'https://admin-backend-eiy3.onrender.com/hero/64c67d37a3d9e38bb53aaab3';

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleUpdateContent = async () => {
    try {
      const updatedData = {};

      if (heading) {
        updatedData.heading = heading;
      }

      if (paragraph) {
        updatedData.paragraph = paragraph;
      }

      const response = await axios.patch(apiUrl, updatedData);
      console.log('Updated data:', response.data);
      window.alert('Data successfully updated!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="hero-container">
      <h2 className="hero-heading" style={{textAlign:"center"}}>Hero Component</h2>
      <div>
        <label htmlFor="heading">Heading:</label>
        <input
          type="text"
          id="heading"
          value={heading}
          onChange={handleHeadingChange}
          className="hero-input"
        />
      </div>
      <div>
        <label htmlFor="paragraph">Paragraph:</label>
        <textarea
          id="paragraph"
          value={paragraph}
          onChange={handleParagraphChange}
          className="hero-textarea"
        />
      </div>
      <div className="hero-button-container">
        <button onClick={handleUpdateContent} className="hero-button">
          Update
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;

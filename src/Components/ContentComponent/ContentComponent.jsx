import React, { useState } from 'react';
import axios from 'axios';
import '../ContentComponent/ContentComponent.css'; 

const ContentComponent = () => {
  const [heading, setHeading] = useState('');
  const [img, setImg] = useState('');
  const [card1, setCard1] = useState('');
  const [cardDetail, setCardDetail] = useState('');
  const [card2, setCard2] = useState('');
  const [card3, setCard3] = useState('');
  const [card4, setCard4] = useState('');

  const apiUrl = 'https://admin-backend-eiy3.onrender.com/content/64c68865747af066099a18f3';

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  const handleCard1Change = (e) => {
    setCard1(e.target.value);
  };

  const handleCardDetailChange = (e) => {
    setCardDetail(e.target.value);
  };

  const handleCard2Change = (e) => {
    setCard2(e.target.value);
  };

  const handleCard3Change = (e) => {
    setCard3(e.target.value);
  };

  const handleCard4Change = (e) => {
    setCard4(e.target.value);
  };

  const handleUpdateContent = async () => {
    try {
      const updatedData = {};

      if (heading) {
        updatedData.heading = heading;
      }

      if (img) {
        updatedData.img = img;
      }

      if (card1) {
        updatedData.card1 = card1;
      }

      if (cardDetail) {
        updatedData.cardDetail = cardDetail;
      }

      if (card2) {
        updatedData.card2 = card2;
      }

      if (card3) {
        updatedData.card3 = card3;
      }

      if (card4) {
        updatedData.card4 = card4;
      }

      const response = await axios.patch(apiUrl, updatedData);
      console.log('Updated data:', response.data);

      window.alert('Data successfully updated!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="content-container">
      <h2 className="content-heading">Hero Component</h2>
      <div className="input-row">
        <label htmlFor="heading">Heading:</label>
        <input
          type="text"
          id="heading"
          value={heading}
          onChange={handleHeadingChange}
          className="content-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="img">Image:</label>
        <input
          type="text"
          id="img"
          value={img}
          onChange={handleImgChange}
          className="content-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="card1">Card 1:</label>
        <input
          type="text"
          id="card1"
          value={card1}
          onChange={handleCard1Change}
          className="content-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="cardDetail">Card Detail:</label>
        <input
          type="text"
          id="cardDetail"
          value={cardDetail}
          onChange={handleCardDetailChange}
          className="content-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="card2">Card 2:</label>
        <input
          type="text"
          id="card2"
          value={card2}
          onChange={handleCard2Change}
          className="content-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="card3">Card 3:</label>
        <input
          type="text"
          id="card3"
          value={card3}
          onChange={handleCard3Change}
          className="content-input"
        />
      </div>
      <div className="input-row">
        <label htmlFor="card4">Card 4:</label>
        <input
          type="text"
          id="card4"
          value={card4}
          onChange={handleCard4Change}
          className="content-input"
        />
      </div>
      <div className="content-button-container">
        <button onClick={handleUpdateContent} className="content-button">
          Update
        </button>
      </div>
    </div>
  );
};

export default ContentComponent;

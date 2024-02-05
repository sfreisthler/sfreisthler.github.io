import React from 'react';
import './LogoCard.css';

const LogoCard = ({ logoSrc, captionText }) => {
  return (
    <div className="logo-container">
      <img src={logoSrc} alt="Logo" className="logo-image" />
      <p className="caption-text">{captionText}</p>
    </div>
  );
};

export default LogoCard;
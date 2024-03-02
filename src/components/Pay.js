import React from 'react';
import './Pay.css'; // Import the CSS file
import logo from './F2-Fintech-logo-1.jpg';
import qrImage from './qrcode.jpg';

function Pay() {
  const openQRCodePage = () => {
    window.open(qrImage, '_blank');
  };

  return (
    <div className="card">
      <img className="logo" src={logo} alt="F2Fintech Logo" />
      <div className="card-header">Bhawesh Dhanani</div>
      <p className="price">Total EMI: ₹50,369</p>
      <button className="pay-button" onClick={openQRCodePage}>Pay Now</button>
    </div>
  );
}

export default Pay;

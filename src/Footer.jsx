import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import logo from "./component/dynamologo 3.png"; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <div className="footer-links">
          <Link to="/legal-notice" className="footer-link">Legal Notice</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
          <Link to="/impressum" className="footer-link">Impressum</Link>
        </div>
        <p>Copyright © {new Date().getFullYear()} DynamoChart UG. All rights reserved.</p>
        Dynamo Package is a product of DynamoChart UG
      </div>
   
      <div className="footer-company-info">
        <h1>DynamoChart UG</h1>
        <p>Holzheimer Weg 11</p>
        <p>41464 Neuss, Germany</p>
        <p>Internet: <a href="https://dynamopackage.com/" className="footer-link">Dynamochart.com</a></p>
        <p>Contact: <a href="mailto:Contact@dynamopackage.com" className="footer-link">Contact@dynamopackage.com</a></p>
        <p>Sitz der Gesellschaft/Registered office:<span> Neuss</span></p>
        <p>Eintragung/Commercial Register:<span> Amtsgericht Neuss HRB 23027</span></p>
        <p>VAT identification number (USt-ID):<span> DE361618143</span></p>
        <p>Geschäftsführung/Managing Directors:<span><br></br> Javad Khalil Arjmandi</span></p>
      </div>
    </footer>
  );
}

export default Footer;

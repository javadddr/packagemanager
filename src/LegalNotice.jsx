import React from 'react';

import Footer from './Footer';  // Importing Footer component

import './LegalNotice.css';
import Nav from './Nav';
const LegalNotice = () => {
  return (
    <div>
  <Nav/>
    <div className="legal-notice mt-20">
      <h2 className="legal-notice-title mt-20">Legal notice</h2>

      <p className="legal-notice-section">
        According to § 5 TMG
      </p>

      <address className="legal-notice-address">
        DynamoChart UG<br />
        Holzheimer Weg 11<br />
        41464 Neuss<br />
        Germany
      </address>

      <p className="legal-notice-contact">
        Contact: <a href="tel:+4915156338464">+49 1515 6338464</a><br />
        Email: <a href="mailto:Hello@dynamofleet.com">Hello@dynamofleet.com</a>
      </p>

      <p className="legal-notice-website">
        Website: <a href="http://www.dynamofleet.com" target="_blank" rel="noopener noreferrer">www.dynamofleet.com</a>
      </p>

      <div className="legal-notice-register">
        Register:<br />
        Registration in the registry court: Neuss<br />
        Registration number: HRB 23027
      </div>

      <div className="legal-notice-director">
        Authorized Managing Director: Javad Khalil Arjmandi
      </div>

      <div className="legal-notice-tax">
        VAT-ID:<br />
        Sales tax identification number according to §27a Value Added Tax<br />
        USt-IdNr: DE361618143
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LegalNotice;

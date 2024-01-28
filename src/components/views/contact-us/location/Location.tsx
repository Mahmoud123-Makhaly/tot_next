import React from 'react';
import { Col, Row } from 'reactstrap';

import location from '@assets/images/contact-us/location.svg';
import email from '@assets/images/contact-us/email.svg';
import phone from '@assets/images/contact-us/phone.svg';
import { ListModule } from '@/components';
const Location = () => {
  const dubaiLocation = [
    { imgSrc: location, imgAlt: 'location', text: 'area business buy bldg B2B Tower Appt 1213' },
    { imgSrc: email, imgAlt: 'email', text: 'info@totplatform.com' },
    { imgSrc: phone, imgAlt: 'check', text: '+971 55 255 7519' },
  ];
  const egyptLocation = [
    { imgSrc: location, imgAlt: 'location', text: '48 El-Farik Abd El-Moneim Riad, Agouza, Giza' },
    { imgSrc: email, imgAlt: 'email', text: 'info@totplatform.com' },
    { imgSrc: phone, imgAlt: 'check', text: '(+02)01000651136' },
  ];
  return (
    <div className="location">
      <Row>
        <Col xl={6}>
          <div className="location-content bg-white">
            <ListModule title="Our location in Dubai" listItems={dubaiLocation} />
          </div>
        </Col>
        <Col xl={6}>
          <div className="location-content bg-white mb-0">
            <ListModule title="Our location in Egypt" listItems={egyptLocation} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Location;

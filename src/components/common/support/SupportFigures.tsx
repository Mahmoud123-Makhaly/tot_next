import React from 'react';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';

import { Figure, supportFigures } from '@/components';

const SupportFigures = () => {
  return (
    <Row>
      {supportFigures.map((item, index) => (
        <Col sm={4} md={4} lg={3} xl={4} className="col-6" key={index}>
          <Link href={item.slug}>
            <Figure imgSrc={item.imgSrc} imgAlt={item.imgAlt} text={item.text} className={`${item.className} mb-32`} />
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default SupportFigures;

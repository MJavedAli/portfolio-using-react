import React from 'react';
import {
  Card,
  CardBody,
  CardText,
  Col,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { CertificationsType } from '../types/sections';

const CertificateCard = ({
  companyLogo,
  desc,
  credentialUrl
}: CertificationsType) => {
  return (
    <Col lg="3" md="6" className="mb-4">
      <Fade left duration={2000}>
        <Card style={{ height: '100%' }} className="shadow-lg--hover mb-4 shadow border-0 text-center rounded">
          <CardBody className="d-flex flex-column">
            <img
              src={companyLogo}
              style={{
                objectFit: 'cover',
                width: '8rem',
                height: '8rem',
                margin: 'auto',
              }}
              alt={companyLogo}
            />
            <div className="mt-3">
              <CardText className="description my-3 text-center">
                {credentialUrl ? (
                  <a
                    href={`${credentialUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {desc}
                  </a>
                ) : (
                  <div>{desc}</div>
                )}
              </CardText>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default CertificateCard;

import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { CertificationsType } from '../types/sections';

const CertificateCard = ({
  companyLogo,
  company,
  role,
  date,
  desc,
  credentialUrl
}: CertificationsType) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-6 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <img
              src={companyLogo}
              style={{
                objectFit: 'cover',
                left: 0,
                right: 0,
                top: '7rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '8rem',
                height: '8rem',
              }}
              alt={companyLogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {company}
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2">
              {role}
            </CardSubtitle>
            <CardSubtitle>{date}</CardSubtitle>
            <CardText tag="div" className="description my-3 text-center">
            {credentialUrl ? (
                <a href={"https://www.credly.com/badges/"+credentialUrl} target="_blank" rel="noopener noreferrer">
                  {desc}
                </a>
              ) : (
                <div>{desc}</div>
              )}            
              </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default CertificateCard;

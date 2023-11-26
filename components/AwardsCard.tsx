import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { Awards } from '../types/sections';

interface AwardsCardProps {
  data: Awards;
}

const AwardsCard:React.FC<AwardsCardProps> = ({ data }) => {
	return (
		<Fade bottom duration={2000} >
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">{data.name}</h5>
							<p className="description mt-3">{data.desc}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
  }

export default AwardsCard;

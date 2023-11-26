import { awards } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import AwardsCard from "../components/AwardsCard";

const Awards = () => {
	return awards && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="fa fa-trophy text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">
							Awards & Accolades
						</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{awards.map((data, i) => {
						return (
							<Col key={i} lg={6}>
								<AwardsCard data={data} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Awards;

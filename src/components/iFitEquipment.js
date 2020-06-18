import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col, Card } from 'react-bootstrap'

import bike from "../images/bike.png"
import pulley from "../images/pulley.png"
import elliptical from "../images/elliptical.png"
import treadmill from "../images/treadmill.png"

const OrganizedEquipment = (props) => (
  <Col lg={3} md={6} sm={6} className="rounded equipmentCards text-center">
    <Card>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
      <Card.Text>
      </Card.Text>
      <Link to="/">Learn more</Link>
    </Card>
  </Col>
)

const EquipGrid = () => (
  <Container className="text-center" fluid>
    <Row className="equipmentGrid">
      <OrganizedEquipment image={treadmill} title="Treadmills"/>

      <OrganizedEquipment image={bike} title="Bikes"/>

      <OrganizedEquipment image={elliptical} title="Ellipticals"/>

      <OrganizedEquipment image={pulley} title="Strength"/>
    </Row>
  </Container>
)

export default EquipGrid

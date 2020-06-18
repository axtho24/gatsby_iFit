import React from "react"
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import mashable from "../images/mashable.png"
import gear from "../images/gear.png"
import wire from "../images/wire.png"
import left from "../images/white_left.png"
import right from "../images/white_right.png"

const Reviews = () => (
    <Container fluid>
      <Row className="reviewsCont">
        <Col lg={1} md={1} sm={1} className="m-auto text-center">
          <Button className="rounded-circle buttonArrows"><Image src={left} alt="arrow left" fluid/></Button>
        </Col>
        <Col lg={3} md={3} sm={3} className="border m-auto text-center rounded">
          <Image src={mashable} alt="company logo first review" fluid/>
          <p>"Breathes new life into a tired, old running routine"</p>
        </Col>
        <Col lg={3} md={3} sm={3} className="border m-auto text-center rounded">
          <Image src={gear} alt="company logo second review" fluid/>
          <p>"You focus on putting in the work, and the technology handles the rest"</p>
        </Col>
        <Col lg={3} md={3} sm={3} className="border m-auto text-center rounded">
          <Image src={wire} alt="company logo third review" fluid/>
          <p>"Literally transport you from home to wherever you choose to run"</p>
        </Col>
        <Col lg={1} md={1} sm={1} className="m-auto text-center">
          <Button className="rounded-circle buttonArrows"><Image src={right} alt="arrow right" fluid/></Button>
        </Col>
      </Row>
    </Container>
)

export default Reviews

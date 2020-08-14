import React from "react"
import { Container, Row, Col } from 'react-bootstrap'

const HeadTop = () => (
  <Container fluid>
  <Row className="navTopper border-bottom">
    <Col className="border-right text-center" xl={1} lg={2} md={2} sm={4} xs={4}>
      <p><a href="/">BLOGS</a></p>
    </Col>
    <Col className="border-right text-center" xl={1} lg={2} md={2} sm={4} xs={4}>
      <p><a href="/">NOURISH</a></p>
    </Col>
    <Col className="border-right text-center" xl={1} lg={2} md={2} sm={4} xs={4}>
      <p><a href="/">SHOP</a></p>
    </Col>
  </Row>
</Container>
)

export default HeadTop

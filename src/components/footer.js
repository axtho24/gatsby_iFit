import React from "react"
import { Container, Row, Col, Accordion, Card, Image  } from 'react-bootstrap'
import Languages from './languagues'

import youtube from "../images/youtube.png"
import pinterest from "../images/pinterest.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import down from "../images/white_down.png"

const langOptions = Languages.map((l, i) =>
  <option key={i}> {l} </option>
  )

const Footer = () => (

  <footer>
    <Container className="desktopFooter" fluid>
      <Row className="secFooter text-center justify-content-md-center">
        <Col s lg="2">
          <h6>Company</h6>
          <ul>
            <li>
              About
            </li>
            <li>
              Contact Us
            </li>
            <li>
              Careers
            </li>
          </ul>
        </Col>

        <Col s lg="2">
          <h6>Account</h6>
          <ul>
            <li>
              Log In
            </li>
            <li>
              Create Account
            </li>
          </ul>
        </Col>

        <Col s lg="2">
          <h6>Support</h6>
          <ul>
            <li>
              Help Center
            </li>
            <li>
              Accessibility
            </li>
          </ul>
        </Col>
      </Row>
    </Container>


    <Container className="mobileFooter" fluid>
      <Row className="firstSecFooter text-center justify-content-md-center">
        <Col s lg="2">
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Company
                <Image src={down} alt="arrow down" className="float-right"/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <li>
                      About
                    </li>
                    <li>
                      Contact Us
                    </li>
                    <li>
                      Careers
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Account
                <Image src={down} alt="arrow down" className="float-right"/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ul>
                    <li>
                      Log In
                    </li>
                    <li>
                      Create Account
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Support
                <Image src={down} alt="arrow down" className="float-right"/>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ul>
                    <li>
                      Help Center
                    </li>
                    <li>
                      Accessibility
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>

    <Container className="socialMedia" fluid>
      <Row className="mediaLinks justify-content-md-center">
        <Col xs lg="4">
          <Image src={youtube} alt="youtube" fluid/>
          <Image src={pinterest} alt="pinterest" fluid/>
          <Image src={facebook} alt="facebook" fluid/>
          <Image src={twitter} alt="twitter" fluid/>
          <Image src={instagram} alt="instagram" fluid/>
        </Col>
      </Row>
    </Container>

    <Container className="licAndLang" fluid>
      <Row>
        <Col lg={3} md={3} sm={3}>
          <select>
            {langOptions}
          </select>
        </Col>
        <Col lg={5} md={7} sm={9}  className="legalStuff">
          <span>
            © iFit.com. All Rights Reserved
          </span>

          <span>
            Privacy Policy
          </span>

          <span>
            Terms of Use
          </span>
        </Col>
      </Row>
    </Container>

  </footer>
)

export default Footer

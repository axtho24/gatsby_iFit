import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

import gregory from "../images/_Alex Gregory.png"
import gregoryAct from "../images/alex_thumbnail.png"
import alex from "../images/_Alex Silver-Fagan.png"
import alexAct from "../images/silver_thumbnail.png"
import desmond from "../images/_Desmond Nanchengwa.png"
import desmondAct from "../images/desmond_thumbnail.png"
import gideon from "../images/_Gideon Akande.png"
import gideonAct from "../images/gideon_thumbnail.png"
import hannah from "../images/_Hannah Eden.png"
import hannahAct from "../images/hannah_thumbnail.png"
import sanita from "../images/_Sanita Puspure.png"
import sanitaAct from "../images/sanita_thumbnail.png"
import susan from "../images/_Susan Francia.png"
import susanAct from "../images/susan_thumbnail.png"
import mary from "../images/whipple_mary_hero3x_001.png"
import maryAct from "../images/mary_thumbnail.png"
import watch from "../images/stopwatch.png"
import metrics from "../images/thing.png"
import blank from "../images/white.png"


const OrganizedHero = (props) => (
  <Col lg={3} md={6} sm={6} className="rounded">
    <Card>
      <Card.Img variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title><span className="float-left text-wrap">{props.title}</span> <Image className="float-right" src={props.profile} alt={props.alt} fluid/></Card.Title>
        <Card.Text>
          <span className="specialText"><Image src={props.clock} alt={props.alt} fluid/> {props.clockText} <Image src={props.distance} alt={props.alt} fluid/> {props.distanceText}</span>
        </Card.Text>
      </Card.Body>
      <Link to="/">VIEW DETAILS</Link>
    </Card>
  </Col>
)


const HeroGrid = () => (
  <Container className="trainerContainer" fluid>
    <Row className="heroTrainerGrid">
      <OrganizedHero image={gregoryAct} title="20 Minutes to Toned" profile={gregory} alt="gregs picture" clock={blank} clockText="" distance={blank} distanceText=""/>

      <OrganizedHero image={alexAct} title="Slow Pulls and Fast Intervals" profile={alex} alt="alexs picture" clock={watch} clockText="44:13" distance={metrics} distanceText="9,948 M"/>

      <OrganizedHero image={desmondAct} title="Kafue River, Zambia—Power Stroke Pyramid" profile={desmond} alt="desmonds picture" clock={watch} clockText="22:22" distance={metrics} distanceText="4,660 M"/>

      <OrganizedHero image={gideonAct} title="Shred & Burn Series" profile={gideon} alt="Gideon picture" clock={blank} clockText="" distance={blank} distanceText=""/>

      <OrganizedHero image={hannahAct} title="Full-Body HIIT Series" profile={hannah} alt="Hannah picture" clock={blank} clockText="" distance={blank} distanceText=""/>

      <OrganizedHero image={sanitaAct} title="Lake Inniscarra, Ireland—Pyramid" profile={sanita} alt="Sanita picture" clock={watch} clockText="30:53" distance={metrics} distanceText="6,248 M"/>

      <OrganizedHero image={susanAct} title="Performance Series" profile={susan} alt="Susan picture" clock={blank} clockText="" distance={blank} distanceText=""/>

      <OrganizedHero image={maryAct} title="Charles Race, Boston, Massachusetts" profile={mary} alt="Mary picture" clock={watch} clockText="36:22" distance={metrics} distanceText="8648 M"/>
    </Row>
  </Container>
)

export default HeroGrid

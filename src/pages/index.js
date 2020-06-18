import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Button } from 'react-bootstrap'

import HeadTop from '../components/headerTopper'
import Header from '../components/header'

import "../components/index.sass"

import StyledBackgroundSection from '../components/heroBackground'
import Reviews from '../components/review'
import HeroGrid from '../components/trainers_grid'
import EquipGrid from '../components/iFitEquipment'
import Footer from '../components/footer'

const IndexPage = () => (
  <>
  <Container className="bodyContainer" fluid>
    <HeadTop />
    <Header />
    <StyledBackgroundSection>
      <div className="heroContainer">
        <h1 className="heroText align-middle">
         The best personal training, right in your own home
       </h1>
       <Button className="coach">JOIN IFIT COACH</Button>
      </div>
    </StyledBackgroundSection>
    <Reviews/>
    <HeroGrid/>
    <h2 className="text-center">Interest in our exciting iFit-enabled equipment?</h2>
    <EquipGrid/>
    <Footer />
  </Container>
  </>
)

export default IndexPage

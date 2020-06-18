import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { StyledFullScreenWrapper } from './SharedStyledComponents'

const BackgroundSection = ({ className, children }) => {
  const { heroBackground } = useStaticQuery (
    graphql`
      query {
        heroBackground: file(relativePath: {eq: "gmapsinworkout.png"}) {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 800, quality: 90) {
            	...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)

    const imageData = heroBackground.childImageSharp.fluid
    return (
      <StyledFullScreenWrapper>
      <StyledSymetryWrapper>
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`black`}
          title="gbitest"
          id="gbitest"
          role="img"
          aria-label="gbitest"
        >
          {children}
        </BackgroundImage>
      </StyledSymetryWrapper>
    </StyledFullScreenWrapper>
    )
  }

    const StyledSymetryWrapper = styled.div`
      width: 100%;
      height: 40vw;
      overflow: hidden;
    `
    const StyledBackgroundSection = styled(BackgroundSection)`
      width: 100vw;
      height: 100%;
    `

export default StyledBackgroundSection

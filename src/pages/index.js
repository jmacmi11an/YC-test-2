import React from "react";
import Header from '../components/Header';
import UserForm from '../components/Form';
import BackgroundImage from 'gatsby-background-image';

import { graphql } from 'gatsby';

export default function Home() {
  return (
    <div style={{width: "100%"}}>
      <Header />
      <div class="container" style={{fontFamily: "montserrat"}}>
        <BackgroundImage
          fluid={props.data.indexImage.childImageSharp.fluid}
        >
          <div>
            <h1>DOLOR SIT AMET</h1>
            <p>Vestibulum tempus eros nec dignissim convallis</p>
          </div>
        </BackgroundImage>
      </div>
      <UserForm />
    </div>
  );
}


export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "Background.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1000){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

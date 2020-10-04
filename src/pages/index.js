import React from "react";
import Header from '../components/Header';
import UserForm from '../components/Form';

import BackgroundImage from 'gatsby-background-image';

// import { graphql, StaticQuery } from 'gatsby';



const Home = () => (
  <div style={{width: "100%"}}>
    <Header />
    <div class="container" style={{fontFamily: "montserrat", display: "inline-block", width: "40%", padding: "0em 3em"}}>
        <div>
          <h1 style={{letterSpacing: '6px'}}>DOLOR SIT AMET</h1>
          <p style={{color: '#999'}}>Vestibulum tempus eros nec dignissim convallis.</p>
        </div>
    </div>
    <UserForm />
  </div>
);



export default Home;

// <BackgroundImage
//   fluid={props.data.indexImage.childImageSharp.fluid}
// >
///////////////// This is where everything after the Header would go ///////////////
// </BackgroundImage>




//
// export const pageQuery = graphql`
//   query {
//     indexImage: file(relativePath: { eq: "background.jpg" }){
//       childImageSharp {
//         fluid(maxWidth: 2000){
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;

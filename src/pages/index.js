//////////////////   EARLY ATTEMPTS /////////////////
// import React from "react";
// import Header from '../components/Header';
// import UserForm from '../components/Form';
//
//
// const Home = () => (
//   <div style={{width: "100%"}}>
//     <Header />
//     <div class="container" style={{fontFamily: "montserrat", display: "inline-block", width: "40%", padding: "0em 3em"}}>
//         <div>
//           <h1 style={{letterSpacing: '6px'}}>DOLOR SIT AMET</h1>
//           <p style={{color: '#999'}}>Vestibulum tempus eros nec dignissim convallis.</p>
//         </div>
//     </div>
//     <UserForm />
//   </div>
// );
//
//
//
// export default Home;



/////////////////////////// Another attempt ///////////////////////////

// import React from "react";
// import Header from '../components/Header';
// import UserForm from '../components/Form';
// import styled from 'styled-components'
// import BackgroundImage from 'gatsby-background-image';
//
// import { graphql, StaticQuery } from 'gatsby';
//
//
// const BackgroundSection = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         indexImage: file(relativePath: { eq: "background.jpg" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       console.log(data);
//       const imageData = data.indexImage.childImageSharp.fluid
//       return (
//         <div style={{width: "100%"}}>
//           <Header />
//           <BackgroundImage
//             Tag="section"
//             className={'className'}
//             fluid={imageData}
//             backgroundColor={`#040e18`}
//           >
//             <div class="container" style={{fontFamily: "montserrat", display: "inline-block", width: "40%", padding: "0em 3em"}}>
//                 <div>
//                   <h1 style={{letterSpacing: '6px'}}>DOLOR SIT AMET</h1>
//                   <p style={{color: '#999'}}>Vestibulum tempus eros nec dignissim convallis.</p>
//                 </div>
//             </div>
//             <UserForm />
//           </BackgroundImage>
//         </div>
//       )
//     }}
//   />
// );

// const Home = () => (
//   <div style={{width: "100%"}}>
//     <Header />
//     <BackgroundImage
//       Tag="section"
//       className={'className'}
//       fluid={imageData}
//       backgroundColor={`#040e18`}
//     >
//       <div class="container" style={{fontFamily: "montserrat", display: "inline-block", width: "40%", padding: "0em 3em"}}>
//           <div>
//             <h1 style={{letterSpacing: '6px'}}>DOLOR SIT AMET</h1>
//             <p style={{color: '#999'}}>Vestibulum tempus eros nec dignissim convallis.</p>
//           </div>
//       </div>
//       <UserForm />
//     </BackgroundImage>
//   </div>
// );





// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `
//
// export default BackgroundSection










//////////////////// Final attempt /////////////////////

import React from "react";
import Header from '../components/Header';
import UserForm from '../components/Form';
import BackgroundImage from 'gatsby-background-image';

import { graphql } from 'gatsby';

const Home = (props) => (
  <div style={{width: "100%", height: '100vh'}}>
    <Header />
    <BackgroundImage
      fluid={props.data.indexImage.childImageSharp.fluid}
      style={{backgroundHeight: '100vh'}}
    >

      <div class="container" style={{fontFamily: "montserrat", display: "inline-block", width: "40%", padding: "0em 3em"}}>
          <div>
            <h1 style={{letterSpacing: '6px'}}>DOLOR SIT AMET</h1>
            <p style={{color: '#999'}}>Vestibulum tempus eros nec dignissim convallis.</p>
          </div>
      </div>
      <UserForm />
    </BackgroundImage>
  </div>
);


export default Home;


export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

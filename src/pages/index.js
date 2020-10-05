import React from "react";
import Header from '../components/Header';
import UserForm from '../components/Form';

import BackgroundImage from 'gatsby-background-image';

import { graphql, StaticQuery } from 'gatsby';






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



//
// import React from "react";
// import Header from '../components/Header';
// import UserForm from '../components/Form';
// // import styled from 'styled-components'
// import BackgroundImage from 'gatsby-background-image';
//
// import { graphql, StaticQuery } from 'gatsby';
//
//
// const imageData = data.desktop.childImageSharp.fluid
//
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
//
//
//
// const BackgroundSection = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         desktop: file(relativePath: { eq: "background.jpg" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       return (
//         <Home/>
//       )
//     }}
//   />
// )
// //
// // const StyledBackgroundSection = styled(BackgroundSection)`
// //   width: 100%;
// //   background-position: bottom center;
// //   background-repeat: repeat-y;
// //   background-size: cover;
// // `
//
// export default BackgroundSection

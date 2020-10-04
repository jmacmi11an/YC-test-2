import React from "react";
import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <Header />
      <div style={{fontFamily: "montserrat", textAlign: "center", width: '70%', margin: 'auto' }}>
        <h1 style={{letterSpacing: '4px'}}>DOLOR SIT AMET</h1>
        <p style={{
          letterSpacing: '2px',
          lineHeight: '25px',
          fontWeight: '200',
          color: '#888'
        }}>
          Vestibulum tempus eros nec dignissim convallis. Vestibulum hendrerit suscipit nisi, vel blandit erat feugiat at. Orci varius natoque penatibus et magnis dis parturient montes,</p>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'gatsby';



export default function Header(){
  return (
  <nav style={{
    padding: "1em 6em",
    fontFamily: "montserrat",
    textDecoration: "none",
    color: "black",
    boxShadow: "0 4px 4px #ccc",
    margin: "0 auto",
    border: "0"
  }}>
    <a style={{textDecoration: "none", color: 'black', fontWeight: '600'}} id="title" href="/">LOREM IPSUM</a>
    <div style={{display: "inline-block", float: "right"}}>
      <Link to="/" style={{textDecoration: "none", color: 'black', padding: '1em'}}>Home</Link>
      <Link to="/about" style={{textDecoration: "none", color: 'black', padding: '1em', borderBottom: "2px solid orange"}}>About</Link>
    </div>
  </nav>
)}

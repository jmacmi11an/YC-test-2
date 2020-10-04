import React from 'react';

export default function Header(){
  return (
  <nav style={{
    padding: "2em 0",
    fontFamily: "montserrat",
    textDecoration: "none"
  }}>
    <a style={{textDecoration: "none"}} id="title" href="/">LOREM IPSUM</a>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
)}

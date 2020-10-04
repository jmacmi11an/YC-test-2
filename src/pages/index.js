import React from "react";
import Header from '../components/Header';
import UserForm from '../components/Form';

export default function Home() {
  return (
    <div>
      <Header />
      <div class="container" style={{fontFamily: "montserrat", backgroundImage: 'url("../../../public/Background.jpg")'}}>
        <div>
          <h1>DOLOR SIT AMET</h1>
          <p>Vestibulum tempus eros nec dignissim convallis</p>
        </div>
      </div>
      <UserForm />
    </div>
  );
}

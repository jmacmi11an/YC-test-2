import React from 'react';

export default function Form(){
  return (
    <div style={{backgroundColor: 'green', marginRight: '3em', height: '300px', width: '500px', display: 'block'}}>
      <form style={{marginRight: '3em', height: '400px', width: '500px'}}>
        <label for="fname">First name</label>
        <input type="text" id="fname" name="fname"/>
        <label for="lname">Last name</label>
        <input type="text" id="lname" name="lname"/>
        <label for="email">Email address</label>
        <input type="text" id="email" name="email"/>
        <button>SUBMIT</button>
      </form>
    </div>
)}

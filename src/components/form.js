import React from 'react';


// might extend React.Component instead //
class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }


  render() {
    return (
      <div style={{maxWidth: '40%', display: 'inline-block', paddingBottom: '1em', margin: '3em', fontFamily: 'montserrat', color: '#777', backgroundColor: 'rgba(255,255,255,0.9)'}}>
        <form style={{margin: '1em', padding: '1em'}}>

          <div style={{margin: '1em', width: "40%", display: "inline-block"}}>
            <label for="firstName">First name</label>
            <input style={{marginTop: '5px', padding: '5px', backgroundColor: '#fff', borderRadius: '2px', border: '1px solid gray', }} name="firstName" value={this.state.value} onChange={this.handleChange} type="text" id="fname" required/>
          </div>

          <div style={{margin: '1em', width: "40%", display: "inline-block"}}>
            <label for="lname">Last name</label>
            <input style={{marginTop: '5px', padding: '5px', backgroundColor: '#fff', borderRadius: '2px', border: '1px solid gray', }} name="lastName" value={this.state.value} onChange={this.handleChange} type="text" id="lname" required/>
          </div>

          <div style={{margin: '1em'}}>
            <label for="email">Email address</label>
            <input style={{marginTop: '5px', padding: '5px', backgroundColor: '#fff', borderRadius: '2px', border: '1px solid gray', width: '90%'}} name="email" value={this.state.value} onChange={this.handleChange} type="email" id="email" required/>
          </div>

          <div style={{margin: '1.5em'}}>
            <button style={{color: "white", fontWeight: '700', backgroundColor: 'black', borderRadius: '3px', float: 'right', height: '2em', padding: '9px 20px 24px 20px', letterSpacing: '2px'}}>SUBMIT</button>
          </div>
        </form>
      </div>
  )}
}

export default UserForm;

//
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

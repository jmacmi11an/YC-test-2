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
      <div style={{height: '300px', width: '500px', maxWidth: '46%', display: 'inline-block', padding: '1em', fontFamily: 'montserrat'}}>
        <form style={{margin: '3em', backgroundColor: '#ddd', padding: '1em'}}>

          <div style={{margin: '1em', width: "40%", display: "inline-block"}}>
            <label for="firstName">First name</label>
            <input name="firstName" value={this.state.value} onChange={this.handleChange} type="text" id="fname" required/>
          </div>

          <div style={{margin: '1em', width: "40%", display: "inline-block"}}>
            <label for="lname">Last name</label>
            <input name="lastName" value={this.state.value} onChange={this.handleChange} type="text" id="lname" required/>
          </div>

          <div style={{margin: '1em', }}>
            <label for="email">Email address</label>
            <input style={{width: '100%'}} name="email" value={this.state.value} onChange={this.handleChange} type="email" id="email" required/>
          </div>

          <button style={{color: "white", backgroundColor: 'black', borderRadius: '4px', }}>SUBMIT</button>
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

import React from 'react';


// might extend React.Component instead //
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event)
  }

  render() {
    return (
      <div style={{backgroundColor: 'green', marginRight: '3em', height: '300px', width: '500px', display: 'block'}}>
        <form style={{marginRight: '3em', height: '400px', width: '500px'}}>

          <label for="firstName">First name</label>
          <input value={this.state.value} handleChange={this.handleChange} type="text" id="fname" name="fname" required/>

          <label for="lname">Last name</label>
          <input type="text" id="lname" name="lname" required/>

          <label for="email">Email address</label>
          <input type="text" id="email" name="email" required/>

          <button>SUBMIT</button>
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

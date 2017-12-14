import React from 'react';
import {register} from '../../api'
import Header from '../Header/Header';

class Register extends React.Component {
  state = { // set state can use in class component only
    firstname : "",
    lastname : "",
    username:"" ,
    password:"",
    email:"",

  }


onTextChange = event => { 
  const name = event.target.name
  const value = event.target.value;
  this.setState({ 
    [name]: value 
  })
}

onSubmit = event => {
  event.preventDefault() 
  register(this.state.firstname,this.state.lastname,this.state.username,this.state.password,this.state.email,this.state.tel)
  .then(data => {
    console.log(data);
 if (data.status === 200) {
      this.props.history.replace('/login') 
   }
  })
}



  render() {
    return (
      <div className="main">
      <Header/>
        <div>
          <form onSubmit={this.onSubmit}>
          <table>
            <tr>
              <td>
                <input type="text" name="firstname" placeholder="firstname" value={this.state.firstname} onChange={this.onTextChange} /><br />
                <input type="text" name="lastname" placeholder="lastname" value={this.state.lastname} onChange={this.onTextChange}/><br />
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onTextChange}/><br />
                <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.onTextChange}/><br />
                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onTextChange}/><br />


                
              </td>
            </tr>
            <div>
              <button type='submit'>เสนอ</button>
            </div>
          </table></form>
        </div>

      </div>
    );
  }
}

export default Register;

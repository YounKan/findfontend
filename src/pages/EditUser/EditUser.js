import React from 'react';
import Header from '../Header/Header';
import { Segment } from 'semantic-ui-react'
import { editprofile,find,getedituser } from '../../api'

class EditUser extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: ""
}

  getUser = () => {
    getedituser().then(post => this.setUser(post))
      .catch(err => console.error('Something went wrong.'))
  }

  componentDidMount() { // when render finish call is func
    this.getUser();
 }

 onTextChange = event => {
  console.log(event.target.value)
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
      [name]: value
  })
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value })
}

setUser = (user) => {
  console.log(user)
  this.setState({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email
  })
}

  onSubmit = event => {
    event.preventDefault() // no refresh
    editprofile(this.state.firstName, this.state.lastName, this.state.username, this.state.password, this.state.email)
      .then(data => {
        if (data.status === 200) {
          window.location.reload();
        } else {
          console.log('ey')
        }
      })
  }


  render() {
    return (
      <div >
        < Header />
        <div class="content">
        <form onSubmit={this.onSubmit}>
          <table>
            <tr>
              <td>
                <input type="text" name="firstName" placeholder="firstName" value={this.state.firstName} onChange={this.onTextChange} /><br />
                <input type="text" name="lastName" placeholder="lastName" value={this.state.lastName} onChange={this.onTextChange}/><br />
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

export default EditUser;

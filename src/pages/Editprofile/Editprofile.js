import React from 'react';
import './Editprofile.css';
import Header from '../Header/Header';
import { Segment } from 'semantic-ui-react'
import { editprofile,find } from '../../api'

class Profile extends React.Component {
  constructor() {
    super();
    
    this.state = {
       post: []
  };
}

  getUser = () => {
    find().then(post => this.setState({ post }))
      .catch(err => console.error('Something went wrong.'))
  }

  componentDidMount() { // when render finish call is func
    this.getUser();
 }

 onTextChange = event => { 
  const name = event.target.name
  const value = event.target.value;
  this.setState({ 
    [name]: value 
  })
}

  onSubmit = event => {
    event.preventDefault() // no refresh
    editprofile(this.state.firstname, this.state.lastname, this.state.username, this.state.password, this.state.email)
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
                <input type="text" name="firstname" placeholder="firstname" value={this.state.post.firstName} onChange={this.onTextChange} /><br />
                <input type="text" name="lastname" placeholder="lastname" value={this.state.post.lastName} onChange={this.onTextChange}/><br />
                <input type="text" name="username" placeholder="username" value={this.state.post.username} onChange={this.onTextChange}/><br />
                <input type="text" name="password" placeholder="password" value={this.state.post.password} onChange={this.onTextChange}/><br />
                <input type="text" name="email" placeholder="email" value={this.state.post.email} onChange={this.onTextChange}/><br />


                
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

export default Profile;

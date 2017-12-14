import React from 'react';
import { find } from '../../api'
import Header from '../Header/Header';
import { Button } from 'semantic-ui-react'

const user  = localStorage.getItem('username');
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
    this.getUser()

  }


  render() {
    console.log(this.state.username)

    return (
      <div>
        < Header />
        <div role="list" class="ui divided relaxed list">
          <div class="ui horizontal segments">
            <div class="ui segment">

              <li class="header">USERNAME :{this.state.post.username} </li><br />
              <li class="header">FIRST NAME {this.state.post.firstName}</li><br />
              <li class="header" >LAST NAME {this.state.post.lastName}</li><br />
              <li class="header">E-MAIL{this.state.post.email}</li><br />
            </div>
            <div class="ui segment"><a href="/editprofile">< Button right basic color='pink'>EDIT PROFILE</Button></a></div>
          </div>


        </div>
        <br></br>

      

      </div>


    );
  }
}

export default Profile;

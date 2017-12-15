import React from 'react';
import Header from '../Header/Header';
import { Segment } from 'semantic-ui-react'
import { editprofile,find,getedituser } from '../../api'

class EditTopic extends React.Component {
  state = {
    title:'',
    content: '',
    author: ''
}

  getUser = () => {
    getedittopic().then(post => this.setUser(post))
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
    title: user.title,
    content: user.content,
    author: user.author,

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
                <input type="text" name="firstName" placeholder="firstName" value={this.state.title} onChange={this.onTextChange} /><br />
                <input type="text" name="lastName" placeholder="lastName" value={this.state.content} onChange={this.onTextChange}/><br />
                <input type="text" name="username" placeholder="username" value={this.state.author} onChange={this.onTextChange}/><br />



                
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

export default EditTopic;

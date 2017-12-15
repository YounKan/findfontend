import React from 'react';
import Header from '../Header/Header';
import { publishPost, getAlltopic,deleteuser,getUser } from '../../api'
import {Link} from 'react-router-dom';

class AdminTopic extends React.Component {

  state = {
    firstName:'',
    lastName:'',
    username: '',
    password: '',
    email:'',
    allPosts: []
  }
  
  onTextChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  go = event => {
    this.props.history.replace('/home') 
  }

  getPosts = () => {
    getUser()
      .then(data => this.setState({ allPosts: data }))
      .catch(err => console.error('Something went wrong.'))
  }

  signout = (event) => {
    localStorage.clear()
    this.props.history.replace('/')
    console.log(this.props);
    window.location.reload()
  }

  componentDidMount() {
    this.getPosts()
  }

  onSubmit = event => {
    console.log(this)
    event.preventDefault() // no refresh
    const name = event.target.name 
    console.log(name)
    localStorage.setItem('edituser', name)
    console.log(localStorage.setItem('edituser', name))
          
    this.props.history.replace('/edituser') 
}
onDelete = event => {
  console.log(this)
  event.preventDefault() // no refresh
  const name = event.target.name 
  localStorage.setItem('deleteuser', name)
        deleteuser()
        .then(() => { this.getPosts()  })
        .catch(err => console.error('Something went wrong.'))
        console.log( localStorage.getItem('deleteuser'))
       
}


  render() {
    const posts = this.state.allPosts
    return (
      <div style={{ width: '800px' }}>
        <h2 className="ui center aligned icon header">
          <i className="circular teal users icon" />
          Welcome again, {localStorage.getItem('username')}
        </h2>

        {posts.length >= 0 ?
          posts.map(post =>


<tr>
          <td>
          {post.firstName}
          </td>
          <td>
           {post.lastName}
          </td>
          <td>
           {post.username}
          </td>
          <td>
         {post.email}
          </td>
          <td>
          <input type="submit" value="comment" className="btn btn-danger" name={post.username} onClick={this.onSubmit}/>
        </td>
        <td>
          <input type="submit" value="delete" className="btn btn-danger" name={post.username} onClick={this.onDelete}/>
        </td>

        </tr>


          )
          : null
        }
      </div>
    )
  }
}

export default AdminTopic
import React from 'react';
import {register} from '../../api'
import Header from '../Header/Header';
import { publishPost, getAlltopic } from '../../api'
import {Link} from 'react-router-dom';

class Topic extends React.Component {

  

  state = {
    title: '',
    content: '',
    author:'',
    room:'',
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
    getAlltopic()
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
          localStorage.setItem('topic', name)   //keep username to localstroage    
          console.log(name)
          this.props.history.replace('/topic/id/') 
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
          Published by: {post.author}
          </td>
          <td>
          Title: {post.title}
          </td>
          <td>
          Title:  {post.content}
          </td>
          <td>
          Title: {post.room}
          </td>
          <td>
          Title:  {post.time}
          </td>
          <td>
          <input type="submit" value="comment" className="btn btn-danger" name={post._id} onClick={this.onSubmit}/>
        </td>
          <td>
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Delete" className="btn btn-danger"/>
            </form>
          </td>
        </tr>


          )
          : null
        }
      </div>
    )
  }
}

export default Topic
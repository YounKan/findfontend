import React from 'react';
import { findtopic,publishPost,getAllPosts } from '../../api'
import Header from '../Header/Header';
import { Button } from 'semantic-ui-react'


class Topic extends React.Component {

  state = {
    content: '',
    author: '',
    post: [],
    allPosts:[]
  }
  
  

  getUser = () => {
    findtopic().then(post => this.setState({ post }))
      .catch(err => console.error('Something went wrong.'))

      

  }
  componentDidMount() { // when render finish call is func
    this.getUser()
    this.getPosts()

  }
  submitPost = event => {
    event.preventDefault()

    publishPost(this.state.post._id, this.state.content,localStorage.getItem('username'))
      .then(() => { this.getPosts()  })
      
  }

  getPosts = () => {
    getAllPosts()
    .then(data => this.setState({ allPosts: data }))
    .catch(err => console.error('Something went wrong.'))
      console.log("ccdffddd")
  }

  onTextChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  render() {
    console.log(this.state)
    const posts = this.state.allPosts
    return (
      
      <div>
        < Header />
        <div role="list" class="ui divided relaxed list">
          <div class="ui horizontal segments">
            <div class="ui segment">

              <li class="header">title :{this.state.post.title} </li><br />
              <li class="header">title :{this.state.post.content} </li><br />
              <li class="header">title :{this.state.post.author} </li><br />
              
            </div>
            
          </div>


        </div>
        <br></br>
        {posts.length >= 0 ?
          posts.map(post =>
            <div className='ui segment'>
              <p>Published by: {post.author}</p>
              <div>
                Title: {post.title}
              </div>
              <div>
                {post.content}
              </div>
            </div>
          )
          : null
        }
        <form class='ui form' onSubmit={this.submitPost}>
        <div className='field'>
          </div>
          <div className='field'>
            <textarea
              name='content'
              placeholder='Write your post...'
              value={this.state.content}
              onChange={this.onTextChange} />
            <button className='ui primary button' style={{ margin: '16px 0' }}>Publish Post</button>
          </div>
        </form>


      </div>


    );
  }
}

export default Topic;

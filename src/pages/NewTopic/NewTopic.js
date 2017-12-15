import React from 'react'
import localStorage from 'localStorage'
import Header from '../Header/Header';
import { newTopic} from '../../api'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'


class NewTopic extends React.Component {
  state = {
    title: '',
    content: '',
    author: localStorage.getItem('username'),
    room:'ccccccc'
  }

  onTextChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }



/*********************comment********************** */
 /* submitPost = event => {
    event.preventDefault() 
    commentTopic(this.state.title,this.state.content,this.state.author)
    .then(data => {
      console.log(data);
   if (data.status === 200) {
    this.props.history.replace('/topic') 
     }
    })
  }*/

/*********************comment********************** */


/*********************topic********************** */
submitPost = event => {
  event.preventDefault() 
  newTopic(this.state.title,this.state.content,this.state.author,this.state.room)
  .then(data => {
    console.log(data);
 if (data.status === 200) {
  this.props.history.replace('/alltopic') 
   }
  })
}

/*********************topic********************** */


  render() {
    return (
      <div style={{ width: '800px' }}>
        <h2 className="ui center aligned icon header">
          <i className="circular teal users icon" />
          Welcome again, {localStorage.getItem('username')}
        </h2>

        <form class='ui form' onSubmit={this.submitPost}>
          <div className='field'>
            <input type='text' name='title' value={this.state.title} placeholder='Title' onChange={this.onTextChange}  />
          </div>
          <div>
    
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

        <input type="radio" name="room" value={this.state.room} onClick={this.onTextChange} />






        <button className="ui button">Sign out</button>
      </div>
    )
  }
}

export default NewTopic
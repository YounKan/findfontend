import React from 'react';
import {getAllItem} from '../../api'
import Header from '../Header/Header';
class Post extends React.Component {
  state = {
    allPosts: [],
    cate: ""
  }

  handleChange = (value) => {
    this.setState({ cate : value })
  }

  getItems = () => {
    getAllItem()
      .then(data => this.setState({ allPosts: data }))
      .catch(err => console.error('Something went wrong.'))
  }

  componentDidMount() { // when render finish call is func
    this.getItems()
  }

  render() {
    const posts = this.state.allPosts

    return (
      <div className="main">
        <Header/>
        <div>
          <input type="radio" name="cate" value="shirt" onClick={(e) => this.handleChange('shirt')}/> เสื้อผ้า<br />
          <input type="radio" name="cate" value="IT" onClick={(e) => this.handleChange('IT')} /> it<br />
          <input type="radio" name="cate" value="on" onClick={(e) => this.handleChange('on')}  /> other<br />
          <input type="radio" name="cate" value="all" onClick={(e) => this.handleChange('')}  /> All
        </div>
        {
          posts.length >= 0
          ? //in { } is logic
            posts.map(post =>
              post.category==this.state.cate || this.state.cate === ""
              ?
              (<div className='ui segment'>
                <p>Published by: {post.name}</p>
                <p>description: {post.description}</p>
                <p>look: {post.look}</p>
                <p>send: {post.send}</p>
                <p>category: {post.category}</p>
              </div>)
              :
              null
            )
          :
          null
        }
      </div>
    );
  }
}

export default Post;

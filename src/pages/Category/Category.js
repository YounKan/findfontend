import React from 'react';
import Header from '../Header/Header';
import {getAllItem} from '../../api'
import { Grid, Icon ,Label,Menu,Segment} from 'semantic-ui-react'

class Home extends React.Component {
  state = { 
    activeItem: 'bio',
    allPosts: [],
    cate: ""
   }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
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
    const { activeItem } = this.state
    const posts = this.state.allPosts
    return (
      <div>
        < Header />
       
        <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item active={activeItem === 'shirt'} name="shirt" class="cate" value="shirt" onClick={(e) => this.handleChange('shirt')}/>
            <Menu.Item  active={activeItem === 'IT'} name="IT" class="cate" value="IT" onClick={(e) => this.handleChange('IT')} />
            <Menu.Item  active={activeItem === 'on'} name="on" class="cate" value="on" onClick={(e) => this.handleChange('on')} />
            <Menu.Item  active={activeItem === 'all'} name="all" class="cate" value="all" onClick={(e) => this.handleChange('all')} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
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
          </Segment>
        </Grid.Column>
      </Grid>
        
      </div>


    );
  }
}

export default Home;

import React from 'react';  
import { Menu ,Image} from 'semantic-ui-react';
export default class Header extends React.Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  signout = event => {
    localStorage.clear();
    console.log(this.props);
   window.location.reload()
  }
  
  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
          <Menu.Item color='red' href ="/home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='category' href ="/category" active={activeItem === 'category'} onClick={this.handleItemClick} />
          {!localStorage.getItem('username') ? (   <Menu.Menu position='right'>
          <Menu.Item  href='/register' name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} />
          <Menu.Item  href='/login' name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
           ) : (  <Menu.Menu position='right'>    
           <Menu.Item  href='/profile' name={localStorage.getItem('username')} active={activeItem === 'profile'} onClick={this.handleItemClick} />
           <Menu.Item href='/upload' name='upload' active={activeItem === 'upload'} onClick={this.handleItemClick} />
           <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.signout} /> </Menu.Menu>
           )}   
       </Menu>
    )
  }
}
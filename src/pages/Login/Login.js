import React from 'react';
import { login } from '../../api'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Form,Button} from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log(response);
}

class Login extends React.Component {
  state = { // set state can use in class component only
    username: '',
    password: ''
  }

  onTextChange = event => { // can use for all that have name and value
    console.log(this)
    const name = event.target.name
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    console.log(this)
    event.preventDefault() // no refresh
    if(this.state.username ===''){
      /******************************************************************************************** */
      if(this.state.password === ''){
           /******************************************************************************************** */
      }
    }else{
    login(this.state.username, this.state.password)
      .then(data => {
        if (data.status === 200) {
          console.log(this)
          localStorage.setItem('username', this.state.username)   //keep username to localstroage    
          this.props.history.replace('/home') // can use when import to file routes // redirect
        }
      })
    }
}

  render() {
    return  ( <div>
      <Header/>
          <Form className='ui large form' onSubmit={this.onSubmit}>   

          <Form.Field>
      <label>Last Name</label>
      <Form.Input  type='text'  name='username' placeholder='Username'  value={this.state.username} onChange={this.onTextChange} />      

    </Form.Field>
              
              
              <Form.Input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onTextChange} /> 
            <Button type='submit' className='ui teal fluid button'>Log in</Button>
     
          </Form>

          <FacebookLogin
 appId="1088597931155576"
 autoLoad={true}
 fields="name,email,picture"
 //onClick={componentClicked}
 callback={responseFacebook} />
 </div>

    );
  }
}

export default Login;
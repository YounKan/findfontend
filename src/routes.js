import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from './pages/Index/Index'
import Additem from './pages/Additem/Additem'
import Post from './pages/Post'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/Editprofile/Editprofile'
import Item from './pages/Item/Item'


const Routes = () => {
    return (
<Switch>
<Route exact path="/" component={Index} />
<Route exact path="/home" component={Home} />
<Route exact path='/register' component={Register} />
<Route exact path="/login" component={Login} />
<Route exact path="/category" component={Category} />


{!localStorage.getItem('username') ? (
  <Redirect to="/login" />
) : (
  <Switch>
    <Route exact path='/item' component={Item} />
    <Route exact path='/upload' component={Additem} />
    <Route exact path='/post' component={Post} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/editprofile" component={EditProfile} />
  </Switch>
)}
</Switch>
    )
}
export default Routes

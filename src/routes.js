import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from './pages/Index/Index'
import Additem from './pages/Additem/Additem'
import Post from './pages/Post'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Topic from './pages/Topic/Topic'
import NewTopic from './pages/NewTopic/NewTopic'
import AllTopic from './pages/AllTopic/AllTopic'
import AdminUser from './pages/AdminUser/AdminUser'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/EditProfile/EditProfile'
import EditUser from './pages/EditUser/EditUser'
import AdminTopic from './pages/AdminTopic/AdminTopic'
import Item from './pages/Item/Item'


const Routes = () => {
    return (   
<Switch>
<Route exact path="/" component={Index} />
<Route exact path="/home" component={Home} />
<Route exact path='/register' component={Register} />
<Route exact path="/login" component={Login} />
<Route exact path="/topic/id/" component={Topic} />
<Route exact path="/NewTopic" component={NewTopic} />
<Route exact path="/alltopic" component={AllTopic} />
<Route exact path="/adminuser" component={AdminUser} />
<Route exact path="/admintopic" component={AdminTopic} />
<Route exact path="/edituser" component={EditUser} />


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

import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// Pages
import Users from './user/pages/Users'
import NewPlaces from './places/pages/NewPlaces'
import UserPlaces from './places/pages/UserPlaces'
import NavBar from './shared/Navigation/NavBar'

const Routes = () => {
    return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/places/new" component={NewPlaces} exact/>
        <Route path="/:userId/places" component={UserPlaces} exact/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
    )
}

export default Routes

import React, {useEffect} from "react";
import {Router, navigate} from "@reach/router";
import AdminDashboard from '../pages/adminDashboard.js';
import MemberDashboard from '../pages/memberDashboard';
import Login from '../pages/login'
import Signup from '../pages/signup'
import NotFound from '../pages/notFound'
import {StateProvider, useStateValue} from '../contexts/stateContext';

export const Routes = () => {

  const [
    {
      auth
    }
  ] = useStateValue();

  console.log("Auth in route provider", auth)

  if (auth.status && auth.user.role == "ADMIN") {
    // Admin protected routes
    return <Router>
      <AdminDashboard path="/"></AdminDashboard>
      <AdminDashboard path="/admin" default></AdminDashboard>
    </Router>;
  } else if (auth.status && auth.user.role == "MEMBER") {
    // member protected routes
    return <Router>
      <MemberDashboard path="/"></MemberDashboard>
      <MemberDashboard path="/member"></MemberDashboard>
      <MemberDashboard default></MemberDashboard>
    </Router>;
  } else {
    return <Router>
      <Signup path="/signup"></Signup>
      <Login path="/login"></Login>
      <Login default></Login>
    </Router>;
  }

}
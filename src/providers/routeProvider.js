import React, {useEffect} from "react";
import {Router, navigate} from "@reach/router";
import Chat from '../pages/chat'
import Login from '../pages/login'
import Signup from '../pages/signup'
import NotFound from '../pages/notFound'
import {StateProvider, useStateValue} from '../contexts/stateContext';

export const Routes = () => {

  const [{auth}] = useStateValue();

  if (auth.status) {
    return <Router>
        {/* Have routes that should not be accessible unless authenticated */}
        <Chat path="/"></Chat>
        <Chat default></Chat>
    </Router>;
  }
  return <Router>
    <Signup path="signup"></Signup>
    <Login path="/"></Login>
    <NotFound default></NotFound>
  </Router>
}
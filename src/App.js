import React from 'react';
import {Container} from 'semantic-ui-react'
import './App.css';
// import NavigationBar from './container/navigationBar'
import Chat from './container/chat'

function App() {
  return (
    <div className="wrapper">
      {/* <NavigationBar className=""> */}
      <Container fluid className="wrapper" textAlign="left">
        <Chat></Chat>
      </Container>
      {/* </NavigationBar> */}

    </div>
  );
}

export default App;

/* eslint-disable max-len */

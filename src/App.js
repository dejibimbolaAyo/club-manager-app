import React, {useReducer, useEffect, useState} from 'react';
import {useLocalStorage} from './hooks/useLocalStorage';
import {Container, Grid, Placeholder} from 'semantic-ui-react'
import {Router, navigate} from "@reach/router"
import {ToastProvider} from 'react-toast-notifications'
import './App.css';
import {AuthProvider} from './providers/authProvider'
import {mainReducer, initialMainState} from './reducers/MainReducer';
import {StateProvider, useStateValue} from './contexts/stateContext';
import {Routes} from './providers/routeProvider';

function App() {

  const [isLoading,
    setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, [])
  return (
    <div>
      <StateProvider initialState={initialMainState} reducer={mainReducer}>
        <ToastProvider autoDismissTimeout={4000}>
          <AuthProvider>
            <Routes></Routes>
            {isLoading
              ? <div>
                  <Grid
                    textAlign='center'
                    style={{
                    height: '100vh'
                  }}
                    verticalAlign='middle'>
                    <Grid.Column
                      style={{
                      maxWidth: 450
                    }}>
                      <h4>App is loading</h4>
                      <Placeholder>
                        <Placeholder.Header>
                          <Placeholder.Line length={'full'}/>
                        </Placeholder.Header>
                      </Placeholder>
                    </Grid.Column>
                  </Grid>
                </div>
              : <div></div>}
          </AuthProvider>
        </ToastProvider>
      </StateProvider>
    </div>
  );
}

export default App;
import React, {useReducer, useEffect, useState, Children} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {authActions, initialAuthState} from '../reducers/AuthReducer'
import {useStateValue} from '../contexts/stateContext';


import {navigate} from "@reach/router"

export const AuthProvider = ({children}) => {

  const [isLoading,
    setIsLoading] = useState(true);
    
  const [{auth},
    dispatch] = useStateValue({initialAuthState})

  const [authUser] = useLocalStorage('chatAuthUser', {
    status: false,
    user: {},
    token: ""
  })

  useEffect(() => {
    if (authUser && authUser.status === true) {
      dispatch({
        type: authActions.setAuthDetails,
        data: {
          status: true,
          user: authUser.user,
          token: authUser.token
        }
      })
      setIsLoading(false)
    }
  }, [authUser])

  return <div>
      {children}
  </div>
}

export const initialAuthState = {
  status: false,
  user: {},
  token: ""
}

export const authActions = {
  requestAuth: "REQUEST_AUTH",
  setLoggedOut: "SET_LOGGED_OUT",
  setAuthDetails: "SET_AUTH_DETAILS",
  unsetAuthDetails: "UNSET_AUTH_DETAILS",
  resetToken: "RESET_TOKEN",
  initiateRequest: "INITIATE_REQUEST",
  completeRequest: "COMPLETE_REQUEST"
}

const authReducer = (state, action) => {
  switch (action.type) {
    case authActions.setAuthDetails:
      const newState = {
        ...state,
        status: true,
        user: action.data.user,
        token: action.data.token
      }
      return newState

    case authActions.resetToken:
      return {
        ...state,
        initialAuthState
      }

    case authActions.setLoggedOut:
      return {
        ...state,
        initialAuthState
      }

  }
}

export default authReducer

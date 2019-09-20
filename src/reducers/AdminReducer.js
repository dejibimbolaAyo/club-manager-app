// Initiate request
// complete request
// Update status
export const initialAdminState = {
  status: false,
  user: {},
  token: ""
}

export const adminActions = {
  requestAuth: "REQUEST_AUTH",
  setLoggedOut: "SET_LOGGED_OUT",
  setAuthDetails: "SET_AUTH_DETAILS",
  resetToken: "RESET_TOKEN",
  initiateRequest: "INITIATE_REQUEST",
  completeRequest: "COMPLETE_REQUEST"
}

const adminReducer = (state, action) => {
  switch (action.type) {
    case adminActions.setAuthDetails:
      const newState = {
        ...state,
        status: true,
        user: action.data.user,
        token: action.data.token
      }
      return newState

    case adminActions.resetToken:
      return {
        ...state,
        initialAdminState
      }

    case adminActions.setLoggedOut:
      return {
        ...state,
        initialAdminState
      }

  }
}

export default adminReducer

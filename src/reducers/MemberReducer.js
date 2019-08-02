const _ = require('lodash')

export const initialMemberState = {
    count: 0,
    list: [
        {
            name: "Abimbola Ayodeji"
        }
    ],
    isLoading: true,
}

export const memberActions = {
    loadFriendRequest: "LOAD_NEW_FRIEND_REQUEST",
    loadAllMembers: "LOAD_ALL_MEMBERS",
    resetMembers: "RESET_MEMBERS",
    acceptFriendRequest: "ACCEPT_FRIEND_REQUEST",
    sendFriendRequest: "SEND_FRIEND_REQUEST",
    declineFriendRequest: "DECLINE_FRIEND_REQUEST",
    initiateRequest: "INITIATE_REQUEST",
    completeRequest: "COMPLETE_REQUEST"
}


// Load new friend request
// Load all members
// Accept friend request
// Send friend request
// Decline friend request
// Initiate request
// Complete request

const memberReducer = (state, action) => {
    switch (action.type) {
        case memberActions.loadAllMembers:
            console.log("WHat got to reducer", action.data)
            return {...state, list:action.data}
            //  return state;
            // return Object.assign({}, state, {list:members.list})
            // return state
        case memberActions.resetMembers:
            return Object.assign({}, initialMemberState)
        case memberActions.acceptFriendRequest:
            console.log("Accept friend request")
            return state;
        case memberActions.sendFriendRequest:
            console.log("Send friend request")
            return state;
        case memberActions.declineFriendRequest:
            console.log("Decline friend request")
            return state;
        case memberActions.isLoading:
            return {...state, isLoading: action.data};
        case memberActions.completeRequest:
            console.log("Complete request")
            return state;
        default:
            return state;
    }
}

export default memberReducer;
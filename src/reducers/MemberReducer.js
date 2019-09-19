// const _ = require('lodash')

export const initialMemberState = {
    count: 0,
    list: []
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

let count = 0
const memberReducer = (state, action) => {
    switch (action.type) {
        case memberActions.loadAllMembers:
            return {...state, list:action.data}

        case memberActions.loadFriendRequest:
            const oldMembers = state.list
            const newMember = action.data

            let updatedMembers = []

            if(oldMembers.some((oldMember) => oldMember._id === newMember._id)) {
                updatedMembers = oldMembers
            } else {
                updatedMembers = oldMembers
                updatedMembers.push(newMember)
            }

            return {...state, list: updatedMembers}

        case memberActions.resetMembers:
            return {...state, initialMemberState}

        case memberActions.acceptFriendRequest:
            return {...state, list: state.list.filter((member) => member._id !== action.data)}

        case memberActions.sendFriendRequest:
            console.log("Send friend request")
            return state;

        case memberActions.declineFriendRequest:
            return {...state, list: state.list.filter((member) => member._id !== action.data)}

        case memberActions.isLoading:
            return {...state, isLoading: action.data};

        case memberActions.completeRequest:
            console.log("Complete request")
            return state;
    }
}

export default memberReducer;
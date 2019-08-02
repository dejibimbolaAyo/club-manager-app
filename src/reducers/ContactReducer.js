export const initialState = {
    friendRequests: [
        {
            name: "Adebola Ayobami",
            bio: ""
        },
        {
            name: "Oluwasegun Lanre",
            bio: "A fun lving guy"
        },
        {
            name: "Akogun Olumide",
            bio: "Not so outgoing"
        }
    ],
} 
// Load contact list
// Fetch new contact status
// Fetch friend requests
// Initiate request
// Complete request

export const memberActions = {
    loadFriendRequest: "LOAD_NEW_FRIEND_REQUEST",
    loadAllMembers: "LOAD_ALL_CONTACTS",
    initiateRequest: "INITIATE_REQUEST",
    completeRequest: "COMPLETE_REQUEST"
}

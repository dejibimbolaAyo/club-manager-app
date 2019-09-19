// const _ = require('lodash')

export const initialMemberState = {
  count: 0,
  users: [],
  user: {
    memberProfile: {},
    invitation: []

  }
}

export const memberActions = {
  acceptInviation: "ACCEPT_INVITATION_REQUEST",
  rejectInviation: "REJECT_INVITATION_REQUEST",
  updateMemberProfile: "UPDATE_MEMBER_PROFILE_REQUEST",
  getUser: "GET_USER_REQUEST",
  getUsers: "GET_USERS_REQUEST"
}

const memberReducer = (state, action) => {
  switch (action.type) {
    case memberActions.getUsers:
      return {
        ...state,
        users: action.data
      }

    case memberActions.getUser:
      return {
        ...state,
        user: action.data
      }
    // case memberActions.getUser:
    //   const oldMembers = state.list;
    //   const newMember = action.data;
    //   let updatedMembers = []
    //   if (oldMembers.some((oldMember) => oldMember._id === newMember._id)) {
    //     updatedMembers = oldMembers
    //   } else {
    //     updatedMembers = oldMembers
    //     updatedMembers.push(newMember)
    //   }
    //   return {
    //     ...state,
    //     list: updatedMembers
    //   }

    case memberActions.updateMemberProfile:
      return {
        ...state,
        initialMemberState
      }

    case memberActions.acceptInviation:
      return {
        ...state,
        invitation: state
          .invitation
          .filter((invite) => invite.invitationCode !== action.data)
      }

    case memberActions.declineInviation:
      return {
        ...state,
        invitation: state
          .invitation
          .filter((invite) => invite.invitationCode !== action.data)
      }
  }
}

export default memberReducer;
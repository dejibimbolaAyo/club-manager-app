// import React, {useState, useReducer} from 'react'
// import {
//   Button,
//   Card,
//   Image,
//   Grid,
//   Icon
// } from 'semantic-ui-react'
// import {addMemberToContact, declineMemberRequest} from "../services/memberService";
// import memberReducer, {initialMemberState, memberActions} from '../reducers/MemberReducer';

// const MemberRequest = ({member}) => {
//   const [dispatchMember] = useReducer(memberReducer, initialMemberState)
//   const [isAcceptingRequest,
//     setIsAcceptingRequest] = useState(false)
//   const [isDecliningRequest,
//     setIsDecliningRequest] = useState(false)

//   function acceptRequest(memberId) {
//     console.log(memberId)
//     setIsAcceptingRequest(true)
//     addMemberToContact(memberId).then((result) => {
//       dispatchMember({type: memberActions.acceptFriendRequest, data: member})
//       setIsAcceptingRequest(false)
//     }).catch((err) => {
//       setIsAcceptingRequest(false)
//     })
//   }

//   function declineRequest(memberId) {
//     setIsDecliningRequest(true)
//     declineMemberRequest(memberId).then((result) => {
//       dispatchMember({type: memberActions.declineFriendRequest, data: result})
//       setIsDecliningRequest(false)
//     }).catch((err) => { // Call toast
//       setIsDecliningRequest(false)
//     })
//   }

//   return (
//     <Card.Group>
//       <Card raised centered fluid>
//         <Card.Content>
//           <Image
//             floated='right'
//             size='mini'
//             src={member.image || 'http://placeimg.com/640/480/people'}
//             avatar/>
//           <Card.Header>{member.firstName} {member.lastName}</Card.Header>
//           <Card.Meta>{member.status || 'offline'}</Card.Meta>
//           <Card.Description>
//             {member.bio || 'Member has not updated their bio'}
//           </Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//           <Grid stackable className='ui two buttons' columns={2}>
//             <Grid.Row>
//               <Grid.Column width={8}>
//                 <Button
//                   basic
//                   color='green'
//                   onClick={() => acceptRequest(member._id)}
//                   loading={isAcceptingRequest}
//                   disabled={isAcceptingRequest}
//                   animated
//                   floated='left'
//                   icon={'add'}
//                   label='Accept'
//                   labelPosition='left'>
//                 </Button>
//               </Grid.Column>
//               <Grid.Column width={8}>
//                 <Button
//                   basic
//                   color='red'
//                   onClick={() => declineRequest(member._id)}
//                   loading={isDecliningRequest}
//                   disabled={isDecliningRequest}
//                   animated
//                   icon={'remove'}
//                   floated='right'
//                   label='Dismiss'
//                   labelPosition='right'>
//                 </Button>
//               </Grid.Column>
//             </Grid.Row>
//           </Grid>
//         </Card.Content>
//       </Card>
//     </Card.Group>
//   )

// }

// export default MemberRequest;
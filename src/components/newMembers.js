// import React, {useState, useReducer, useEffect} from 'react'
// import {
//   Segment,
//   Placeholder,
//   Grid
// } from 'semantic-ui-react'
// import MemeberRequest from './newMember'
// import {
//   fetchMembers,
//   listenToServerHeartbeat,
//   listenForNewMember
// } from "../services/memberService";
// import memberReducer, {initialMemberState, memberActions} from '../reducers/MemberReducer';

// const NewMembers = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [members, dispatchMember] = useReducer(memberReducer, initialMemberState)

//   useEffect(() => {
//     // Set members is loading
//     setIsLoading(true)
    
//     fetchMembers().then((result) => {
//       dispatchMember({type: memberActions.loadAllMembers, data: result.data})
//     }).catch((err) => {
//       dispatchMember({type: memberActions.resetMembers})

//     })

//     listenForNewMember((member) => {
//       dispatchMember({type: memberActions.loadFriendRequest, data: member.data})
//     });

//     listenToServerHeartbeat((heartBeat) => {
//       console.log("Heart beat", heartBeat)
//     })

//     setIsLoading(false)

//     return () => {
//       dispatchMember({type: memberActions.resetMembers})
//     };
//   }, [members.isLoading]);

//   return (
//   <> {members.list && members.list.length > 0 && !isLoading
//       ? members
//         .list
//         .map((member, index) => {
//           return <MemeberRequest member={member} key={index}></MemeberRequest>
//         })
//       : <Grid columns={1}>
//           <Grid.Row>
//             <Grid.Column>
//               <Segment raised>
//                 <Placeholder>
//                   <Placeholder.Header image>
//                     <Placeholder.Line/>
//                     <Placeholder.Line/>
//                   </Placeholder.Header>
//                   <Placeholder.Paragraph>
//                     <Placeholder.Line length='medium'/>
//                     <Placeholder.Line length='short'/>
//                   </Placeholder.Paragraph>
//                 </Placeholder>
//               </Segment>
//             </Grid.Column>
//           </Grid.Row>
//           <Grid.Row>
//             <Grid.Column>
//               <Segment raised>
//                 <Placeholder>
//                   <Placeholder.Header image>
//                     <Placeholder.Line/>
//                     <Placeholder.Line/>
//                   </Placeholder.Header>
//                   <Placeholder.Paragraph>
//                     <Placeholder.Line length='medium'/>
//                     <Placeholder.Line length='short'/>
//                   </Placeholder.Paragraph>
//                 </Placeholder>
//               </Segment>
//             </Grid.Column>
//           </Grid.Row>
//           <Grid.Row>
//             <Grid.Column>
//               <Segment raised>
//                 <Placeholder>
//                   <Placeholder.Header image>
//                     <Placeholder.Line/>
//                     <Placeholder.Line/>
//                   </Placeholder.Header>
//                   <Placeholder.Paragraph>
//                     <Placeholder.Line length='medium'/>
//                     <Placeholder.Line length='short'/>
//                   </Placeholder.Paragraph>
//                 </Placeholder>
//               </Segment>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//   }</>
//   )
// }

// export default NewMembers;
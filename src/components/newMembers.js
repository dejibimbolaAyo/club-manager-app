import React, {useState, useReducer, useEffect} from 'react'
import {
  Button,
  Card,
  Image,
  Segment,
  Message,
  Placeholder,
  Grid
} from 'semantic-ui-react'
import {fetchMembers, listenForMembers} from "../services/memberService";
import memberReducer, {initialMemberState, memberActions} from '../reducers/MemberReducer';

const NewMembers = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [members, dispatchMember] = useReducer(memberReducer, initialMemberState)

  function acceptRequest(member) {
    dispatchMember({
      type: memberActions.acceptFriendRequest,
      data: {
        member: member
      }
    })
  }

  function declineRequest(member) {
    dispatchMember({
      type: memberActions.declineFriendRequest,
      data: {
        member: member
      }
    })
  }
  
  useEffect(() => {
    // Set members is loading
    console.log("This is mounted")
    fetchMembers().then((result) => {
      dispatchMember({
        type: memberActions.loadAllMembers,
        data: result.data
      })
    })
    
    listenForMembers((members) => console.log("Emitted members", members));

    dispatchMember({
      type: memberActions.isLoading,
      data: false
    })
    return () => {
      console.log("This is unmounting")
      dispatchMember({
        type: memberActions.resetMembers,
      })
    };
  }, []);

  return (
    <>
    {console.log("Awon members agains", members)}

      {members.list && members.list.length > 0 && !members.isLoading
        ? members.list.map((member, index) => {
          return<Card.Group key={index}>
            <Card raised>
            <Card.Content>
              <Image floated='right' size='mini' src={member.image || 'http://placeimg.com/640/480/people'} avatar/>
              <Card.Header>{member.firstName} {member.lastName}</Card.Header>
              <Card.Meta>{member.status || 'offline'}</Card.Meta>
              <Card.Description>
                {member.bio || 'Member has not updated their bio'}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' onClick={() => acceptRequest(member._id)}>
                  Add as Friend
                </Button>
                <Button basic color='red' onClick={() => declineRequest(member._id)}>
                  Dismiss
                </Button>
              </div>
            </Card.Content>
          </Card>
          </Card.Group>
        })
        : <Grid columns={1} >
          <Grid.Row>
            <Grid.Column>
              <Segment raised>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='medium'/>
                    <Placeholder.Line length='short'/>
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Message>
                No new member
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      }
    </>
  )
}

export default NewMembers;

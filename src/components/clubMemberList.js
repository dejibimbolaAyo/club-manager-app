import React, {useState} from 'react'
import {Message, Segment} from 'semantic-ui-react'

const ClubMemberList = () => {
  const [clubMemberList] = useState([]);
  return (
    <Segment className="club-list-wrapper">
        {clubMemberList.length > 0
          ? clubMemberList.map((clubMember) => {
            return <Message info>
              <Message.Header>{`${clubMember.firstName} ${clubMember}`}</Message.Header>
              <p>{clubMember.message}</p>
            </Message>
          })
          : <>
          <Message info>
            <Message.Header>No Member</Message.Header>
            <p>Add new members to your club by sending invitation to them.</p>
          </Message>
          </>
        }
    </Segment>
  )
}

export default ClubMemberList;

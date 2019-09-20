import React, {useState} from 'react'
import {Card, Image, Container} from 'semantic-ui-react'
import StatusForm from './statusForm'

import {useStateValue} from '../contexts/stateContext'

const StatusBar = () => {
  const [isLoading, setIsLoading] = useState(true)

  const [{auth}] = useStateValue()

  const user = auth.user
  const profile = user.profile[0]

  return <Container textAlign='center'>
    <Card centered fluid>
      <Card.Content>
        <Image centered src={profile.pictureUrl || 'http://placeimg.com/640/480/people'} avatar/>
      </Card.Content>
      <Card.Content>
        <Card.Header>{`${profile.firstName} ${profile.lastName}` || 'No name'}</Card.Header>
        <Card.Meta>{user.email || 'No email'}</Card.Meta>
        <Card.Description>
          {user.role || 'No bio'}
        </Card.Description>
      </Card.Content>
    </Card>
    <StatusForm></StatusForm>
  </Container>
}

export default StatusBar;

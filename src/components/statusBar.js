import React, {useState, useEffect} from 'react'
import {Card, Image, Container} from 'semantic-ui-react'
import StatusForm from './statusForm'

const StatusBar = () => {
  const [status, setStatus] = useState({})
  const [user, setUser] = useState({})

  // useEffect(() => {
  //   console.log("Using Effect")
  //   return () => {
  //     console.log("Still using effect, but component is exiting")
  //   }
  // })

  return <Container textAlign='center'>
    <Card centered fluid>
      <Card.Content>
        <Image centered src={user.image || 'http://placeimg.com/640/480/people'} avatar/>
      </Card.Content>
      <Card.Content>
        <Card.Header>{user.name || 'No name'}</Card.Header>
        <Card.Meta>{user.status || 'Offline'}</Card.Meta>
        <Card.Description>
          {user.bio || 'No bio'}
        </Card.Description>
      </Card.Content>
    </Card>
    <StatusForm></StatusForm>
  </Container>
}

export default StatusBar;

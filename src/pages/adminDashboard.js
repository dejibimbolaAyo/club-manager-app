import React, {useContext, useEffect, useState, useReducer} from 'react'
import {navigate} from '@reach/router'
import {Container, Divider, Segment, Sticky, Button} from 'semantic-ui-react'
import Layout from '../components/layout'
import NewMembers from '../components/newMembers'
import ClubMemberList from '../components/clubMemberList'
import ComposeMessage from '../components/composeMessage'
import ClubList from '../components/clubList'
import StatusBar from '../components/statusBar'
import FriendSearch from '../components/friendSearch';
import FullScreenLoader from '../components/fullScreenLoader'

import {useStateValue} from '../contexts/stateContext'

const leftContent = <div>
  <Container>
    <Divider horizontal>Account</Divider>
    <Segment>
      <StatusBar></StatusBar>
    </Segment>
    <Divider horizontal>Club list</Divider>
    {/* TODO: Merge the functionality of contact search with general member search */}
    <Segment className="contact-list">
      <ClubList></ClubList>
    </Segment>
    <Divider horizontal>Actions</Divider>
    <Segment>
        <Button basic color="blue" icon="create">New Club</Button>
        <Button basic color="green" icon="user">Profile</Button>
        <Button basic color="red" icon="logout">Logout</Button>
      </Segment>
  </Container>
</div>

const middleContent = <div>
    <Container>
      <Divider horizontal>Club Members</Divider>
      <ClubMemberList></ClubMemberList>

    </Container>
</div>

const rightContent = <div>
  <Container>
    {/* Profile */}
  </Container>
</div>

const AdminDashboard = () => {
  const [isLoading,
    setIsLoading] = useState(true)

  const [{auth},
    dispatch] = useStateValue()

  const user = auth.user

  useEffect(() => {
    if (auth.status == false) {
      navigate("/login")
    }
    setIsLoading(false)
  })

  return (isLoading
    ? <FullScreenLoader></FullScreenLoader>
    : <div className='chat'>
      <Layout
        leftContent={leftContent}
        middleContent={middleContent}
        rightContent={rightContent}></Layout>
    </div>)
}

export default AdminDashboard;
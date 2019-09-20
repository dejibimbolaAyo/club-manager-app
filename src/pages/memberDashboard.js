import React, {useContext, useEffect, useState, useReducer} from 'react'
import {navigate} from '@reach/router'
import {Container, Divider, Segment, Sticky} from 'semantic-ui-react'
import Layout from '../components/layout'
import NewMembers from '../components/newMembers'
import ComposeMessage from '../components/composeMessage'
import ContactList from '../components/clubList'
import StatusBar from '../components/statusBar'
import FriendSearch from '../components/friendSearch';
import FullScreenLoader from '../components/fullScreenLoader'

import {useStateValue} from '../contexts/stateContext'

const leftContent = <div>
  <Container>
    <Divider horizontal>What's your status?</Divider>
    <Segment>
      <StatusBar></StatusBar>
    </Segment>
    <Divider horizontal>Contacts</Divider>
    {/* TODO: Merge the functionality of contact search with general member search */}
    <Segment className="contact-list">
      <ContactList></ContactList>
    </Segment>
    <Divider horizontal>Search for a friend</Divider>
    <Segment className="left-content-container-top">
      <FriendSearch></FriendSearch>
    </Segment>
    {/* <Divider horizontal>Friend requests</Divider>
    <Segment className="left-content-container-bottom">
      <NewMembers></NewMembers>
    </Segment> */}
  </Container>
</div>

const middleContent = <div>
  <Container>
    {/* ChatMessage */}
    <Divider horizontal>Broadcasts</Divider>
    <Divider horizontal>Compose broadcast message</Divider>
    <ComposeMessage></ComposeMessage>
  </Container>
</div>

const rightContent = <div>
  <Container>
    {/* Profile */}
  </Container>
</div>

const MemberDashboard = () => {
  const [isLoading,
    setIsLoading] = useState(true)

  const [
    {
      auth
    },
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

export default MemberDashboard;
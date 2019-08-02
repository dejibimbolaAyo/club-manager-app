import React, {Component} from 'react'
import {Container, Divider, Segment} from 'semantic-ui-react'
import Layout from '../components/layout'
import NewMembers from '../components/newMembers'
import ChatMessages from '../components/chatMessages'
import ComposeMessage from '../components/composeMessage'
import ContactList from '../components/contactList'
import StatusBar from '../components/statusBar'

export default class Chat extends Component {
  render() {
    const leftContent = <div>
      <Container>
        <ContactList></ContactList>
        <Divider horizontal>What's your status?</Divider>
        <StatusBar></StatusBar>
      </Container>
    </div>

    const middleContent = <div>
      <Container>
        {/* ChatMessage */}
        <ChatMessages></ChatMessages>
        <Divider horizontal>Compose broadcast message</Divider>
        <ComposeMessage></ComposeMessage>
      </Container>
    </div>

    const rightContent = <div>
      <Container>
        {/* Profile */}
        <Segment className="left-content-container">
          <NewMembers></NewMembers>
        </Segment>
      </Container>
    </div>

    return (
      <div className='chat'>
        <Layout
          leftContent={leftContent}
          middleContent={middleContent}
          rightContent={rightContent}></Layout>
      </div>
    )
  }
}
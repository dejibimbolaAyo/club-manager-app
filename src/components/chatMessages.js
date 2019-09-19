import React, {useState} from 'react'
import {Message, Segment} from 'semantic-ui-react'

const ChatMessages = () => {
  const [chatMessages] = useState([]);
  return (
      // <Container className="chat-wrapper">
    <Segment className="chat-wrapper">
        {chatMessages.length > 0
          ? chatMessages.map((chatMessage) => {
            return <Message info>
              <Message.Header>{chatMessage.sender}</Message.Header>
              <p>{chatMessage.message}</p>
            </Message>
          })
          : <>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          <Message info>
            <Message.Header>No broadcast</Message.Header>
            <p>Send your first broadcast by typing in a message below.</p>
          </Message>
          
          </>
        }
    </Segment>
      // </Container>
  )
}

export default ChatMessages;

import React, {useState} from 'react'
import {Image, List, Header, Icon, Message, Segment} from 'semantic-ui-react'
import SearchInput from '../components/search'

const ContactList = ({children}) => {
  const [contactList,
    setContactList] = useState([]);
  return <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular/>
      <Header.Content>Contact List</Header.Content>
    </Header>
    <Segment className="contact-list">
      <SearchInput disable={contactList.length <= 0}></SearchInput>
      <List celled size={'small'}>
        {contactList.length > 0
          ? contactList.map((contact) => {
            return <List.Item>
              <Image avatar src={contact.image || 'http://placeimg.com/640/480/people'}/>
              <List.Content>
                <List.Header as='a'>{contact.name}</List.Header>
                <List.Description>
                  {contact.desctiption || 'No description'}
                </List.Description>
              </List.Content>
            </List.Item>
          })
          : <Message info>
            <Message.Header>No contacts found</Message.Header>
            <Message.Content>Add a friend from the list of members</Message.Content>
          </Message>
        }
      </List>
    </Segment>
  </div>
}

export default ContactList;
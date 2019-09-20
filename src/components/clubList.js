import React, {useState} from 'react'
import {Image, List, Message, Button} from 'semantic-ui-react'
import SearchInput from './search'
import {useStateValue} from '../contexts/stateContext'
import NewClubModal from './newClubModal'

const ClubList = ({children}) => {
  const [
    {
      auth
    }
  ] = useStateValue()
  const user = auth.user
  const profile = user.profile[0]

  const [openModal,
    setOpenModal] = useState(false)

  const open = () => {
    console.log("I got in here")
    return setOpenModal(true)
  }

  const close = () => {
    console.log("I am closing")
    return setOpenModal(false)
  }

  const [clubList] = useState([]);
  return <div>
    <NewClubModal open={openModal} close={close}></NewClubModal>
    <List celled size={'small'}>
      {clubList.length > 0
        ? clubList.map((contact) => {
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
        : <div>
          <Message info>
            <Message.Header>No clubs found</Message.Header>
            <Message.Content>
              Create a new club
            </Message.Content>
          </Message>
          <Button fluid color={'green'} onClick={open}>Create club</Button>
        </div>
}
    </List>
  </div>
}

export default ClubList;
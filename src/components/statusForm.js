import React, {useState, useEffect} from 'react'
import {Button, Form, TextArea} from 'semantic-ui-react'
import NewClubMemberModal from './newClubMemberModal';

const SetStatus = () => {
  const [isLoading,
    setIsLoading] = useState(false)

  // Call API to store status
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

  useEffect(() => {
    return () => {
    // setOpenModal(true)
    }
  }, [openModal])
  return (
    <div>
      <NewClubMemberModal open={openModal} close={close}/>
      <Form>
        {/* <Form.Field control={TextArea} onChange={(e) => setStatus(e.target.value)} placeholder='Type status (20 letters)'/> */}
        {/* State contains the value inputted, submit should make a submission */}
        <Button fluid color={'blue'} onClick={open}>Send Invitation</Button>
      </Form>
    </div>
  )
}

export default SetStatus;

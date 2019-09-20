import React, {useState, useEffect} from 'react'
import {Button, Modal, Form, Input} from 'semantic-ui-react'

const NewClubMemberModal = ({open, close}) => {

  const [modalOpen,
    setModalOpen] = useState(open);

  const [invitationEmail,
    setInvitationEmail] = useState('');

  useEffect(() => {
    if (!open) {
      setModalOpen(false)
    } else {
      setModalOpen(true)
    }
    return setModalOpen(open)
  }, [open])

  return <Modal size={'tiny'} open={modalOpen} onClose={close}>
    <Modal.Header>Send Invitation</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Field
          control={Input}
          onChange={(e) => setInvitationEmail(e.target.value)}
          placeholder='Member email'/> {/* State contains the value inputted, submit should make a submission */}
        <Button
          positive
          icon='checkmark'
          labelPosition='right'
          content='Send Invitation'/>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={close}>Cancel</Button>
    </Modal.Actions>
  </Modal>
}

export default NewClubMemberModal;

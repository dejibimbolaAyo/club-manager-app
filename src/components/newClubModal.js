import React, {useState, useEffect} from 'react'
import {Button, Modal, Form, Input} from 'semantic-ui-react'

const NewClubModal = ({open, close}) => {

  const [modalOpen,
    setModalOpen] = useState(open);

  const [clubName,
    setClubName] = useState('');

  useEffect(() => {
    if (!open) {
      setModalOpen(false)
    } else {
      setModalOpen(true)
    }
    return setModalOpen(open)
  }, [open])

  return <Modal size={'tiny'} open={modalOpen} onClose={close}>
    <Modal.Header>Create club</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Field
          control={Input}
          onChange={(e) => setClubName(e.target.value)}
          placeholder='New club name'/>
        <Button
          positive
          icon='checkmark'
          labelPosition='right'
          content='Create'/>
      </Form>
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={close}>Cancel</Button>
    </Modal.Actions>
  </Modal>
}

export default NewClubModal;

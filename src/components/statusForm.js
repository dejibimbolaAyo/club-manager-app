import React, {useState, useEffect} from 'react'
import {Button, Form, TextArea} from 'semantic-ui-react'

const SetStatus = () => {
  const [status, setStatus] = useState('');
  useEffect(() => {
    return ()=> {}
  }, [status])
  return (
    <Form>
      <Form.Field control={TextArea} onChange={(e) => setStatus(e.target.value)} placeholder='Type status (20 letters)'/>
      {/* State contains the value inputted, submit should make a submission */}
      <Button fluid color={'blue'}>Set status</Button>
    </Form>
  )
}

export default SetStatus;

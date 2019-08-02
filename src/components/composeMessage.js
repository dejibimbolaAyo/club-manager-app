import React, {useState} from 'react'
import {Button, Form, TextArea, Segment} from 'semantic-ui-react'

const ComposeMessage = () => {
  const [inputText,
    setInputText] = useState('')
  return (
    <Segment>
      <Form>
        <Form.Field
          control={TextArea}
          placeholder='Type something'
          onChange={(e) => {
          setInputText(e.target.value)
        }}/>
        <Button fluid positive>Broadcast</Button>
        {inputText}
      </Form>
    </Segment>
  )
}

export default ComposeMessage;

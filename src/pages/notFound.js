import React from "react"
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'

const NotFound = () => {
  return (
    <Grid
      textAlign='center'
      style={{
      height: '100vh'
    }}
      verticalAlign='middle'>
      <Grid.Column style={{
        maxWidth: 450
      }}>
          <h4>Page not found</h4>
      </Grid.Column>
    </Grid>
  )
}

export default NotFound;
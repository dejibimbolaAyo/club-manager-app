import React from 'react'
import {Grid, Placeholder} from 'semantic-ui-react'

const FullScreenLoader = () => {
  return <Grid
    textAlign='center'
    style={{
    height: '100vh'
  }}
    verticalAlign='middle'>
    <Grid.Column style={{
      maxWidth: 450
    }}>
      <h4>Chat client is loading</h4>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length={'full'}/>
        </Placeholder.Header>
      </Placeholder>
    </Grid.Column>
  </Grid>
}

export default FullScreenLoader;
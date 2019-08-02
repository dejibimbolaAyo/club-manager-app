import React from 'react'
import {Grid} from 'semantic-ui-react'

const Layout = ({leftContent, middleContent, rightContent}) => (
  <div className="top-spacer">
    <Grid columns='three' divided>
      <Grid.Row>
        <Grid.Column width={4}>
          {leftContent}
        </Grid.Column>
        <Grid.Column width={8}>
          {middleContent}
        </Grid.Column>
        <Grid.Column width={4}>
          {rightContent}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Layout;
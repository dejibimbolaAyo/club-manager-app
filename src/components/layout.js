import React from 'react'
import {Grid} from 'semantic-ui-react'

const Layout = ({leftContent, middleContent, rightContent}) => (
  <div className="top-spacer">
    <Grid stackable reversed="mobile vertically" columns='three' divided>
      <Grid.Row>
        <Grid.Column width={4}>
          {leftContent}
          {rightContent}
        </Grid.Column>
        <Grid.Column width={12}>
          {middleContent}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Layout;
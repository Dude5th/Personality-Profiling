import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { NavMenu } from './navMenu/navMenu';

export class Layout extends Component {
  displayName = Layout.name;

  render() {
    return (
      <div>
        <div>
          <br/>
        </div>    
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <NavMenu/>
              </Grid.Column>
              <Grid.Column width={13}>
                {this.props.children}
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

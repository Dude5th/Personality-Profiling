import React, { Component } from 'react'
import { Header, Grid, List } from 'semantic-ui-react';

export class CStyle extends Component {
    render() {
        return (
        <div>
            <Header as='h2'>Style-by-Style Analysis: C Style - Reserved + Task</Header>
            <Header as='h4'>General Characteristics</Header>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <List as='ul'>
                            <List.Item as='li'>Analytical</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List as='ul'>
                            <List.Item as='li'>Idealistic</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        );
    }
}
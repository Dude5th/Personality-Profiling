import React, { Component } from 'react'
import { Header, Grid, List } from 'semantic-ui-react';

export class DStyle extends Component {
    render() {
        return (
        <div>
            <Header as='h2'>Style-by-Style Analysis: D Style - Outgoing + Task</Header>
            <Header as='h4'>General Characteristics</Header>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <List as='ul'>
                            <List.Item as='li'>Strong Willed</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List as='ul'>
                            <List.Item as='li'>Resolute</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        );
    }
}
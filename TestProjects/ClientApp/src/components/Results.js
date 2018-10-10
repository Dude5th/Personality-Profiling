import React, { Component } from 'react';
import { Header, Grid, Table, GridColumn } from 'semantic-ui-react';

export class Results extends Component {
    state = {
        data: {
            mostD: 8,
            mostI: 2,
            mostS: 5,
            mostC: 3,
            leastD: 1,
            leastI: 5,
            leastS: 5,
            leastC: 8
        }
    }

    render() {
        if (this.props.data === null) {
            return (
                <div>
                    <Header as="h1">Personality System Graph</Header>
                    <Header as="h3">No data found</Header>
                </div>
            );
        }

        const { mostD, mostI, mostS, mostC, leastD, leastI, leastS, leastC } = this.props.data;

        const diffD = mostD - leastD;
        const diffI = mostI - leastI;
        const diffS = mostS - leastS;
        const diffC = mostC - leastC;

        return (
            <div>
                <Header as="h1">Personality System Graph</Header>
                <Grid columns={3}>
                    <Grid.Row>
                        <GridColumn>
                        <Table definition >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell></Table.HeaderCell>
                                    <Table.HeaderCell>D</Table.HeaderCell>
                                    <Table.HeaderCell>I</Table.HeaderCell>
                                    <Table.HeaderCell>S</Table.HeaderCell>
                                    <Table.HeaderCell>C</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>MOST</Table.Cell>
                                    <Table.Cell>{mostD}</Table.Cell>
                                    <Table.Cell>{mostI}</Table.Cell>
                                    <Table.Cell>{mostS}</Table.Cell>
                                    <Table.Cell>{mostC}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>LEAST</Table.Cell>
                                    <Table.Cell>{leastD}</Table.Cell>
                                    <Table.Cell>{leastI}</Table.Cell>
                                    <Table.Cell>{leastS}</Table.Cell>
                                    <Table.Cell>{leastC}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        </GridColumn>
                    </Grid.Row>
                </Grid>               
                
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Mask, Public Self</Table.HeaderCell>
                            <Table.HeaderCell>Core, Private Self</Table.HeaderCell>
                            <Table.HeaderCell>Mirror, Perceived Self</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                
                            </Table.Cell>
                            <Table.Cell>
                                
                            </Table.Cell>
                            <Table.Cell>
                                
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}
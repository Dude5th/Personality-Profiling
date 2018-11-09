import React, { Component } from 'react';
import { Header, Grid, Table, GridColumn } from 'semantic-ui-react';
import { Line,  } from 'react-chartjs-2'

export class Results extends Component {
    state = {
        data: {
            mostD: 8,
            mostI: 2,
            mostS: 3,
            mostC: 5,
            leastD: 1,
            leastI: 5,
            leastS: 5,
            leastC: 8
        }
    }

    render() {
        if (this.state.data === null) {
            return (
                <div>
                    <Header as="h1">Personality System Graph</Header>
                    <Header as="h3">No data found</Header>
                </div>
            );
        }

        const { mostD, mostI, mostS, mostC, leastD, leastI, leastS, leastC } = this.state.data;

        const diffD = mostD - leastD;
        const diffI = mostI - leastI;
        const diffS = mostS - leastS;
        const diffC = mostC - leastC;

        const dIndex = this.getDMostValue(mostD) - 12;
        const iIndex = this.getIMostValue(mostI) - 12;
        const sIndex = this.getSMostValue(mostS) - 12;
        const cIndex = this.getCMostValue(mostC) - 12;
        const dataMost = {
            labels: ["D", "I", "S", "C"],
            datasets: [{
                label: "Mask, Public Self",
                backgroundColor: "rgba(153,255,51,0.6)",
                borderColor: "rgba(153,255,51,0.6)",
                data: [dIndex,iIndex,sIndex,cIndex],
                fill: false
            }]
        };
        const optionMost = {
            // maintainAspectRatio: false,
            scales: {
                yAxes: [{
                  ticks: {
                     max: 14,
                     min: -12,
                     stepSize: 1
                   }
                 }]
            }
        }

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
                                <Table.Row>
                                    <Table.Cell>Change</Table.Cell>
                                    <Table.Cell>{diffD}</Table.Cell>
                                    <Table.Cell>{diffI}</Table.Cell>
                                    <Table.Cell>{diffS}</Table.Cell>
                                    <Table.Cell>{diffC}</Table.Cell>
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
                                <Line data={dataMost} options={optionMost} />
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

    getDMostValue(val) {
        const source = [-1, 0, 0.5, 1, 1.33, 1.66, 2, 2.5, 3, 4, 5, 5.5, 6, 7, 8, 9, 9.5, 10, 11, 12, 13, 14, 14.33, 14.66, 15, 16, 21];
        let index = source.indexOf(val);
        if (index === -1 && val > 16) {
            index = val === 17 || val === 18 ? 16 : 21;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }
    
    getIMostValue(val) {
        const source = [0, -0.25, -0.5, -0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.25, 3.5, 3.75, 4, 4.33, 4.66, 5, 6, 6.33, 6.66, 7, 8, 9, 10, 11, 19];
        let index = source.indexOf(val);
        if (index === -1 && val > 11) {
            index = val <= 15 ? 11 : 19;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }
    
    getSMostValue(val) {
        const source = [-1, -0.5, 0, 0.33, 0.66, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 6.5, 7, 8, 8.5, 9, 10, 11, 12, 13, 14, 17, 20];
        let index = source.indexOf(val);
        if (index === -1 && val > 11) {
            if (val === 15)
            {
                index = 14;
            }
            else if (val === 16 || val === 18)
            {
                index = 17;
            }
            else if (val >= 19)
            {
                index = 20;
            }

            return source.indexOf(index);
        }
        else {
            return index;
        }
    }

    getCMostValue(val) {
        const source = [-1, 0, 0.33, 0.66, 1, 1.33, 1.66, 2, 2.5, 3, 3.25, 3.5, 3.75, 4, 4.5, 5, 5.5, 6, 6.25, 6.5, 6.75, 7, 8, 9, 11, 13, 17];
        let index = source.indexOf(val);
        if (index === -1 && val > 11) {
            if (val === 10)
            {
                index = 11;
            }
            else if (val >= 12 && val <= 15)
            {
                index = 13;
            }
            else if (val >= 16)
            {
                index = 17;
            }

            return source.indexOf(index);
        }
        else {
            return index;
        }
    }
}
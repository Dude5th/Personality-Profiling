import React, { Component } from 'react';
import { Header, Grid, Table, GridColumn, Segment } from 'semantic-ui-react';
import { Line  } from 'react-chartjs-2'

export class Results extends Component {
    state = {
        data: this.props.data
    }

    render() {

        if (this.state.data === null) {
            this.setState({
                data: {
                        mostD: 8,
                        mostI: 2,
                        mostS: 3,
                        mostC: 5,
                        leastD: 1,
                        leastI: 5,
                        leastS: 8,
                        leastC: 5
                    }
            });
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

        const dMostIndex = this.getDMostValue(mostD) - 12;
        const iMostIndex = this.getIMostValue(mostI) - 12;
        const sMostIndex = this.getSMostValue(mostS) - 12;
        const cMostIndex = this.getCMostValue(mostC) - 12;
        const dataMost = {
            labels: ["","D", "I", "S", "C", ""],
            datasets: [{
                label: "Mask, Public Self",
                backgroundColor: "rgba(50,50,50,0.6)",
                borderColor: "rgba(153,255,51,0.6)",
                data: [null,dMostIndex,iMostIndex,sMostIndex,cMostIndex,null],
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
                   },
                }]
            }
        }
        
        const dLeastIndex = this.getDLeastValue(leastD) - 15;
        const iLeastIndex = this.getILeastValue(leastI) - 15;
        const sLeastIndex = this.getSLeastValue(leastS) - 15;
        const cLeastIndex = this.getCLeastValue(leastC) - 15;
        const dataLeast = {
            labels: ["","D", "I", "S", "C", ""],
            datasets: [{
                label: "Core, Private Self",
                backgroundColor: "rgba(50,50,50,0.6)",
                borderColor: "rgba(255,153,51,0.6)",
                data: [null,dLeastIndex,iLeastIndex,sLeastIndex,cLeastIndex,null],
                fill: false
            }]
        };
        const optionLeast = {
            // maintainAspectRatio: false,
            scales: {
                yAxes: [{
                  ticks: {
                     max: 16,
                     min: -15,
                     stepSize: 1
                   },
                }]
            }
        }
        
        const dChangeIndex = this.getDChangeValue(diffD) - 16;
        const iChangeIndex = this.getIChangeValue(diffI) - 16;
        const sChangeIndex = this.getSChangeValue(diffS) - 16;
        const cChangeIndex = this.getCChangeValue(diffC) - 16;
        const dataChange = {
            labels: ["", "D", "I", "S", "C", ""],
            datasets: [{
                label: "Mirror, Perceived Self",
                backgroundColor: "rgba(50,50,50,0.6)",
                borderColor: "rgba(51,255,153,0.6)",
                data: [null,dChangeIndex,iChangeIndex,sChangeIndex,cChangeIndex,null],
                fill: false
            }]
        };
        const optionChange = {
            // maintainAspectRatio: false,
            scales: {
                yAxes: [{
                  ticks: {
                     max: 17,
                     min: -16,
                     stepSize: 1
                   },
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
                
                <Grid columns={3} divided >
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment textAlign='center'>Mask, Public Self</Segment>
                            <Segment>
                                <Line data={dataMost} options={optionMost} height="200" />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment textAlign='center'>Core, Private Self</Segment>
                            <Segment>
                                <Line data={dataLeast} options={optionLeast} height="200" />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment textAlign='center'>Mirror, Perceived Self</Segment>
                            <Segment>
                                <Line data={dataChange} options={optionChange} height="200" />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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
    
    getDLeastValue(val) {
        const source = [20, 18, 16, 15, 14, 13, 12.5, 12, 11, 10, 9, 8.5, 8, 7, 6.5, 6, 5, 4.5, 4, 3.5, 3, 2.75, 2.5, 2.25, 2, 1.8, 1.6, 1.4, 1.2, 1, -0.05, 0];
        let index = source.indexOf(val);
        if (index === -1 && val > 16) {
            index = val === 17 ? 16 : val === 19 ? 18 : 20;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }
    
    getDChangeValue(val) {
        const source = [-21, -20, -16, -14, -12, -11, -10.5, -10, -9.66, -9.33, -9, -7, -6, -5, -4, -3, -2, 0, 1, 3, 5, 6, 7, 7.5, 8, 9, 9.5, 10, 12, 13, 14, 15, 18, 21 ];
        let index = source.indexOf(val);
        if (index === -1 && val > 0) {
            index = val === 2 ? 3 : val === 4 ? 5 : val === 11 ? 10 : val >=16 && val <=19 ? 18 : 21;
            return source.indexOf(index);
        }
        else if (index === -1 && val < 0) {
            index = val === -1 ? -2 : val === -8 ? -7 : val === -13 ? -12 : val === -15 ? -16 : val <= -18 ? -16 : -20;
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

    getILeastValue(val) {
        const source = [19, 12, 11, 10, 9.5, 9, 8.5, 8, 7, 6.66, 6.33, 6, 5.75, 5.5, 5.25, 5, 4, 3.75, 3.5, 3.25, 3, 2.66, 2.33, 2, 1.8, 1.6, 1.4, 1.2, 1, 0.5, 0, -1];
        let index = source.indexOf(val);
        if (index === -1 && val > 12) {
            index = val <= 15 ? 11 : 19;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }

    getIChangeValue(val) {
        const source = [-19, -18, -10, -9, -8, -7.5, -7, -6, -5.66, -5.33, -5, -4, -3.5, -3, -2, -1.66, -1.33, -1, 0, 1, 2, 2.33, 2.66, 3, 3.5, 4, 5, 5.5, 6, 7, 7.5, 8, 10, 18];
        let index = source.indexOf(val);
        if (index === -1 && val > 8) {
            index = val === 9 ? 8 : val <= 14 ? 10 : 18;
            return source.indexOf(index);
        }
        else if (index === -1 && val < -10) {
            index = val >= 14 ? -10 : val <= -20 ? -19 : -18 
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
    
    getSLeastValue(val) {
        const source = [19, 16, 13, 12, 11.5, 11, 10.5, 10, 9.5, 9, 8.5, 8, 7.5, 7, 6.66, 6.5, 6, 5.5, 5, 4.5, 4, 3.66, 3.33, 3, 2.8, 2.6, 2.4, 2.2, 2, 1.5, 1, 0];
        let index = source.indexOf(val);
        if (index === -1 && val > 13) {
            index = val === 14 ? 13 : val < 18 ? 16 : 19;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }
    
    getSChangeValue(val) {
        const source = [-18, -15, -12.5, -10, -9.66, -9.33, -9, -8, -7.66, -7.33, -7, -6, -6.5, -5, -4, -3, -2, -1, -0.5, 0, 1, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 20];
        let index = source.indexOf(val);
        if (index === -1 && val > 11) {
            index = val <= 13 ? 11 : val <= 17 ? 15 : 20;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }

    getCMostValue(val) {
        const source = [-1, 0, 0.33, 0.66, 1, 1.33, 1.66, 2, 2.5, 3, 3.25, 3.5, 3.75, 4, 4.5, 5, 5.5, 6, 6.25, 6.5, 6.75, 7, 8, 9, 11, 13, 17];
        let index = source.indexOf(val);
        if (index === -1 && val > 9) {
            index = val === 10 ? 11 : val <= 15 ? 13 : 17;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }

    getCLeastValue(val) {
        const source = [17, 15, 14, 13, 12, 11, 10.66, 10.33, 10, 9.5, 9, 8.66, 8.33, 8, 7.5, 7, 6, 5.5, 5, 4.5, 4, 3.66, 3.33, 3, 2.75, 2.5, 2.25, 2, 1.66, 1.33, 1, 0];
        let index = source.indexOf(val);
        if (index === -1 && val > 15) {
            index = val === 16 ? 15 : 17;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }

    getCChangeValue(val) {
        const source = [-22, -19, -15, -13, -10, -9.5, -9, -8, -7.66, -7.33, -7, -6, -5, -4.75, -4.5, -4.25, -4, -3, -2, -1, 0, 0.33, 0.66, 1, 1.5, 2, 3, 3.33, 3.66, 4, 5, 6, 10, 17];
        let index = source.indexOf(val);
        if (index === -1 && val > 6) {
            index = val <= 8 ? 6 : val <= 13 ? 10 : 17;
            return source.indexOf(index);
        }
        else if (index === -1 && val < -10) {
            index = val <= -12 ? 10 : val <= -14 ? -13 : val <= -17 ? -15 : val <= 21 ? -19 : -22;
            return source.indexOf(index);
        }
        else {
            return index;
        }
    }
}
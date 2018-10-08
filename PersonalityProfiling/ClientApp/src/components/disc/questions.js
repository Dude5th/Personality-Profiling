import React, { Component } from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react';
import { MostLeastQuestion } from './mostLeastQuestions';
import { QuestionsList } from './questionList'
import { DiscEnum } from '../../models/discEnum';
import { Link } from 'react-router-dom';

export class Questions extends Component {
    state = {
        data: QuestionsList
    }

    mostD = 0;
    mostI = 0;
    mostS = 0;
    mostC = 0;
    mostTotal = 0;
    showMost = false;

    leastD = 0;
    leastI = 0;
    leastS = 0;
    leastC = 0;
    leastTotal = 0;
    showLeast = false;

    mostSelected = (id, value) => {
        //console.log(`Id: ${id} - Most : ${value}`);
        let i = id - 1;
        const data = this.state.data;
        data[i].mostValue = value;
        
        this.forceUpdate();
    }

    leastSelected = (id, value) => {
        //console.log(`Id: ${id} - Least : ${value}`);
        let i = id - 1;
        const data = this.state.data;
        data[i].leastValue = value;
        
        this.forceUpdate();
    }

    renderItems() {
        const { data } = this.state;
        //console.log("data:", data);
        return data.map((item, i) => {
            return (
            <Grid.Column key={i}>
                <MostLeastQuestion model={item} onMostSelected={this.mostSelected} onLeastSelected={this.leastSelected} />
            </Grid.Column>
            );
        });
    }
    
    returnMost() {
        let d = 0;
        let i = 0;
        let s = 0;
        let c = 0;
        let star = 0;
        this.state.data.forEach(item => {
            switch (item.mostValue) {
                case DiscEnum.D:
                    d++;
                break;
                case DiscEnum.I:
                    i++;
                break;
                case DiscEnum.S:
                    s++;
                break;
                case DiscEnum.C:
                    c++;
                break;
                case DiscEnum.Star:
                case DiscEnum.Star2:
                    star++;
                break;
                default:
                    //console.log("unknown", item.mostValue)
                break;
            }
        });
        this.mostD = d;
        this.mostI = i;
        this.mostS = s;
        this.mostC = c;
        this.mostTotal = d + i + s + c + star;
        this.showMost = this.mostTotal > 0;
        if (this.showMost) {
            return `MOST - D: ${d}    I: ${i}    S:    ${s}    C: ${c}   Star: ${star} - Total: ${this.mostTotal}`;
        }

        let left = 24 - this.mostTotal;
        return `You have ${left} Most items left to select.`;
    }
    
    returnLeast() {
        let d = 0;
        let i = 0;
        let s = 0;
        let c = 0;
        let star = 0;
        this.state.data.forEach(item => {
            switch (item.leastValue) {
                case DiscEnum.D:
                    d++;
                break;
                case DiscEnum.I:
                    i++;
                break;
                case DiscEnum.S:
                    s++;
                break;
                case DiscEnum.C:
                    c++;
                break;
                case DiscEnum.Star:
                case DiscEnum.Star2:
                    star++;
                break;
                default:
                break;
            }
        });
        this.leastD = d;
        this.leastI = i;
        this.leastS = s;
        this.leastC = c;
        this.leastTotal = d + i + s + c + star;
        this.showLeast = this.leastTotal === 0;
        if (this.showLeast) {
            return `Least - D: ${d}    I: ${i}    S:    ${s}    C: ${c}   Star: ${star} - Total: ${this.leastTotal}`;
        }

        let left = 24 - this.leastTotal;
        return `You have ${left} Least items left to select.`;
    }

    returnChange() {
        // let d = this.mostD - this.leastD;
        // let i = this.mostI - this.leastI;
        // let s = this.mostS - this.leastS;
        // let c = this.mostC - this.leastC;
        
        // if (this.showMost && this.showLeast) {
        //     return `Change - D: ${d}    I: ${i}    S:    ${s}    C: ${c}`;
        // }

        return (
            <Button animated
                onClick={this.navigate}
                as={Link}
                to="/results">
                <Button.Content visible>Show Results</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
        );
    }

    navigate() {
        // TODO: send to component
        // https://stackoverflow.com/questions/50616080/how-to-pass-state-in-react-router-to-components
        // const state = NavigationActions.setParams({
        //     params: { mostD: this.mostD, mostI: this.mostI, mostS: this.mostS, mostC: this.mostC },
        //     key: "results"
        // });
        //this.props.navigation.dispatch(state);
    }

    render() {
        
        return (

        <Grid columns={3} divided="vertically">
            <Grid.Row>
                <Grid.Column>
                    {this.returnMost()}
                </Grid.Column>
                <Grid.Column>
                    {this.returnLeast()}
                </Grid.Column>
                <Grid.Column>
                    {this.returnChange()}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                {this.renderItems()}
            </Grid.Row>
        </Grid>
        );
    }
}
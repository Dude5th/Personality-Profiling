import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { MostLeastQuestion } from './mostLeastQuestions';
import { QuestionsList } from './questionList'
import { DiscEnum } from '../../models/discEnum';

export class Questions extends Component {
    state = {
        data: QuestionsList
    }

    mostSelected = (id, value) => {
        console.log(`Id: ${id} - Most : ${value}`);
        let i = id - 1;
        const data = this.state.data;
        data[i].mostValue = value;
        
        this.forceUpdate();
    }

    leastSelected = (id, value) => {
        console.log(`Id: ${id} - Least : ${value}`);
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
                default:
                    console.log("items", item.mostValue);
                break;
            }
        });

        // return (
        //     <Grid>
        //         <Grid.Row>
        //             D: {d}
        //         </Grid.Row>
        //         <Grid.Row>
        //             I: {i}
        //         </Grid.Row>
        //         <Grid.Row>
        //             S: {s} 
        //         </Grid.Row>
        //         <Grid.Row>
        //             C: {c}
        //         </Grid.Row>
        //     </Grid>
        //);
        return `D: ${d} I: ${i} S: ${s} C: ${c}`;
    }

    render() {
        
        return (

        <Grid columns={3} divided="vertically">
            <Grid.Row>
                <Grid.Column>
                    {this.returnMost()}
                </Grid.Column>
                <Grid.Column>
                    
                </Grid.Column>
                <Grid.Column>
                    
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                {this.renderItems()}
            </Grid.Row>
        </Grid>
        );
    }
}
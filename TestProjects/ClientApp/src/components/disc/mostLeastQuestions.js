import React, { Component } from 'react'
import { Radio, Grid } from 'semantic-ui-react';

export class MostLeastQuestion extends Component {
    state = {
        most: this.props.model.mostValue,
        least: this.props.model.leastValue,
        id: this.props.model.id
    }

    handleMostChange = (e, { value }) => {
        const id = this.state.id;
        this.setState({
            most: value,
            least: this.state.least,
            id: id
        });
        this.props.onMostSelected(id, value);
    }

    handleLeastChange = (e, { value }) => {
        const id = this.state.id;
        this.setState({
            most: this.state.most,
            least: value,
            id: id
        });
        this.props.onLeastSelected(id, value);
    }

    render() {
        const { model } = this.props;
        
        return (
        <Grid columns={2} celled>
            <Grid.Row>
                <Grid.Column width={2}>
                    M
                </Grid.Column>
                <Grid.Column width={2}>
                    L
                </Grid.Column>
                <Grid.Column width={12}>
                    Description
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={2}>
                    <Radio name={"diamondGroup" + model.id}
                        value={model.most1}
                        checked={this.state.most === model.most1}
                        onChange={this.handleMostChange}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Radio name={"bullsEyeGroup" + model.id}
                        value={model.least1}
                        checked={this.state.least === model.least1}
                        onChange={this.handleLeastChange}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    {model.question1}
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={2}>
                    <Radio name={"diamondGroup" + model.id}
                        value={model.most2}
                        checked={this.state.most === model.most2}
                        onChange={this.handleMostChange}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Radio name={"bullsEyeGroup" + model.id}
                        value={model.least2}
                        checked={this.state.least === model.least2}
                        onChange={this.handleLeastChange}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    {model.question2}
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={2}>
                    <Radio name={"diamondGroup" + model.id}
                        value={model.most3}
                        checked={this.state.most === model.most3}
                        onChange={this.handleMostChange}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Radio name={"bullsEyeGroup" + model.id}
                        value={model.least3}
                        checked={this.state.least === model.least3}
                        onChange={this.handleLeastChange}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    {model.question3}
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={2}>
                    <Radio name={"diamondGroup" + model.id}
                        value={model.most4}
                        checked={this.state.most === model.most4}
                        onChange={this.handleMostChange}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Radio name={"bullsEyeGroup" + model.id}
                        value={model.least4}
                        checked={this.state.least === model.least4}
                        onChange={this.handleLeastChange}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    {model.question4}
                </Grid.Column>
            </Grid.Row>
        </Grid>
        );
    }
}
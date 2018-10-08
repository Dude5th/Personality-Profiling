import React, { Component } from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

export class Counter extends Component {
  displayName = Counter.name

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <Header as="h1">Counter</Header>

        {/* <h1>Counter</h1> */}

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{this.state.currentCount}</strong></p>

        <Button primary animated onClick={this.incrementCounter}>
          <Button.Content visible>Increment</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow circle up"/>
          </Button.Content>
        </Button>
        {/* <button onClick={this.incrementCounter}>Increment</button> */}
      </div>
    );
  }
}

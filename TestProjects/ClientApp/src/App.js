import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Questions } from './components/disc/questions';
import { Results } from './components/Results';

export default class App extends Component {
  displayName = App.name

  data = null;

  onShowResults(stateProps) {
    this.data = stateProps;
    console.log("passed state",stateProps);
  }

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchData' component={FetchData} />
        <Route path='/questions' render={() => <Questions showResults={this.onShowResults.bind(this)}/>} />
        <Route path='/results' render={() => <Results data={this.data} />}/>
      </Layout>
    );
  }
}

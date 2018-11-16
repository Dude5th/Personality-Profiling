import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Questions } from './components/disc/questions';
import { Results } from './components/Results';
import { DStyle } from './components/disc/dStyle';
import { IStyle } from './components/disc/iStyle';
import { SStyle } from './components/disc/sStyle';
import { CStyle } from './components/disc/cStyle';

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
        <Route path='/dStyle' component={DStyle} />
        <Route path='/iStyle' component={IStyle} />
        <Route path='/sStyle' component={SStyle} />
        <Route path='/cStyle' component={CStyle} />
      </Layout>
    );
  }
}

import React, {Component} from 'react';

import reducers from '../reducers/';
import AppHeader from '../components/AppHeader';
import Nav from '../components/Nav';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <AppHeader />
        <Nav />
        <main className="col-xs-10">
          {this.props.children}
        </main>
      </div>
    );
  }
}

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'flexboxgrid/dist/flexboxgrid.css';
import './app.css';

import {Router} from 'react-router';
import routes from './routes/';
import store from './store/';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
  <Provider store={store} >
    <Router routes={routes} />
  </Provider>,
  document.querySelector('#root')
);

import express from 'express';
import app from './express';
import httpProxy from 'http-proxy';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './../src/store/';
import routes from './../src/routes';
import router from './router';
import bundle from './bundle';

const proxy = httpProxy.createProxyServer();

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.POER ? process.env.PORT : 3000;

if (isDeveloping) {
  bundle();

  app.all('/static/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:4000'
    });
  });
}

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {

      // const initialState = {
      //   currentDirection: 'Frent-End',
      //   currentGrade: '13',
      //   directions: ['Front-End', 'Back-End', 'Android']
      // };
      const markup = renderToString(
        // <Provider store={configureStore(initialState)} >
        <Provider store={configureStore}>
          <RoutingContext { ...props } />
        </Provider>
      );
      res.render('index', {markup});
    } else {
      res.sendStatus(404);
    }
  });
});

proxy.on('error', () => {
  console.log('Could not connect to proxy, please try again...');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

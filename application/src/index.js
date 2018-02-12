import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

import FbEvent from 'components/event';
import Page from 'pages/index';

import registerServiceWorker from 'workers/registerServiceWorker';

import 'stylesheets/normalize.css';
import 'stylesheets/global.css';
import 'stylesheets/typography.css';
import 'stylesheets/iconography.css';

const devtools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const middleware = devtools(applyMiddleware(thunk));
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <FbEvent component={Page} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

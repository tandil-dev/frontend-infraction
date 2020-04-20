import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SubspaceProvider } from '@embarklabs/subspace-react';

import { Provider } from 'react-redux';
import Routes from './Routes';

import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { web3 } from './web3';

const render = (Component) => {
  let renderMethod = ReactDOM.render;
  if (process.env.NODE_ENV === 'production') {
    renderMethod = ReactDOM.hydrate;
  }
  renderMethod(
    <Provider store={store}>
      <SubspaceProvider web3={web3}>
        <Router>
          <Component />
        </Router>
      </SubspaceProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

render(Routes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

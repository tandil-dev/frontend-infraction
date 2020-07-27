import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SubspaceProvider } from '@embarklabs/subspace-react';
import { Provider } from 'react-redux';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Routes from './Routes';

import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { web3 } from './web3';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#3a4e7a' },
    secondary: { main: '#ac84fc' },
  },
});

const render = (Component) => {
  let renderMethod = ReactDOM.render;
  if (process.env.NODE_ENV === 'production') {
    renderMethod = ReactDOM.hydrate;
  }
  renderMethod(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <SubspaceProvider web3={web3}>
          <Router>
            <Component />
          </Router>
        </SubspaceProvider>
      </Provider>
    </ThemeProvider>,
    document.getElementById('root'),
  );
};

render(Routes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

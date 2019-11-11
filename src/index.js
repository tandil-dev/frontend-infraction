import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

const render = (Component) => {
  let renderMethod = ReactDOM.render;
  if (process.env.NODE_ENV === 'production') {
    renderMethod = ReactDOM.hydrate;
  }
  renderMethod(
      <Router>
        <Component />
      </Router>,
    document.getElementById('root'),
  );
};

render(Routes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from './App';
import HomePage from './screens/HomePage/index'
import FormPage from './screens/FormPage/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
        <Route path="/welcome">
          <HomePage/>
        </Route>
        <Route path="/formPage">
          <FormPage/>
        </Route>
      </Switch>
    </Router>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

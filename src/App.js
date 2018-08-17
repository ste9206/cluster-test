import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './helper/store';
import NotFound from './components/NotFound/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContainer from './components/AppContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AppContainer} />
            <Route component={NotFound} />
          </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

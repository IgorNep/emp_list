import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux setting
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Employees from './components/employees/Employees';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />{' '}
            <Route exact path="/employees" component={Employees} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

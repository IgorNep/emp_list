import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Employees from './components/employees/Employees';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';

//Redux setting
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />{' '}
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

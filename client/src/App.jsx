import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './views/home/Home';
import Layout from './views/shared/Layout';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;

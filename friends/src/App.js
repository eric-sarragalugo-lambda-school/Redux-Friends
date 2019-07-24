import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import LoginPage from './views/LoginPage';
import ListView from './views/ListView';
import { PrivateRoute } from './authentications/PrivateRoute';

library.add(
  faCircleNotch,
  // more icons can go here as needed
);

function App() {
  return (
    <>
      <Router>
        <PrivateRoute exact path='/' component={ListView} />
        <Route exact path='/login' component={LoginPage} />
      </Router>
    </>
  );
}

export default App;

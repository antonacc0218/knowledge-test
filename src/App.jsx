import React, { Fragment } from 'react';
import Route from 'react-router-dom/es/Route';
import routes from 'config/routes';
import PrivateRoute from 'containers/PrivateRoute';


const App = () => (
  <Fragment>
    {routes.map(({ path, component, isPrivate, isExact }) => (
      isPrivate
        ? <PrivateRoute path={path} component={component} exact={isExact} key={path} />
        : <Route path={path} component={component} exact={isExact} key={path} />
    ))}
  </Fragment>
);

export default App;

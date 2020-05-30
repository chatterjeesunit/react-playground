import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import routes from './Routes'


function AppRouter() {

    const routeLinks = routes.map(route => {
        return (
            <li key={route.index.toString()}>
                <Link 
                    exact={true.toString()}
                    to={route.path}>
                    {route.label}
                </Link>
            </li> 
        );
    });

    const routeApps = routes.map(route => {
        return (
            <Route 
                exact={true}
                path={route.path} 
                component={route.component} 
                key={route.index.toString()}
            />
        );
    });

    return (
        <BrowserRouter>
            <div>
                <ul>
                    {routeLinks}
                </ul>
        
                <hr />
                
                {routeApps}
            </div>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;
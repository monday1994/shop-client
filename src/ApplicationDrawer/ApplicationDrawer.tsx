import React, {FC} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard/Dashboard';

const AplicationDrawer: FC = () => {
  return (
    <Router>
      <div>
        <div>Application Bar</div>
        <div>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AplicationDrawer;

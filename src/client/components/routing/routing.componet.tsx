import { Collections } from '@material-ui/icons';
import React from 'react';
import { Router, Route, Redirect, Switch, useHistory } from 'react-router-dom';
import { history } from '../../utils/history';
import { PATHS } from '../../utils/paths';
import AddCommand from '../addcommand/addcommand.component';
import CollectionComponent from '../collections/collection.component';


function RoutingComponent() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact={true} path={PATHS.COLLECTIONS} component={CollectionComponent} />
                <Route path={PATHS.ADD_COMMMAND} component={AddCommand} />
                <Route render={() => <Redirect to={PATHS.COLLECTIONS} />} />
            </Switch>
        </Router>

    )
}

export default RoutingComponent;

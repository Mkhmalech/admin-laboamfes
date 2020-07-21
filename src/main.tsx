import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router';
import { History } from "history";

import { AdminLayout } from './admin/layout';
import { AuthComponent } from './authentification-redux-lib/src/web'

interface MainProps {
    store: Store<LaboFesState>;
    history: History
}

const Main: React.FC<MainProps> = ({ store, history }) =>  (
        <Provider store={store}>
            <Router history={history}>
                <Switch>                    
                    <Route path="/auth"  component={AuthComponent} />
                    <Route path="/" component={AdminLayout} />
                    {/* <Redirect path="/admin/*" to="/auth" /> */}
                    {/* <Route path="/" component={Home} /> */}
                </Switch>
            </Router>
        </Provider>
    );

export default Main

import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { History } from 'history';

import Routes from './routes';
import { ApplicationState } from './store';
import BaseLayoutContainer from './containers/BaseLayoutContainer';

interface MainProps {
    store: Store<ApplicationState>;
    history: History;
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BaseLayoutContainer>{() => <Routes />}</BaseLayoutContainer>
            </ConnectedRouter>
        </Provider>
    );
};

export default Main;

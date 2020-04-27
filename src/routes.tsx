import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Root from './components/layout/Root';
import Header from './components/layout/Header';
import IndexScreen from './screens/index';
import PokemonsScreen from './screens/pokemon';
import MovesScreen from './screens/move';
import AbilitiesScreen from './screens/ability';
import FormsScreen from './screens/form';

const Routes: React.SFC = () => (
    <Root>
        <Header title="HUB" subtitle="PockerZig" />
        <BrowserRouter>
            <Route exact path="/" component={IndexScreen} />
            <Route path="/pokemons" component={PokemonsScreen} />
            <Route path="/moves" component={MovesScreen} />
            <Route path="/abilities" component={AbilitiesScreen} />
            <Route path="/forms" component={FormsScreen} />
            <Route component={() => <div>Not Found</div>} />
        </BrowserRouter>
    </Root>
);

export default Routes;

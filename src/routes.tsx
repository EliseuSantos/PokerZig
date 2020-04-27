import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Root from './components/layout/Root';
import Header from './components/layout/Header';
import IndexScreen from './screens/index';
import PokemonsScreen from './screens/pokemon';
import MovesScreen from './screens/move';

const Routes: React.SFC = () => (
    <Root>
        <Header title="HUB" subtitle="PockerZig" />
        <BrowserRouter>
            <Route exact path="/" component={IndexScreen} />
            <Route path="/pokemons" component={PokemonsScreen} />
            <Route path="/moves" component={MovesScreen} />
            <Route path="/abilities" component={PokemonsScreen} />
            <Route path="/forms" component={PokemonsScreen} />
            <Route path="/locations" component={PokemonsScreen} />
            <Route component={() => <div>Not Found</div>} />
        </BrowserRouter>
    </Root>
);

export default Routes;

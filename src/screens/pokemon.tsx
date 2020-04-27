import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';

import PokemonsIndexScreen from './pokemons/index';
import ShowPokemonsScreen from './pokemons/show';

import { ApplicationState } from '../store';
import { Pokemon } from '../store/pokemons/types';

interface PropsFromState {
    loading: boolean;
    data: Pokemon[];
    errors?: string;
}

type AllProps = PropsFromState & RouteComponentProps;

const PokemonsScreen: React.FC<AllProps> = ({ match }) => {
    return (
        <Switch>
            <Route exact path="/pokemons" component={PokemonsIndexScreen} />
            <Route path="/pokemons/:id" component={ShowPokemonsScreen} />
        </Switch>
    );
};

const mapStateToProps = ({ pokemons }: ApplicationState) => ({
    loading: pokemons.loading,
    errors: pokemons.errors,
    data: pokemons.data,
});

export default connect(mapStateToProps)(PokemonsScreen);

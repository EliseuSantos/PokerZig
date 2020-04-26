import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';

import PokemonsIndexPage from './pokemons/index';
import ShowPokemonsPage from './pokemons/show';

import { ApplicationState } from '../store';
import { Pokemon } from '../store/pokemons/types';

interface PropsFromState {
    loading: boolean;
    data: Pokemon[];
    errors?: string;
}

type AllProps = PropsFromState & RouteComponentProps;

const PokemonsPage: React.FC<AllProps> = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.path}/`} component={PokemonsIndexPage} />
            <Route path={`${match.path}/:id`} component={ShowPokemonsPage} />
        </Switch>
    );
};

const mapStateToProps = ({ pokemons }: ApplicationState) => ({
    loading: pokemons.loading,
    errors: pokemons.errors,
    data: pokemons.data,
});

export default connect(mapStateToProps)(PokemonsPage);

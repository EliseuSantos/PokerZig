import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';

import AbilitiesIndexScreen from './abilities/index';
import ShowAbilitiesScreen from './abilities/show';

import { ApplicationState } from '../store';
import { Ability } from '../store/abilities/types';

interface PropsFromState {
    loading: boolean;
    data: Ability[];
    errors?: string;
}

type AllProps = PropsFromState & RouteComponentProps;

const AbilitiesScreen: React.FC<AllProps> = ({ match }) => {
    return (
        <Switch>
            <Route exact path="/abilities" component={AbilitiesIndexScreen} />
            <Route path="/abilities/:id" component={ShowAbilitiesScreen} />
        </Switch>
    );
};

const mapStateToProps = ({ abilities }: ApplicationState) => ({
    loading: abilities.loading,
    errors: abilities.errors,
    data: abilities.data,
});

export default connect(mapStateToProps)(AbilitiesScreen);

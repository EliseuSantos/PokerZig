import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';

import MovesIndexScreen from './moves/index';
import ShowMovesScreen from './moves/show';

import { ApplicationState } from '../store';
import { Move } from '../store/moves/types';

interface PropsFromState {
    loading: boolean;
    data: Move[];
    errors?: string;
}

type AllProps = PropsFromState & RouteComponentProps;

const MovesScreen: React.FC<AllProps> = ({ match }) => {
    return (
        <Switch>
            <Route exact path="/moves" component={MovesIndexScreen} />
            <Route path="/moves/:id" component={ShowMovesScreen} />
        </Switch>
    );
};

const mapStateToProps = ({ moves }: ApplicationState) => ({
    loading: moves.loading,
    errors: moves.errors,
    data: moves.data,
});

export default connect(mapStateToProps)(MovesScreen);

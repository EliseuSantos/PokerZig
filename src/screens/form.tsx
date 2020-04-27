import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';

import FormsIndexScreen from './forms/index';
import ShowFormsScreen from './forms/show';

import { ApplicationState } from '../store';
import { Form } from '../store/forms/types';

interface PropsFromState {
    loading: boolean;
    data: Form[];
    errors?: string;
}

type AllProps = PropsFromState & RouteComponentProps;

const FormsScreen: React.FC<AllProps> = ({ match }) => {
    return (
        <Switch>
            <Route exact path="/forms" component={FormsIndexScreen} />
            <Route path="/forms/:id" component={ShowFormsScreen} />
        </Switch>
    );
};

const mapStateToProps = ({ forms }: ApplicationState) => ({
    loading: forms.loading,
    errors: forms.errors,
    data: forms.data,
});

export default connect(mapStateToProps)(FormsScreen);

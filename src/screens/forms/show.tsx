import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import Page from '../../components/layout/Page';

import { ApplicationState } from '../../store';
import { Form } from '../../store/forms/types';
import { fetchItemRequest } from '../../store/forms/actions';
import SliderPokemon from '../../components/SliderPokemon';

interface PropsFromState {
    loading: boolean;
    item: Form | any;
    errors?: string;
}

interface PropsFromDispatch {
    fetchForm: typeof fetchItemRequest;
}

interface RouteParams {
    id: string;
}

interface State {
    selected?: Form;
}

type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<RouteParams>;

const Wrapper = styled.div`
    position: absolute;
    background-color: #fff;
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
`;

class ShowFormPage extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);

        this.state = {};
    }

    public componentDidMount() {
        const { match, fetchForm } = this.props;
        fetchForm(match.params.id);
    }

    public render() {
        const { item, loading } = this.props;
        if (!item.id) return null;

        return (
            <Wrapper>
                <SliderPokemon item={item} />
            </Wrapper>
        );
    }
}

const mapStateToProps = ({ forms }: ApplicationState) => ({
    loading: forms.loading,
    errors: forms.errors,
    item: forms.item,
});

const mapDispatchToProps = {
    fetchForm: (name: string) => fetchItemRequest(name),
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowFormPage);

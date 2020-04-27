import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

import Page from '../../components/layout/Page';

import { ApplicationState } from '../../store';
import { Ability } from '../../store/abilities/types';
import { fetchItemRequest } from '../../store/abilities/actions';
import SliderPokemon from '../../components/SliderPokemon';

interface PropsFromState {
    loading: boolean;
    item: Ability | any;
    errors?: string;
}

interface PropsFromDispatch {
    fetchAbility: typeof fetchItemRequest;
}

interface RouteParams {
    id: string;
}

interface State {
    selected?: Ability;
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

class ShowAbilityPage extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);

        this.state = {};
    }

    public componentDidMount() {
        const { match, fetchAbility } = this.props;
        fetchAbility(match.params.id);
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

const mapStateToProps = ({ abilities }: ApplicationState) => ({
    loading: abilities.loading,
    errors: abilities.errors,
    item: abilities.item,
});

const mapDispatchToProps = {
    fetchAbility: (name: string) => fetchItemRequest(name),
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowAbilityPage);

import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Page from '../../components/layout/Page';

import { ApplicationState } from '../../store';
import { Pokemon } from '../../store/pokemons/types';
import { fetchItemRequest } from '../../store/pokemons/actions';
import SliderPokemon from '../../components/SliderPokemon';

interface PropsFromState {
    loading: boolean;
    item: Pokemon | any;
    errors?: string;
}

interface PropsFromDispatch {
    fetchPokemon: typeof fetchItemRequest;
}

interface RouteParams {
    id: string;
}

interface State {
    selected?: Pokemon;
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

class ShowPokemonPage extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props);

        this.state = {};
    }

    public componentDidMount() {
        const { match, fetchPokemon } = this.props;
        fetchPokemon(match.params.id);
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

const mapStateToProps = ({ pokemons }: ApplicationState) => ({
    loading: pokemons.loading,
    errors: pokemons.errors,
    item: pokemons.item,
});

const mapDispatchToProps = {
    fetchPokemon: (name: string) => fetchItemRequest(name),
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPokemonPage);

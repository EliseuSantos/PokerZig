import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Page from '../../components/layout/Page';

import { ApplicationState } from '../../store';
import { Pokemon } from '../../store/pokemons/types';
import { fetchRequest } from '../../store/pokemons/actions';
import CardPokemon from '../../components/CardPokemon';

interface PropsFromState {
    loading: boolean;
    data: Pokemon[];
    errors?: string;
}

interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Wrapper = styled.div`
    margin: 150px auto;
`;

const WrapperCards = styled.div`
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    align-self: flex-start;
    align-content: flex-start;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`;

class PokemonIndexScreen extends React.Component<AllProps> {
    public componentDidMount() {
        const { fetchRequest: fr } = this.props;
        fr();

        window.addEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.handleScroll);
    }

    public handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
        alert('Fetch more list items!');
    }

    private renderData() {
        const { loading, data } = this.props;

        return (
            <WrapperCards>
                {data.map((pokemon, key) => (
                    <CardPokemon
                        className="card-item"
                        key={key}
                        title={pokemon.name}
                        link={`/pokemons/${pokemon.name}`}
                    />
                ))}
            </WrapperCards>
        );
    }

    public render() {
        const { loading } = this.props;

        return (
            <Page>
                <Wrapper>{this.renderData()}</Wrapper>
            </Page>
        );
    }
}

const mapStateToProps = ({ pokemons }: ApplicationState) => ({
    loading: pokemons.loading,
    errors: pokemons.errors,
    data: pokemons.data,
});

const mapDispatchToProps = {
    fetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndexScreen);

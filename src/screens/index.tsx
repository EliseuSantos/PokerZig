import * as React from 'react';
import Page from '../components/layout/Page';
import Card from '../components/Card';
import styled from 'styled-components';
import IconBack from '../components/IconBack';

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    height: 100vh;
`;

function Index() {
    return (
        <Page>
            <Content>
                <Card link="/pokemons" title="Pokemon" image="pikachu.png" />
                <Card link="/moves" title="Moves" image="movimento.png" />
                <Card link="/pokemons" title="Abilities" image="habilidades.png" />
                <Card link="/pokemons" title="Forms" image="formas.png" />
                <Card link="/pokemons" title="Locations" image="mapa.png" />
            </Content>
        </Page>
    );
}

export default Index;

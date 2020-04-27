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
                <Card link="/abilities" title="Abilities" image="habilidades.png" />
                <Card link="/forms" title="Forms" image="formas.png" />
            </Content>
        </Page>
    );
}

export default Index;

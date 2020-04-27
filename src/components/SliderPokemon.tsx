import * as React from 'react';
import styled from 'styled-components';
import { Pokemon } from '../store/pokemons/types';
import IconBack from './IconBack';

interface SliderPokemonProps {
    item: Pokemon | any;
}

const Wrapper = styled.div`
    user-select: none;
    display: inline-block;

    & .card-link {
        text-decoration: none;
    }
`;
const MenuItem = styled.div`
    background: #e53935;
    text-align: left;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease-out;
    margin-bottom: 3px;
`;
const HeaderInfo = styled.p`
    padding: 10px;
    font-size: 15px;
    color: #4c5656;
    z-index: 1000;
    font-weight: bold;
    transition: color 0.3s ease-out;

    & span {
        color: #e53935;
    }
`;

const ContentSprites = styled.div`
    position: absolute;
    top: -2px;
    width: 100%;
`;

const ImgSprites = styled.img`
    margin-left: -64px;
`;

const ContentInline = styled.div`
    display: inline-block;

    & p {
        width: auto;
        display: inline-block;
        list-style: circle;
        padding: 0 10px;
    }
`;

const Icon = styled.i`
    border: solid black;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 8px;
    position: absolute;
    top: -94px;
    transition: all 0.3s ease-out;

    &:hover {
        cursor: pointer;
        transform: translateY(-10px) scale(1.005) translateZ(-5px);
        box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #0000003d;
    }

    &.left {
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
    }
`;

const SliderPokemon: React.SFC<SliderPokemonProps> = ({ item }) => (
    <Wrapper>
        <div className="slider__warpper">
            <div className="flex__container flex--pikachu flex--active" data-slide="1">
                <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <IconBack link="/pokemons" />
                        <p className="text--sub">Information</p>
                        <ContentSprites>
                            <ImgSprites src={item.sprites.front_default} width="170" />
                            <ImgSprites src={item.sprites.front_shiny} width="170" />
                            <ImgSprites src={item.sprites.back_default} width="170" />
                            <ImgSprites src={item.sprites.back_shiny} width="170" />
                        </ContentSprites>
                        <h1 className="text--big">{item.name}</h1>
                        <p className="text--normal">LORELORELORELORELREOLREO</p>
                    </div>
                    <p className="text__background">{item.name}</p>
                </div>
                <div className="flex__item flex__item--right">
                    <div>
                        <MenuItem>About</MenuItem>
                        <div>
                            <HeaderInfo>
                                Name: <span>{item.name}</span>
                            </HeaderInfo>
                            <HeaderInfo>
                                Weight: <span>{item.weight}</span>
                            </HeaderInfo>
                            <HeaderInfo>
                                Height: <span>{item.height}</span>
                            </HeaderInfo>
                            <HeaderInfo>
                                Experience: <span>{item.base_experience}</span>
                            </HeaderInfo>
                        </div>
                    </div>
                    <div>
                        <MenuItem>Abilities</MenuItem>
                        {item.abilities.length &&
                            item.abilities.map((ab: any, key: number) => {
                                return <HeaderInfo key={key}>{ab.ability.name}</HeaderInfo>;
                            })}
                    </div>
                    <div>
                        <MenuItem>Forms</MenuItem>
                        {item.forms.length &&
                            item.forms.map((form: any, key: number) => {
                                return <HeaderInfo key={key}>{form.name}</HeaderInfo>;
                            })}
                    </div>
                    <div>
                        <MenuItem>Moves</MenuItem>
                        <ContentInline>
                            {item.moves.length &&
                                item.moves.map((mvItem: any, key: number) => {
                                    return <HeaderInfo key={key}>{mvItem.move.name}</HeaderInfo>;
                                })}
                        </ContentInline>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
);

export default SliderPokemon;

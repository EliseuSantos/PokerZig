import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface CardProps {
    title: string;
    image: string;
    link: string;
}

const Wrapper = styled.div`
    user-select: none;

    & .card-link {
        text-decoration: none;
    }
`;

const CardItem = styled.div`
    width: 220px;
    height: 321px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 5px;
    position: relative;
    box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease-out;
    text-decoration: none;

    &:active {
        transform: scale(1) translateZ(0);
        box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px #0000003d;
    }
    &:hover {
        cursor: pointer;
        transform: translateY(-10px) scale(1.005) translateZ(0);
        box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px #0000003d;

        & .overlay {
            transform: scale(4) translateZ(0);
        }

        & .card-text {
            color: #fff;
        }

        & .circle {
            border-color: #fff;
            background: green;

            &:after {
                background: blue;
            }
        }
    }
`;

const CardCircle = styled.div`
    width: 131px;
    height: 131px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #f8d41f;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-out;
`;
const CardOverlay = styled.div`
    width: 118px;
    position: absolute;
    height: 118px;
    border-radius: 50%;
    background: #e53935;
    top: 70px;
    left: 50px;
    z-index: 0;
    transition: transform 0.3s ease-out;

    &:after {
        content: '';
        width: 118px;
        height: 118px;
        display: block;
        position: absolute;
        background: var(--bg-color);
        border-radius: 50%;
        top: 7px;
        left: 7px;
        transition: opacity 0.3s ease-out;
    }
`;

const CardText = styled.p`
    font-size: 20px;
    color: #4c5656;
    margin-top: 30px;
    z-index: 1000;
    font-weight: bold;
    underline: none;
    transition: color 0.3s ease-out;
`;

const Card: React.SFC<CardProps> = ({ title, image, link }) => (
    <Wrapper>
        <NavLink exact to={link} className="card-link">
            <CardItem>
                <CardOverlay className="overlay"></CardOverlay>
                <CardCircle>
                    <img src={`public/imgs/${image}`} width="80" />
                </CardCircle>
                <CardText className="card-text">{title}</CardText>
            </CardItem>
        </NavLink>
    </Wrapper>
);

export default Card;

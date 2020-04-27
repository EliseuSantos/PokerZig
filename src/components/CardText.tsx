import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface CardTextProps {
    title: string;
    link: string;
    className: string;
}

const Wrapper = styled.div`
    user-select: none;
    display: inline-block;

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
    }
`;

const CardTextInner = styled.p`
    font-size: 20px;
    color: #4c5656;
    margin-top: 30px;
    text-transform: capitalize;
    z-index: 1000;
    font-weight: bold;
    underline: none;
    transition: color 0.3s ease-out;
`;

const CardText: React.SFC<CardTextProps> = ({ title, link }) => (
    <Wrapper className="card-item">
        <NavLink exact to={link} className="card-link">
            <CardItem>
                <CardTextInner className="card-text">{title}</CardTextInner>
            </CardItem>
        </NavLink>
    </Wrapper>
);

export default CardText;

import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

interface IconBackProps {
    link: string;
    className?: string;
}

const IconBack: React.SFC<IconBackProps> = ({ className, link }) => (
    <NavLink exact to={link} className="card-link">
        <Icon className="arrow left"></Icon>
    </NavLink>
);

export default IconBack;

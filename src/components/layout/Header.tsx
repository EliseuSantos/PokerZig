import * as React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    title: string;
    subtitle: string;
}

const HeaderTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 7.5em;
    text-align: center;
    font-weight: 700;
    line-height: 110px;
    margin: 0;
`;

const HeaderBg = styled.p`
    font-family: 'Poppins', sans-serif;
    position: absolute;
    left: 0;
    right: 0;
    margin: -5% auto;
    width: 900px;
    color: rgba(0, 0, 0, 0.05);
    font-size: 170px;
    font-weight: 700;
`;

const Header: React.SFC<HeaderProps> = ({ title, subtitle }) => (
    <div>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderBg>{subtitle}</HeaderBg>
    </div>
);

export default Header;

import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
    className?: string;
}

const Wrapper = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #f8d41f;
    color: green;
`;

const Root: React.SFC<RootProps> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Root;

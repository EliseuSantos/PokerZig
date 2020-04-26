import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #f8d41f;
    color: green;
`;

const Page: React.SFC = ({ children }) => <Container>{children}</Container>;

export default Page;

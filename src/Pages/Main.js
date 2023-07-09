import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Common/Nav';

function Main() {
    return (
        <Body>
            <Nav />
        </Body>
    )
}

export default Main;

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0px;
    background: #FFCF5E;
`;
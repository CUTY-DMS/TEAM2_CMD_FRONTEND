import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Body>
            <Container>
            </Container>
        </Body>
    )
}

export default Login;

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 0px;
    background: #FFCF5E;
`;

const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 655px;
    height: 845px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #FFF;
`;
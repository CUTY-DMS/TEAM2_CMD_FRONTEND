import React from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";

function StudentDetail() {
  return (
    <Body>
      <Nav />
      <Box>
        <Head>
          <Logo src="/imgs/Logo.svg" alt="" />
          <Name>한건희</Name>
        </Head>
      </Box>
    </Body>
  );
}

export default StudentDetail;

const Body = styled.body`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0px;
  background: #ffcf5e;
`;

const Box = styled.div`
  width: 90%;
  max-width: 1230px;
  height: 650px;
  border-radius: 30px;
  background-color: white;
  margin-top: 80px;
`;

const Head = styled.div`
  display: flex;
  margin-top: 50px;
`;
const Logo = styled.img`
  display: flex;
  width: 80px;
  height: 60px;
  padding-right: 40px;
  padding-left: 100px;
`;
const Name = styled.div`
  font-size: xx-large;
  font-weight: bold;
  margin-top: 5px;
`;

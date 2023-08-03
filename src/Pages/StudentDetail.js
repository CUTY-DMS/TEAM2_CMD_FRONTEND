import { styled } from "styled-components";
import React from "react";

export const StudentDetail = () => {
  return <Wrapper>
    <Box>
      <Head>
        <img src="/imgs/Logo.svg" alt="" width="80" height="60"/>
        <Name>한건희</Name>
      </Head>
    </Box>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`

const Box = styled.div`
  width: 90%;
  height: 650px;
  max-width: 1230px;
  background: white;
  padding-top: 50px;
  padding-left: 100px;
  border-radius: 30px;
  box-sizing: border-box;
`

const Head = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`

const Name = styled.h1`
  font-size: xx-large;
  font-weight: bolder;
`

import { styled } from 'styled-components';
import React from 'react';

export const AnnounceRead = () => {
  return <Wrapper>
    <BoxFlex>
      <Textbox>
        <Title value="" readOnly />
        <Text value="" readOnly/>
      </Textbox>
    </BoxFlex>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`

const BoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`

const Textbox = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 670px;
  background: white;
  border-radius: 50px;
`

const Title = styled.textarea`
  width: 95%;
  height: 40px;
  margin-top: 40px;
  border-bottom: 1px solid gray;
  font-size: 25px;
  font-weight: bolder;
`

const Text = styled.textarea`
  margin-top: 5px;
  width: 95%;
  font-size: 16px;
`
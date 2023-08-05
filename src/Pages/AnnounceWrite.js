import { styled } from 'styled-components';
import React from 'react';

export const AnnounceWrite = () => {
  return <Wrapper>
    <BoxFlex>
      <Textbox>
        <Title placeholder="제목"/>
        <Text rows="25" cols="155" placeholder="내용을 입력해주세요." />
      </Textbox>
      <FinButton>
        <img src="/imgs/Notice.svg" alt="" /> 
        <h1>작성 완료</h1>
      </FinButton>
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

const Textbox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 670px;
  margin-top: 30px;
  background: white;
  border-radius: 50px;
`

const Title = styled.input`
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

const FinButton = styled.button`
  gap: 10px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  width: 200px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
  background: white;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bolder;
  &:hover { border: 1px solid black;}
`
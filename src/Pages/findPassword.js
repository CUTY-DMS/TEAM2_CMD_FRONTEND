import React, { useState } from "react";
import { styled } from "styled-components";
import { postEmail } from "../apis/post/postEmail";

export const FindPassword = () => {
  const [data, setData] = useState({
    userEmail: ""
  });

  const handleClick = () => {
    postEmail(data).then(res => {
      if(res) {
        alert("해당 이메일로 가입한 계정의 비밀번호가 메일함으로 발송되었습니다");
        window.location.href = "/Login";
      }
    })
  }

  return (
    <Wrapper>
      <Box>
        <Title>비밀번호 찾기</Title>
        <InputWrapper>
          <InputBox>
            <Input placeholder="이메일을 입력하세요" onChange={ e => setData({ userEmail: e.target.value }) }/>
            <Line />
          </InputBox>
          <Btn onClick={handleClick}>비밀번호 찾기</Btn>
        </InputWrapper>
        <Return type="button" value="돌아가기" onClick={() => window.location.href = "/Login"} />
      </Box>
    </Wrapper>
  );
};

const Btn = styled.button`
  width: 130px;
  height: 30px;
  background-color: white;
  border-radius: 30px;
  border: solid 1px;
  border-color: #ffcf5e;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    border-color: #ffb405;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputBox = styled.div`
  /* gap: 5px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  max-width: 400px;
  margin-bottom: 300px;
`;

const Line = styled.div`
  width: 300px;
  border-top: 2px solid #585858;
  margin-top: 6px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 17px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bolder;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 770px;
  max-width: 590px;
  padding-top: 50px;
  padding-bottom: 90px;
  background: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Return = styled.input`
  width: 70%;
  height: 40px;
  max-width: 300px;
  cursor: pointer;
  margin-top: 90px;
  border-radius: 15px;
  background: #ffcf5e;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  font-size: medium;
  font-weight: bolder;
`;
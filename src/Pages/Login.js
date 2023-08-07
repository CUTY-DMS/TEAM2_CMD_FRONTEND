import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { signIn } from "../apis/auth/signIn";

export const Login = () => {
  const [data, setData] = useState({
    userId: "",
    userName: "",
    passWord: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const handleLogin = () => {
    signIn(data).then(res => {
      if(res) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        window.location.href = "/";
      }
    })
  }

  return <Wrapper>
	<Box>
	  <Title>로그인</Title>
	    <InputBox>
		  <ITitle>아이디</ITitle>
		  <Input name="userId" placeholder="아이디를 입력하세요" onChange={handleChange} />
		  <Line />
		</InputBox>
		<InputBox>
		  <ITitle>계정명</ITitle>
		  <Input name="userName" placeholder="계정 이름을 입력하세요" onChange={handleChange} />
		  <Line />
		</InputBox>
      <InputBox>
	  	  <ITitle>비밀번호</ITitle>
	  	  <Input name="password" placeholder="비밀번호를 입력하세요" type="password" onChange={handleChange} />
	  	  <Line />
	  	  <NoAccount>아직 계정이 없으신가요?<CButton to="/SignUp">회원가입</CButton></NoAccount>
        <NoAccount>혹은 비밀번호를 잊어버리셨나요?<CButton to="/findPassword">비밀번호 찾기</CButton></NoAccount>
	    </InputBox>
	    <Button onClick={handleLogin}>로그인</Button>
	  </Box>
	</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

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
`

const InputBox = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  max-width: 400px;
`

const Line = styled.div`
  width: 100%;
  border-top: 2px solid #585858;
`

const Title = styled.h1`
  font-size: 30px;
  font-weight: bolder;
`

const ITitle = styled.h1`
  color: #585858;
  font-size: small;
  font-weight: bolder;
`

const Input = styled.input` width: 100%; `

const NoAccount = styled.h1`
  color: #585858;
  font-size: small;
`

const CButton = styled(Link)`
  cursor: pointer;
  background: white;
  color: black;
  font-size: small;
  font-weight: bold;
`

const Button = styled.button`
  width: 70%;
  height: 40px;
  max-width: 300px;
  cursor: pointer;
  margin-top: 160px;
  border-radius: 15px;
  background: #ffcf5e;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  font-size: medium;
  font-weight: bolder;
`
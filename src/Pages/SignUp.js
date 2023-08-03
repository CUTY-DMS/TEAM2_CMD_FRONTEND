import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { signUp } from "../apis/auth/signUp";

export const SignUp = () => {
  const [data, setData] = useState({
    userId : "",
    password : "",
    username : "",
    grader : 0,
    schoolClass : 0,
    userEmail : "",
    subjectType : "",
    secretKey: ""
  });
  const [check, setCheck] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const handleSignUp = () => {
    if(data.password===check) {
      signUp(data).then(res => {
        if(res) { 
          alert("계정이 생성되었습니다");
          window.location.href = "/Login";
        }
      })
    }
    else { alert("비밀번호를 확인해주세요."); }
  }

	return <Wrapper>
		<Box>
			<Title>회원가입</Title>
      <InputBox>
				<ITitle>이메일</ITitle>
				<Input name="userEmail" placeholder="이메일을 입력하세요" onChange={handleChange} />
				<Line />
			</InputBox>
			<InputBox>
        <TwoBox>
          <div>
				    <ITitle>아이디</ITitle>
				    <Input name="userId" placeholder="아이디를 입력하세요" onChange={handleChange} />
				    <Line />
          </div>
          <div>
            <ITitle>계정명</ITitle>
				    <Input name="username" placeholder="계정명을 입력하세요" onChange={handleChange} />
				    <Line />
          </div>
        </TwoBox>
			</InputBox>
			<InputBox>
        <TwoBox>
          <div>
				  <ITitle>비밀번호</ITitle>
				  <Input name="password" placeholder="비밀번호를 입력하세요" type="password" onChange={handleChange} />
				  <Line />
          </div>
          <div>
            <ITitle>비밀번호 확인</ITitle>
				    <Input placeholder="비밀번호를 입력하세요" type="password" onChange={(e) => setCheck(e.target.value)} />
				    <Line />
          </div>
        </TwoBox>
			</InputBox>
		  <InputBox>
        <ITitle>가입코드</ITitle>
				<Input name="secretKey" placeholder="가입코드를 입력하세요" onChange={handleChange} />
				<Line />
			</InputBox>
      <InputBox>
        <OptionBox>
          <select name="grader" onChange={handleChange} value="None">
            <option disabled value="None">학년</option>
            <option value={1}>1학년</option>
            <option value={2}>2학년</option>
            <option value={3}>3학년</option>
          </select>
          <select name="schoolClass" onChange={handleChange} value="None">
            <option disabled value="None">반</option>
            <option value={1}>1반</option>
            <option value={2}>2반</option>
            <option value={3}>3반</option>
            <option value={4}>4반</option>
          </select>
          <select name="subjectType" onChange={handleChange} value="None">
            <option disabled value="None">과목</option>
            <option value="KOREAN">국어</option>
            <option value="MATH">수학</option>
            <option value="SOCIAL">사회</option>
            <option value="SCIENCE">과학</option>
            <option value="ENGLISH">영어</option>
            <option value="HISTORY">역사</option>
            <option value="ART">미술</option>
            <option value="ATHLETIC">체육</option>
            <option value="MUSIC">음악</option>
          </select>
        </OptionBox>
        <NoAccount>이미 계정이 있으신가요?<CButton to="/Login">로그인</CButton></NoAccount>
      </InputBox>
			<Button onClick={handleSignUp}>회원가입</Button>
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

const OptionBox = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: -10px;
  & > select {
    width: 100%;
    height: 30px;
    border-radius: 5px;
  }
`

const TwoBox = styled.div`
  gap: 20px;
  display: flex;
  justify-content: space-between;
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

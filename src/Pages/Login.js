import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Body>
			<Container>
				<Title>로그인</Title>
				<Wrapper>
					<IPTitle>아이디</IPTitle>
					<Input placeholder="아이디를 입력하세요.."></Input>
					<Line></Line>
				</Wrapper>
				<Wrapper>
					<IPTitle>비밀번호</IPTitle>
					<Input placeholder="비밀번호를 입력하세요.." type="password"></Input>
					<Line></Line>
					<AccountBox>
						<NoAccount>아직 계정이 없으신가요? </NoAccount>
						<SignUpButton>회원가입</SignUpButton>
					</AccountBox>
				</Wrapper>
				<LoginButton>로그인</LoginButton>
			</Container>
		</Body>
	);
}

export default Login;

const Body = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0px;
	background: #ffcf5e;
`;

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	width: 590px;
	height: 770px;
	box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	background: #fff;
`;

const Title = styled.div`
	font-size: 30px;
	font-weight: 1000;
	padding-top: 50px;
	padding-bottom: 80px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 418px;
	height: 150px;
`;

const IPTitle = styled.div`
    font-weight: 700;
	color: #585858;
	padding-bottom: 10px;
	padding-top: 20px;
`;
const Input = styled.input`
	border: none;
	outline: none;
	width: 100%;
`;
const Line = styled.div`
	width: 380px;
	margin-top: 5px;
	border-top: 2px solid #585858;
`;

const NoAccount = styled.div`
	display: flex;
	flex-direction: row;
	font-size: small;
	color: #585858;
`;
const SignUpButton = styled.button`
	background-color: white;
    margin-top: -2px;
	border: none;
	color: black;
	font-weight: bold;
	cursor: pointer;
`;

const AccountBox = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 20px;
`;

const LoginButton = styled.button`
	background-color: #ffcf5e;
	border: none;
	width: 300px;
	height: 42px;
	border-radius: 15px;
	font-size: medium;
	font-weight: 700;
	box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
    cursor: pointer;
    margin-top: 160px;
`;

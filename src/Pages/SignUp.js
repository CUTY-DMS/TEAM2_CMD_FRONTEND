import React from "react";
import styled from "styled-components";

function SignUp() {
	return (
		<Body>
			<Container>
				<Title>회원가입</Title>
				<Wrapper>
					<SignTitle>아이디</SignTitle>
					<Input placeholder="아이디를 입력하세요.."></Input>
					<Line></Line>
				</Wrapper>
				<Wrapper>
					<SignTitle>비밀번호</SignTitle>
					<Input placeholder="비밀번호를 입력하세요.." type="password"></Input>
					<Line></Line>
				</Wrapper>
				<Wrapper>
					<SignTitle>비밀번호 확인</SignTitle>
					<Input placeholder="비밀번호를 입력하세요.." type="password"></Input>
					<Line></Line>
				</Wrapper>
				<Wrapper>
					<SignTitle>가입코드</SignTitle>
					<Input placeholder="가입코드를 입력하세요.."></Input>
					<Line></Line>
				</Wrapper>
				<Wrapper>
					<AccountBox>
						<NoAccount>이미 계정이 있으신가요?</NoAccount>
						<LoginButton>로그인</LoginButton>
					</AccountBox>
				</Wrapper>
				<SignUpButton>회원가입</SignUpButton>
			</Container>
		</Body>
	);
}

export default SignUp;

const Body = styled.body`
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
	height: 69px;
	margin-bottom: 20px;
`;

const SignTitle = styled.div`
	padding-bottom: 10px;
	padding-top: 20px;
	font-weight: 700;
	color: #585858;
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
const LoginButton = styled.button`
	margin-top: -2px;
	background-color: white;
	border: none;
	color: black;
	font-weight: bold;
	cursor: pointer;
`;

const AccountBox = styled.div`
	display: flex;
    margin-bottom: 50px;
`;
const SignUpButton = styled.button`
	background-color: #ffcf5e;
	border: none;
	width: 300px;
	height: 42px;
	border-radius: 15px;
	font-size: medium;
	font-weight: 700;
	box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
	cursor: pointer;
	margin-top: 30px;
`;

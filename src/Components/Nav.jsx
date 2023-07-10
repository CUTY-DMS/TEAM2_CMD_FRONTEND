import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Wrapper>
      <Left>
        <Logo src="/imgs/Logo.svg" alt="" />
        <LinkButton>시간표</LinkButton>
        <LinkButton>공지사항</LinkButton>
        <LinkButton>학생정보</LinkButton>
      </Left>
      <Right>
        <UserInfo>
          <UserName>1-2 최수장</UserName>
          <UserButton>로그아웃</UserButton>
        </UserInfo>
        <RightBar />
      </Right>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 50%;
  width: 100vw;
  height: 100px;
  background-color: white;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 11px;
  color: #A3A3A3;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const LinkButton = styled.h1`
  display: inline-block;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const UserButton = styled.h1`
  display: block;
  font-size: 15px;
`;

const UserName = styled.h1`
  font-size: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RightBar = styled.div`
  width: 3px;
  height: 70px;
  background-color: #FFCF5E;
`;

const Logo = styled.img`
  width: 100px;
  height: 80px;
  margin-right: -10px;
`;
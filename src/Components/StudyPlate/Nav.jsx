import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper>
      <Left>
        <Logo src="/imgs/SpLogo.svg" alt="" />
        <Buttons>
          <h1><StyledLink to="/StudyPlate/schedule">과제 일정</StyledLink></h1>
          <h1><StyledLink to="/StudyPlate/check">과제 확인</StyledLink></h1>
          <h1><CMD to="/">CMD</CMD></h1>
        </Buttons>
      </Left>
      <Right>
        <UserInfo>
          <UserName to="/MyProfile">1-2 최수장</UserName>
          <Logout to="/Login">{"〈"} 로그아웃</Logout>
        </UserInfo>
        <RightBar />
      </Right>
    </Wrapper>
  );
};

export default Nav;

// 배경 부분
const Wrapper = styled.div` 
  display: inline-flex;
  justify-content: center;
  gap: 45%;
  width: 100%;
  height: 100px;
  background-color: white;
`;

//각각 왼쪽 내용 (네비게이션 버튼들), 오른쪽 내용 (로그아웃 버튼)
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-size: 11px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

//왼쪽 내용
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 11px;
`;

const Logo = styled.img`
  width: 200px;
  height: 80px;
`;

//오른쪽 내용
const UserInfo = styled.div`
  text-decoration-line: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px
`;

const UserName = styled(Link)`
  font-weight: bolder;
  text-decoration-line: none;
  font-size: 25px;
  margin: 0px;
  &:link,&:visited,&:hover {
    cursor: pointer;
    color: #000;
  }
`;

const Logout = styled(Link)`
  margin: 0px;
  text-decoration-line: none;
  font-size: 15px;
  font-weight: lighter;
  transition: all 0.2s;
  &:link,&:visited {
    color: #A3A3A3;
  }
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const RightBar = styled.div`
  width: 3px;
  height: 70px;
  background-color: #7CF07C;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration-line: none;
  transition: all 0.2s;
  &:link, &:visited {
    color: #A3A3A3;
  } &:hover {
    cursor: pointer;
    color: #000;
  }
`;

const CMD = styled(Link)`
  display: inline-block;
  text-decoration-line: none;
  transition: all 0.2s;
  &:link, &:visited {
    color: #A3A3A3;
  } &:hover {
    cursor: pointer;
    color: #FFCF5E;
  }
`;
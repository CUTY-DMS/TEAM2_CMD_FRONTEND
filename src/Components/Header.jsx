import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  console.log(window.location);
  return (
    <Wrapper>
      <Left>
        <img src="/imgs/Logo.svg" alt="" width="100" height="80px" />
        <StyledLink to="/">시간표</StyledLink>
        <StyledLink to="/Announcement">공지사항</StyledLink>
        <StyledLink to="/StudentList">학생정보</StyledLink>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding-left: 100px;
  padding-right: 100px;
  background: white;
  box-sizing: border-box;
`;

const Left = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserInfo = styled.div`
  gap: 5px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const UserName = styled(Link)`
  cursor: pointer;
  color: black;
  font-size: 23px;
`;

const Logout = styled(Link)`
  cursor: pointer;
  transition: 0.2s;
  color: gray;
  font-size: 13px;
  font-weight: lighter;
  &:hover {
    color: black;
  }
`;

const RightBar = styled.div`
  width: 3px;
  height: 60px;
  background: #ffcf5e;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  transition: 0.2s;
  color: gray;
  font-size: 22px;
  &:hover {
    color: black;
  }
`;

import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAdminInfo } from "../apis/get/getAdminInfo";

export const Header = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if(!localStorage.getItem("userInfo")) {
      getAdminInfo().then(res => {
        if(res) {
          let data = res.data;
          data = Object.values(data).sort();
          data.map(data => { 
          setUserInfo(userInfo => [...userInfo, data]) 
        });
        }
        localStorage.setItem("userInfo", [res.data.grader, res.data.schoolClass, res.data.subjectType, res.data.username]);
      })
    } else {
      const data = localStorage.getItem("userInfo").split(',');
      data.map(data => { 
        setUserInfo(userInfo => [...userInfo, data]) 
      });
    }
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userInfo");
    window.location.href = "/Login";
  }

  return <Wrapper>
    <Left>
      <img src="/imgs/Logo.svg" alt="" width="100" height="80px" />
      <StyledLink to="/">시간표</StyledLink>
      <StyledLink to="/Announcement">공지사항</StyledLink>
      <StyledLink to="/StudentList">학생정보</StyledLink>
    </Left>
    <Right>
      <UserInfo>
        {
          userInfo.length!==0
          ? <UserName to="/MyProfile">{userInfo[0]}-{userInfo[1]} {userInfo[3]}</UserName>
          : <UserName to="">0-0 아무개</UserName>
        }
        <Logout onClick={handleLogOut}>{"〈"} 로그아웃</Logout>
      </UserInfo>
      <RightBar />
    </Right>
  </Wrapper>
}

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

const Logout = styled.h1`
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

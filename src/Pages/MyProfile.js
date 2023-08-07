import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import EditProfile from "./EditProfile";

export const MyProfile = () => {
  const [userInfo, setUserInfo] = useState([]);
  const subjectInfo = {
    "KOREAN": "국어",
    "ENGLISH": "영어",
    "MATH": "수학",
    "SOCIETY": "사회",
    "SCIENCE": "과학",
    "HISTORY": "역사",
    "ART": "미술",
    "ATHLETIC": "체육",
    "MUSIC": "음악"
  }

  useEffect(() => {
    const data = localStorage.getItem("userInfo").split(',');
    data.map(data => { 
      setUserInfo(userInfo => [...userInfo, data]) 
    });
  }, [])

  const handleEdit = () => {
    window.location.href = "/EditProfile";
  }

  return (
    <Wrapper>
      <Body>
        <Box>
          <TeacherWrapper>
            <div>
              <img src="/imgs/Logo.svg" alt="" width="80" height="60" />
              <TeacherName>{userInfo[3]} 선생님</TeacherName>
            </div>
            <div onClick={handleEdit}>
              <img src="/imgs/edit.svg" alt="" />
            </div>
          </TeacherWrapper>
          <Info>
            <Line></Line>
            <InfoTitle>
              <Name>이름</Name>
              <Charger>담당</Charger>
              <Subject>과목</Subject>
            </InfoTitle>
            <Infos>
              <NameA>{userInfo[3]}</NameA>
              <ChargerA>{userInfo[0]}학년 {userInfo[1]}반 담임</ChargerA>
              <SubjectA>{subjectInfo[userInfo[2]]}</SubjectA>
            </Infos>
            <Img></Img>
          </Info>
        </Box>
      </Body>
    </Wrapper>
  );
};

const Img = styled.img`
  margin-left: 100px;
  width: 410px;
  height: 210px;
`;

const Line = styled.div`
  width: 2px;
  height: 330px;
  background-color: #787878;
  margin-right: 130px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  align-items: center;
  margin-top: 120px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameA = styled.div`
  margin-left: 80px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
const ChargerA = styled.div`
  margin-left: 80px;
  margin-top: 40px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
const SubjectA = styled.div`
  margin-left: 80px;
  margin-top: 40px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;
const Charger = styled.div`
  margin-top: 40px;
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;
const Subject = styled.div`
  margin-top: 40px;
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const TeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  padding-left: 85px;
  padding-right: 85px;
  box-sizing: border-box;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:nth-child(2) {
    width: 50px;
    height: 50px;
    transition: 0.1s;
    border-radius: 100%;
    box-shadow: 1px 1px 5px black;
    &:hover {
      transition: 0.1s;
      box-shadow: 2px 2px 10px black;
    }
  }
`;
const TeacherName = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 25px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 1205px;
  height: 695px;
  border-radius: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 89vh;
  background-color: #ffcf5e;
`;
import { styled } from "styled-components";
import React from "react";

export const MyProfile = () => {
  return (
    <Wrapper>
      <Body>
        <Box>
          <TeacherWrapper>
            <img src="/imgs/Logo.svg" alt="" width="80" height="60" />
            <TeacherName>최수장 선생님</TeacherName>
          </TeacherWrapper>
          <Info>
            <Line></Line>
            <InfoTitle>
              <Name>이름</Name>
              <Charger>담당</Charger>
              <Subject>과목</Subject>
              <Birthday>생년월일</Birthday>
            </InfoTitle>
            <Infos>
              <NameA>최수장</NameA>
              <ChargerA>1학년 2반 담임</ChargerA>
              <SubjectA>프로그래밍</SubjectA>
              <BirthdayA>2000.01.01</BirthdayA>
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
const BirthdayA = styled.div`
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
const Birthday = styled.div`
  margin-top: 40px;
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const TeacherWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-top: 80px;
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

export default MyProfile;

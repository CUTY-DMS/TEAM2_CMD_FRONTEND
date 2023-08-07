import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { patchAdminInfo } from "../apis/post/patchAdminInfo";
import { patchPassword } from "../apis/post/patchPassword";

export const EditProfile = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    grader: 0,
    schoolClass: 0,
    subjectType: ""
  });
  const [password, setPassword] = useState({
    password: "",
    newPassword: ""
  });
  const [pwChange, setPwChange] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("userInfo").split(',');
    setUserInfo({
      username: data[3],
      grader: Number(data[0]),
      schoolClass: Number(data[1]),
      subjectType: data[2]
    })
  }, [])

  const handleSave = () => {
    patchAdminInfo(userInfo).then(res => {
      if(res) {
        if(pwChange===true) {
          patchPassword(password).then(res => { if(res) gotoProf(); })
        } else { 
          gotoProf();
        }
      }
    })
  }

  const gotoProf = () => {
    alert("정보가 정상적으로 수정되었습니다");
    localStorage.setItem("userInfo", [userInfo.grader, userInfo.schoolClass, userInfo.subjectType, userInfo.username]);
    window.location.href = "/Myprofile";
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    if(e.target.name==="grader" || e.target.name==="schoolClass") setUserInfo({...userInfo, [name]: Number(value)});
    else if(e.target.name==="password" || e.target.name==="newPassword") setPassword({...password, [name]: value});
    else setUserInfo({...userInfo, [name]: value});
    console.log(userInfo);
  }

  return (
    <Wrapper>
      <Body>
        <Box>
          <TeacherWrapper>
            <div>
              <img src="/imgs/Logo.svg" alt="" width="80" height="60" />
              <TeacherName>정보 수정</TeacherName>
            </div>
            <div onClick={handleSave}>
              <img src="/imgs/save.svg" alt="" width="25" height="25" />
            </div>
          </TeacherWrapper>
          <Info>
            <Line />
            <div>
              <InfoTitle>
                <Name>이름 <input name="username" value={userInfo.username} onChange={handleChange}/></Name>
                <Charger>학년
                  <select name="grader" onChange={handleChange} defaultValue={userInfo.grader} key={userInfo.grader}>
                    <option value={0} disabled>학년</option>
                    <option value={1}>1학년</option>
                    <option value={2}>2학년</option>
                    <option value={3}>3학년</option>
                  </select>
                </Charger>
                <Charger>반
                  <select name="schoolClass" onChange={handleChange} defaultValue={userInfo.schoolClass} key={userInfo.schoolClass}>
                    <option value={0} disabled>반</option>
                    <option value={1}>1반</option>
                    <option value={2}>2반</option>
                    <option value={3}>3반</option>
                    <option value={4}>4반</option>
                  </select>
                </Charger>
                <Charger> 과목
                <select name="subjectType" onChange={handleChange} defaultValue={userInfo.subjectType} key={userInfo.subjectType}>
                  <option disabled>과목</option>
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
                </Charger>
              </InfoTitle>
            </div>
            <Line />
            <div>
              <InfoTitle>
                <PWEdit>비밀번호 수정 여부 <input type="checkbox" name="pwEdit" onChange={e => setPwChange(e.target.checked)}/></PWEdit>
                <Name style={{display: `${pwChange? "flex" : "none"}`}}>이전 비밀번호 <input name="password" type="password" onChange={handleChange}/></Name>
                <Name style={{display: `${pwChange? "flex" : "none"}`}}>새 비밀번호 <input name="newPassword" type="password" onChange={handleChange}/></Name>
              </InfoTitle>
            </div>
            <Line></Line>
          </Info>
        </Box>
      </Body>
    </Wrapper>
  );
};

const Line = styled.div`
  width: 2px;
  height: 330px;
  background-color: #787878;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoTitle = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #787878;
  font-weight: bold;
  & > input {
    font-size: 20px;
    font-weight: inherit;
    border-bottom: 2px solid black;
  }
`;

const PWEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const Charger = styled.div`
  font-size: 20px;
  color: #787878;
  font-weight: bold;
  width: 100%;
  & > select {
    width: 100%;
  }
`;

const TeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:nth-child(1) {
    gap: 20px;
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
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  background-color: white;
  padding: 100px;
  box-sizing: border-box;
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
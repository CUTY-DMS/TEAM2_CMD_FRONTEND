import styled from "styled-components";

const Nav = () => {
  return (
    <Wrapper>
      <Left>
        <img src="" alt="" />
        <h1>시간표</h1>
        <h1>공지사항</h1>
        <h1>학생정보</h1>
      </Left>
      <div className="right">
        <div ClassName="UserInfo">
          <h1>1-2 최수장</h1>
          <h1>로그아웃</h1>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 80%;
  width: 100vw;
  height: 100px;
  flex-shrink: 0;
  background-color: white;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
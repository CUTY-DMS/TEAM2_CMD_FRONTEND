import styled from "styled-components";

const Nav = () => {
  return (
    <Wrapper>
      <div className="left">
        <img src="" />
        <h1>시간표</h1>
        <h1>공지사항</h1>
        <h1>학생정보</h1>
      </div>
      <div className="right">
        
      </div>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  flex-shrink: 0;
  background-color: white;
`;
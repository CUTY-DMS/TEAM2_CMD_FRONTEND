import React from "react";
import styled from "styled-components";
import Nav from "../Components/Nav";
import User from "../Components/User";

function StudentList() {
  return (
    <Wrapper>
      <Nav />
      <LineBox>
        <Line>
          <User />
          <User />
          <User />
        </Line>
      </LineBox>
    </Wrapper>
  );
}

export default StudentList;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const LineBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 15px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 200px;
  margin-bottom: 20px;
`;
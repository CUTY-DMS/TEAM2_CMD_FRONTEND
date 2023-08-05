import { User } from "../Components/common/User";
import { styled } from "styled-components";
import React from "react";

export const StudentList = () => {
  return (
    <Wrapper>
      <Line>
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
        <User Class="1101" Name="김이름" />
      </Line>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;

const Line = styled.div`
  width: 60%;
  gap: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

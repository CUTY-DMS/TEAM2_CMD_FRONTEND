import { TimeTable } from '../Components/common/TimeTable';
import { getWeekNumber } from '../utils/getWeekNumber';
import { styled } from 'styled-components';
import React from 'react';

export const Main = () => {
  const date = new Date();
  const month = date.getMonth()+1;
  const weekNum = getWeekNumber(date);

  return <Wrapper>
    <Title>2023년 {month}월 {weekNum}주차</Title>
    <Table>
      <TimeTable day="월" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
      <TimeTable day="화" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
      <TimeTable day="수" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
      <TimeTable day="목" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
      <TimeTable day="금" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
    </Table>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`

const Table = styled.div`
  gap: 25px;
  display: flex;
  justify-content: center;
`

const Title = styled.h1` font-size: 40px; `
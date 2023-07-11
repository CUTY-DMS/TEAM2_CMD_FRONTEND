import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import TimeTable from '../Components/TimeTable'
const date = new Date();

function Main() {
    //함수 출처 : https://gist.github.com/leegeunhyeok/8695aaf29674b098b7da7696e90810bb
    const getWeekNumber = (dateFrom = new Date()) => {
        const currentDate = dateFrom.getDate();
        const startOfMonth = new Date(dateFrom.setDate(1));
        const weekDay = startOfMonth.getDay();
        return parseInt(((weekDay - 1) + currentDate) / 7) + 1;
    }
    const month = date.getMonth()+1;
    const weekNum = getWeekNumber(date);

    return (
        <Wrapper>
            <Nav />
            <Title>2023년 {month}월 {weekNum}주차</Title>
            <Table>
                <TimeTable day="월" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
                <TimeTable day="화" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
                <TimeTable day="수" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
                <TimeTable day="목" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
                <TimeTable day="금" sub1="국어" sub2="수학" sub3="사회" sub4="과학" sub5="영어" sub6="프로그래밍" sub7="컴퓨터구조"/>
            </Table>
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Table = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
`;

const Title = styled.h1`
    font-size: 40px;
`;
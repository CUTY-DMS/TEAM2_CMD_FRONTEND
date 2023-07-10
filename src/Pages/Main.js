import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';

function Main() {
    return (
        <Wrapper>
            <Nav />
            <Title>2023년 7월 2주차</Title>
            <Table>
                <TimeTable>
                    <TableTitle>월</TableTitle>
                    <Data>국어</Data>
                    <Data>수학</Data>
                    <Data>사회</Data>
                    <Data>과학</Data>
                    <Data>영어</Data>
                    <Data>프로그래밍</Data>
                    <Data>컴퓨터구조</Data>
                </TimeTable>
                <TimeTable><TableTitle>화</TableTitle></TimeTable>
                <TimeTable><TableTitle>수</TableTitle></TimeTable>
                <TimeTable><TableTitle>목</TableTitle></TimeTable>
                <TimeTable><TableTitle>금</TableTitle></TimeTable>
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

const TimeTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 287px;
    height: 676px;
    gap: 20px;
    border-radius: 10px;
    background-color: white;
`;

const Data = styled.h1`
    display: block;
    margin: 0px;
    color: #585858;
    font-size: 25px;
`;

const Title = styled.h1`
    font-size: 45px;
`;

const TableTitle = styled.h1`
    margin: 0px;
`;